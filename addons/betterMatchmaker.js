const addonInfo = {
    name: "Better Matchmaker +", // Addon Name
    id: "betterMatchmaker", // Addon ID (Referenced by save data)
    version: "1.0.4", // Version
    thumbnail: "https://github.com/creepycats/gatoclient-addons/blob/main/thumbnails/bettermatchmaker.png?raw=true", // Thumbnail URL
    description: "Completely Overhauls Matchmaker to be Fully Customizable",
    isSocial: false // UNSUPPORTED - Maybe a future Krunker Hub addon support
};
const path = require('path');
const addonSettingsUtils = require(path.resolve('./') + '/resources/app.asar/app/utils/addonUtils');
const addonSetUtils = new addonSettingsUtils();
const notificationUtils = require(path.resolve('./') + '/resources/app.asar/app/utils/notificationUtils');

const MODES = {
    ffa: 0,
    tdm: 1,
    point: 2,
    ctf: 3,
    bhop: 4,
    hide: 5,
    infect: 6,
    race: 7,
    lms: 8,
    simon: 9,
    gun: 10,
    prop: 11,
    boss: 12,
    class: 13,
    depo: 14,
    stalk: 15,
    king: 16,
    oinc: 17,
    trade: 18,
    kc: 19,
    def: 20,
    sharp: 21,
    trai: 22,
    raid: 23,
    blitz: 24,
    dom: 25,
    sdm: 26,
    krank: 27,
    tdf: 28,
    depoffa: 29,
    chs: 33,
    bhffa: 34
};
const REGIONS = {
    "us-nj": "New York",
    "us-il": "Chicago",
    "us-tx": "Dallas",
    "us-wa": "Seattle",
    "us-ca-la": "Los Angeles",
    "us-ga": "Atlanta",
    "nl-ams": "Amsterdam",
    "gb-lon": "London",
    "de-fra": "Frankfurt",
    "us-ca-sv": "Silicon Valley",
    "au-syd": "Sydney",
    "fr-par": "Paris",
    "jb-hnd": "Tokyo",
    "us-fl": "Miami",
    sgp: "Singapore",
    blr: "India",
    brz: "Brazil",
    "me-bhn": "Middle East",
    "af-ct": "South Africa",
    "as-seoul": "South Korea",
    "mx-cmx": "Mexico",
    "eu-stm": "Sweden",
    tor: "Toronto",
    pol: "Poland",
    "us-hi": "Hawaii"
};

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

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
        addonSetUtils.addConfig(addonInfo["id"], "useJoin", false);
        addonSetUtils.addConfig(addonInfo["id"], "streamerMode", false);
        addonSetUtils.addConfig(addonInfo["id"], "ignoreEmpty", true);
        addonSetUtils.addConfig(addonInfo["id"], "ignoreLate", true);
        addonSetUtils.addConfig(addonInfo["id"], "joinMatchOCustom", false);
        addonSetUtils.addConfig(addonInfo["id"], "joinMatchCustom", false);
        addonSetUtils.addConfig(addonInfo["id"], "bmmKey", "115");
    }

    // Runs when page starts loading
    static initialize() {
        console.log("BetterMatchmaker Running");
        if (addonSetUtils.getConfig(addonInfo["id"], "fix") != true) {
            Object.keys(MODES).forEach(function (key) {
                addonSetUtils.addConfig(addonInfo["id"], `gamemodes.${key}`, false);
            });
            Object.keys(REGIONS).forEach(function (key) {
                addonSetUtils.addConfig(addonInfo["id"], `regions.${key}`, false);
            });
            addonSetUtils.addConfig(addonInfo["id"], "fix", true);

            addonSetUtils.addConfig(addonInfo["id"], `gamemodes.ffa`, true);
            addonSetUtils.addConfig(addonInfo["id"], "useJoin", false);
            addonSetUtils.addConfig(addonInfo["id"], "ignoreEmpty", true);
            addonSetUtils.addConfig(addonInfo["id"], "ignoreLate", true);
            addonSetUtils.addConfig(addonInfo["id"], "joinMatchOCustom", false);
            addonSetUtils.addConfig(addonInfo["id"], "joinMatchCustom", false);
            addonSetUtils.addConfig(addonInfo["id"], "bmmKey", "115");
        }

        if (addonSetUtils.getConfig(addonInfo["id"], "useJoin") == true) {
            addonSetUtils.addConfig(addonInfo["id"], "useJoin", false)
            var _fetch = window.fetch;
            window.fetch = async (...args) => {
                var search = /matchmaker\.krunker\.io\/seek-game(\?.*)/.exec(args[0]);
                if (!search)
                    return _fetch.apply(null, args);

                notificationUtils.createNotif("hourglass_empty", "BMM+ | Matchmaking", "Finding a Game...", "#75a2eb", 3000);

                var query = new URLSearchParams(search[1]);

                var version = query.get('dataQuery'),
                    region = query.get('region'),
                    hasGame = query.has('game');

                if (!region || hasGame)
                    return _fetch.apply(null, args);

                var allowedModes = [];
                Object.keys(MODES).forEach(function (key) {
                    if (addonSetUtils.getConfig(addonInfo["id"], `gamemodes.${key}`) == true) {
                        allowedModes.push(MODES[key]);
                    }
                });
                var allowedRegions = [];
                Object.keys(REGIONS).forEach(function (key) {
                    if (addonSetUtils.getConfig(addonInfo["id"], `regions.${key}`) == true) {
                        allowedRegions.push(key);
                    }
                });

                var resGL = await fetch(`https://matchmaker.krunker.io/game-list?hostname=${window.location.hostname}`)
                    .then(_ => _.json());

                let myRegion = null;
                //if (addonSetUtils.getConfig(addonInfo["id"], "joinCurrentRegion")) {
                //    myRegion = new RegExp(`${addonSetUtils.getConfig(addonInfo["id"], "lastRegion")}:.+`);
                //} else {
                    myRegion = new RegExp(/.+:.+/);
                //}
                var gameList = resGL.games.filter(game => game[2] < game[3] && (addonSetUtils.getConfig(addonInfo["id"], "ignoreEmpty") ? game[2] > 0 : game[2] < game[3]) && game[0] != addonSetUtils.getConfig(addonInfo["id"], "lastCode") && game[4].v === JSON.parse(version).v && (addonSetUtils.getConfig(addonInfo["id"], "ignoreLate") ? game[5] > 60 : true) && (addonSetUtils.getConfig(addonInfo["id"], "joinCurrentRegion") != true && allowedRegions.length > 0 ? allowedRegions.includes(game[1]) : myRegion.test(game[0])) && (allowedModes.includes(game[4].g)) && (addonSetUtils.getConfig(addonInfo["id"], "joinMatchCustom") ? game[4].c : !game[4].c) && (addonSetUtils.getConfig(addonInfo["id"], "joinMatchOCustom") ? game[4].oc : !game[4].oc));

                if (!gameList.length) {
                    alert('Better Matchmaker: No valid games found. Try again later');
                    return _fetch.apply(null, args);
                }

                var shuffledList = []; // Shuffle game list to prevent consistantly joining the same game
                while (gameList.length)
                    shuffledList.push(
                        ...gameList.splice(Math.floor(Math.random() * gameList.length), 1));
                shuffledList =
                    shuffledList.sort((a, b) => b[2] - a[2]); // Sort by player count

                window.log(shuffledList)
                return new Promise(resolve => {
                    var index = 0,
                        timeout = Date.now() + 20000;
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
                            checkGame = function () {};
                            let seconds = resGI[5];
                            let minutes = Math.floor(seconds / 60);
                            seconds = seconds - (minutes * 60);
                            var secString = String(seconds);
                            if(seconds < 10){
                                secString = `0${seconds}`
                            }

                            notificationUtils.createNotif("assignment_turned_in", "BMM+ | Found Game", `${addonSetUtils.getConfig(addonInfo["id"], `streamerMode`) == true ? "Hidden" : REGIONS[resGI[1]]} - ${getKeyByValue(MODES, resGI[4].g)}_${resGI[4].i} (${curPlayers}/${maxPlayers})  Remaining Time: ${minutes}:${secString}`, "#75a2eb", 6000);
                            _fetch.apply(null, args).then(resolve);
                        } else {
                            if (resGI.error || Date.now() > timeout) {
                                alert('Better Matchmaker: Failed to join');
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
    }

    // Runs when page fully loaded
    static domLoaded() {
        document.addEventListener("keydown", (event) => {
            if (event.keyCode == addonSetUtils.getConfig(addonInfo["id"], "bmmKey")) {
                addonSetUtils.addConfig(addonInfo["id"], "useJoin", true);
                const gameActivity = window.getGameActivity();
                addonSetUtils.addConfig(addonInfo["id"], "lastRegion", `${gameActivity.id.slice(0, 3)}`);
                addonSetUtils.addConfig(addonInfo["id"], "lastCode", `${gameActivity.id}`);
                window.location.replace('https://krunker.io');
            }
        })
    }

    static gameLoaded() {

    }

    // Runs when settings update
    static updateSettings() {

    }

    // Loads Addons Settings to Configuration Window
    static loadAddonSettings() {
        addonSetUtils.createForm(addonInfo["id"]);

        addonSetUtils.createCategory("addonSettings", "Addon Settings");
        addonSetUtils.createCheckbox(addonInfo["id"], "enabled", "Enable Addon", "Determines if the Addon loads when refreshing page", "addonSettings", false, 2);
        addonSetUtils.createKeybindInput(addonInfo["id"], "bmmKey", "BetterMatchmaker Hotkey", "The key that when pressed will activate BetterMatchmaker", "addonSettings", false);
        //addonSetUtils.createCheckbox(addonInfo["id"], "joinCurrentRegion", "Only include Last Region", "Will only allow you to join matches in the same region you are in", "addonSettings", false);
        addonSetUtils.createCheckbox(addonInfo["id"], "joinMatchOCustom", "Join Official Customs", "Will allow the matchmaker to put you in an official custom", "addonSettings", false);
        addonSetUtils.createCheckbox(addonInfo["id"], "joinMatchCustom", "Join Custom Matches", "Will allow the matchmaker to put you in custom matches", "addonSettings", false);
        addonSetUtils.createCheckbox(addonInfo["id"], "ignoreEmpty", "Skip Empty Lobbies", "Will prevent the matchmaker from putting you in almost empty lobbies", "addonSettings", false);
        addonSetUtils.createCheckbox(addonInfo["id"], "ignoreLate", "Skip Late Joins", "Will prevent the matchmaker from putting you in almost ending lobbies", "addonSettings", false);
        addonSetUtils.createCheckbox(addonInfo["id"], "streamerMode", "Streamer Mode", "Hides region from notification", "addonSettings", false);

        addonSetUtils.createCategory("gamemodeSettings", "Gamemodes");
        Object.keys(MODES).forEach(function (key) {
            addonSetUtils.createCheckbox(addonInfo["id"], `gamemodes.${key}`, key.toUpperCase(), "Enable to allow BetterMatchmaker to join games of this mode", "gamemodeSettings", false);
        });
        addonSetUtils.createCategory("regionSettings", "Regions");
        Object.keys(REGIONS).forEach(function (key) {
            addonSetUtils.createCheckbox(addonInfo["id"], `regions.${key}`, REGIONS[key], "Enable to allow BetterMatchmaker to join games of this region", "regionSettings", false);
        });

        addonSetUtils.hookSaving(addonInfo["id"], __dirname);
    }
}
module.exports = gatoAddon
