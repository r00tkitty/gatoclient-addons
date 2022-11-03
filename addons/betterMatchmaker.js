const addonInfo = {
    name: "Better Matchmaker",  // Addon Name
    id: "betterMatchmaker",     // Addon ID (Referenced by save data)
    version: "1.0.2",        // Version
    thumbnail: "https://github.com/creepycats/gatoclient-addons/blob/main/thumbnails/bettermatchmaker.png?raw=true",           // Thumbnail URL
    description: "Changes Matchmaking to Join Games with a specific gamemode",
    isSocial: false         // UNSUPPORTED - Maybe a future Krunker Hub addon support
};
const addonSettingsUtils = require(require('path').resolve('./') + '/resources/app.asar/app/utils/addonUtils');
const addonSetUtils = new addonSettingsUtils();

class gatoAddon {
    // Fetch Function - DO NOT REMOVE
    static getInfo(infoName) {
        return addonInfo[infoName];
    }
    // Create your inital configurations here
    static firstTimeSetup() {
        // REQUIRED
        addonSetUtils.addConfig(addonInfo["id"], "enabled", true);
        // Add your custom configuration options here
        addonSetUtils.addConfig(addonInfo["id"], "gamemode", "ffa");
    }

    // Runs when page starts loading
    static initialize() {
        console.log("BetterMatchmaker Running");

        var _fetch = window.fetch;
        window.fetch = async (...args) => {
            var search = /matchmaker\.krunker\.io\/seek-game(\?.*)/.exec(args[0]);
            if (!search)
                return _fetch.apply(null, args);

            var query = new URLSearchParams(search[1]);

            var version = query.get('dataQuery'), region = query.get('region'),
                hasGame = query.has('game');

            if (!region || hasGame)
                return _fetch.apply(null, args);

            const gameModes = { ffa: 0, tdm: 1, point: 2, ctf: 3, kc: 19 };

            var resGL = await fetch(`https://matchmaker.krunker.io/game-list?hostname=${
                window.location.hostname}`)
                .then(_ => _.json());
            var gameList = resGL.games.filter(
                game =>
                    game[4].c === 0 &&                     // Custom Filter
                    game[4].v === JSON.parse(version).v && // Version check
                    game[4].g === Number(gameModes[addonSetUtils.getConfig(addonInfo["id"], "gamemode")]) && // Gamemode check
                    game[2] < game[3] // Full Game Check
            )

            var regionFilteredGames =
                gameList.filter(game => game[1] === region); // Filter by region
            if (regionFilteredGames.length !== 0) {
                gameList = regionFilteredGames; // Update game list if available games in
                // correct region and version
            } else {
                alert(
                    'Better Matchmaker: Switching region, no games of correct gamemode and version found.')
            }

            if (!gameList.length) {
                alert('Better Matchmaker: No valid games found. Try again later');
                return _fetch.apply(null, args);
            }

            var shuffledList =
                []; // Shuffle game list to prevent consistantly joining the same game
            while (gameList.length)
                shuffledList.push(
                    ...gameList.splice(Math.floor(Math.random() * gameList.length), 1));
            shuffledList =
                shuffledList.sort((a, b) => b[2] - a[2]); // Sort by player count

            return new Promise(resolve => {
                var index = 0, timeout = Date.now() + 20000;
                async function checkGame() {
                    var gameId = shuffledList[index % shuffledList.length][0];
                    var resGI =
                        await fetch(
                            `https://matchmaker.krunker.io/game-info?game=${gameId}`)
                            .then(_ => _.json()); // Get game data

                    var curPlayers = resGI[2];
                    var maxPlayers = resGI[3];

                    if (curPlayers < maxPlayers) {
                        args[0] += `&game=${gameId}`; // Join if not full
                        checkGame = function () { };
                        _fetch.apply(null, args).then(resolve);
                    } else {
                        if (resGI.error || Date.now() > timeout) {
                            alert('Auto-Join: Failed to join');
                            _fetch.apply(null, args).then(resolve);
                            return;
                        }
                        index++
                        checkGame();
                    }
                }

                checkGame();
            })
        }
    }

    // Runs when page fully loaded
    static domLoaded() {
        
    }

    // Runs when settings update
    static updateSettings() {

    }

    // Loads Addons Settings to Configuration Window
    static loadAddonSettings() {
        addonSetUtils.createForm(addonInfo["id"]);

        addonSetUtils.createCategory("addonSettings", "Addon Settings");
        addonSetUtils.createCheckbox(addonInfo["id"], "enabled", "Enable Addon", "Determines if the Addon loads when refreshing page", "addonSettings", false, 2);
        var dropdownOptions = [["ffa", "Free For All"], ["point", "Point"], ["ctf", "Capture The Flag"], ["kc", "Kill Confirmed"]];
        addonSetUtils.createDropdown(addonInfo["id"], "gamemode", "Desired Gamemode", "Choose what Gamemode the matchmaker will try to find", dropdownOptions, "addonSettings", false, 2);

        addonSetUtils.hookSaving(addonInfo["id"], __dirname);
    }
}
module.exports = gatoAddon
