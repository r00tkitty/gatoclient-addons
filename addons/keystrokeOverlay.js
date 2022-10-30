const addonInfo = {
    name: "Keystrokes Overlay",  // Addon Name
    id: "keystrokeOverlay",     // Addon ID (Referenced by save data)
    version: "1.0.0",        // Version
    thumbnail: "https://github.com/creepycats/gatoclient-addons/blob/main/thumbnails/keyboardoverlay.png?raw=true",           // Thumbnail URL
    description: "Keyboard Overlay based off of the Crankshaft Keystrokes by KraXen72",
    isSocial: false         // UNSUPPORTED - Maybe a future Krunker Hub addon support
};
const Store = require('electron-store');
const userPrefs = new Store();
const addonSettingsUtils = require(require('path').resolve('./') + '/app/utils/addonUtils');
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
        addonSetUtils.addConfig(addonInfo["id"], "auxKey1", "R");
        addonSetUtils.addConfig(addonInfo["id"], "auxKey2", "G");

        addonSetUtils.addConfig(addonInfo["id"], "leftPercent", 50);
        addonSetUtils.addConfig(addonInfo["id"], "topPercent", 90);
        addonSetUtils.addConfig(addonInfo["id"], "scale", 0.5);
    }

    // Runs when page starts loading
    static initialize() {
        console.log("Keybinds Running");
    }

    // Runs when page fully loaded
    static domLoaded() {
        // here you can mess with the values
        const size = 2.5 //how many rem will one of the keys be in height
        const auxKey1 = addonSetUtils.getConfig(addonInfo["id"], "auxKey1")
        const auxKey2 = addonSetUtils.getConfig(addonInfo["id"], "auxKey2")

        //ok don't touch it past this point unless you know what you're doing
        const keysHTML = `
    <span class="key key-w">W</span>
    <span class="key key-a">A</span>
    <span class="key key-s">S</span>
    <span class="key key-d">D</span>
    <span class="key key-sft">sft</span>
    <span class="key key-space">__</span>
    <span class="key key-aux1">${auxKey1}</span>
    <span class="key key-aux2">${auxKey2}</span>
`
        function precisionRound(number, precision = 2) {
            let factor = Math.pow(10, precision);
            return Math.round(number * factor) / factor;
        }
        let css = `
    .keystrokes-hold {
        display: grid;
        grid-template: repeat(3, ${size}rem) / repeat(8, ${precisionRound(size / 2)}rem);
        grid-template-areas: 
        "empty1 empty2 keyw keyw empty3 empty4 empty5 empty6" 
        "keya keya keys keys keyd keyd aux1 aux1"
        "shift shift shift space space space aux2 aux2";
        position: absolute;
        column-gap: ${precisionRound(size / 10)}rem;
        row-gap: ${precisionRound(size / 5)}rem;
    }
    .key {
        background: #262626;
        color: white;
        font-size: ${precisionRound((size / 2) * 1)}rem;
        font-weight: bold;
        border: 2px solid black;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: ${size}rem;
        min-height: ${size}rem;
    }
    .key-sft, .key-space {
        font-size: ${precisionRound((size / 2) * 0.66)}rem;
    }
    .key-w { grid-area: keyw; }
    .key-a { grid-area: keya; }
    .key-s { grid-area: keys; }
    .key-d { grid-area: keyd; }
    .key-sft { grid-area: shift; }
    .key-space { grid-area: space; }
    .key-aux1 { grid-area: aux1; }
    .key-aux2 { grid-area: aux2; }
    .active {
        background: #868686;
        color: #232323;
    }
`

        const injectSettingsCss = (css, classId = "keystrokes-css") => {
            let s = document.createElement("style");
            s.setAttribute("id", classId);
            s.innerHTML = css;
            document.head.appendChild(s);
        }

        injectSettingsCss(css)
        const hold = document.createElement("div")
        hold.classList.add("keystrokes-hold")
        var scale = Number(addonSetUtils.getConfig(addonInfo["id"], "scale")) + 0.5;
        var leftPos = addonSetUtils.getConfig(addonInfo["id"], "leftPercent")
        var topPos = addonSetUtils.getConfig(addonInfo["id"], "topPercent")
        hold.style = `top:${topPos}%;left:${leftPos}%; transform: translate(-50%,-50%) scale(${scale});`;
        hold.innerHTML = keysHTML
        document.getElementById("inGameUI").appendChild(hold)

        const keys = [
            { keyCode: 87, elem: document.querySelector(".keystrokes-hold .key.key-w") },
            { keyCode: 65, elem: document.querySelector(".keystrokes-hold .key.key-a") },
            { keyCode: 83, elem: document.querySelector(".keystrokes-hold .key.key-s") },
            { keyCode: 68, elem: document.querySelector(".keystrokes-hold .key.key-d") },
            { keyCode: 16, elem: document.querySelector(".keystrokes-hold .key.key-sft") },
            { keyCode: 32, elem: document.querySelector(".keystrokes-hold .key.key-space") },
            { keyCode: auxKey1.charCodeAt(0), elem: document.querySelector(".keystrokes-hold .key.key-aux1") },
            { keyCode: auxKey2.charCodeAt(0), elem: document.querySelector(".keystrokes-hold .key.key-aux2") }
        ]

        function handleKeyDown(event) {
            keys[6]["keyCode"] = keys[6]["elem"].textContent.charCodeAt(0);
            keys[7]["keyCode"] = keys[7]["elem"].textContent.charCodeAt(0);
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                if (event.keyCode === key.keyCode) {
                    key.elem.classList.add("active")
                }
            }
        }

        function handleKeyUp(event) {
            keys[6]["keyCode"] = keys[6]["elem"].textContent.charCodeAt(0);
            keys[7]["keyCode"] = keys[7]["elem"].textContent.charCodeAt(0);
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                if (event.keyCode === key.keyCode) {
                    key.elem.classList.remove("active")
                }
            }
        }

        document.addEventListener("keydown", handleKeyDown)
        document.addEventListener("keyup", handleKeyUp)
    }

    // Runs when settings update
    static updateSettings() {
        var auxKey1 = addonSetUtils.getConfig(addonInfo["id"], "auxKey1")
        var auxKey2 = addonSetUtils.getConfig(addonInfo["id"], "auxKey2")
        const keys = [
            { keyCode: 87, elem: document.querySelector(".keystrokes-hold .key.key-w") },
            { keyCode: 65, elem: document.querySelector(".keystrokes-hold .key.key-a") },
            { keyCode: 83, elem: document.querySelector(".keystrokes-hold .key.key-s") },
            { keyCode: 68, elem: document.querySelector(".keystrokes-hold .key.key-d") },
            { keyCode: 16, elem: document.querySelector(".keystrokes-hold .key.key-sft") },
            { keyCode: 32, elem: document.querySelector(".keystrokes-hold .key.key-space") },
            { keyCode: auxKey1.charCodeAt(0), elem: document.querySelector(".keystrokes-hold .key.key-aux1") },
            { keyCode: auxKey2.charCodeAt(0), elem: document.querySelector(".keystrokes-hold .key.key-aux2") }
        ]
        document.querySelector(".keystrokes-hold .key.key-aux1").textContent = auxKey1;
        document.querySelector(".keystrokes-hold .key.key-aux2").textContent = auxKey2;

        var scale = Number(addonSetUtils.getConfig(addonInfo["id"], "scale")) + 0.5;
        var leftPos = addonSetUtils.getConfig(addonInfo["id"], "leftPercent")
        var topPos = addonSetUtils.getConfig(addonInfo["id"], "topPercent")

        document.querySelector(".keystrokes-hold").style = `top:${topPos}%;left:${leftPos}%; transform: translate(-50%,-50%) scale(${scale});`;
    }

    // Loads Addons Settings to Configuration Window
    static loadAddonSettings() {
        addonSetUtils.createForm(addonInfo["id"]);

        addonSetUtils.createCategory("addonSettings", "Addon Settings");
        addonSetUtils.createCheckbox(addonInfo["id"], "enabled", "Enable Addon", "Determines if the Addon loads when refreshing page", "addonSettings", false);

        addonSetUtils.createCategory("visualSettings", "Visual Settings");
        addonSetUtils.createSlider(addonInfo["id"], "leftPercent", "X Position (%)", "Changes the X position of the overlay. Based by percentage from left to right", 0, 100, 50, 1, "visualSettings", false);
        addonSetUtils.createSlider(addonInfo["id"], "topPercent", "Y Position (%)", "Changes the Y position of the overlay. Based by percentage from top to bottom", 0, 100, 90, 1, "visualSettings", false);
        addonSetUtils.createSlider(addonInfo["id"], "scale", "Scale", "Changes the scale of the overlay", 0.1, 3.0, 0.5, 0.1, "visualSettings", false);

        addonSetUtils.createCategory("extraKeysSettings", "Extra Keys");
        addonSetUtils.createTextInput(addonInfo["id"], "auxKey1", "Extra Key 1", "The extra key that will show up on the overlay", "Key 1", "extraKeysSettings", false);
        addonSetUtils.createTextInput(addonInfo["id"], "auxKey2", "Extra Key 2", "The extra key that will show up on the overlay", "Key 2", "extraKeysSettings", false);

        function openOriginal() {
            window.open("https://gist.github.com/KraXen72/2ea1332440b0c66b83ca9b73afc38269");
        }
        addonSetUtils.createButton(addonInfo["id"], "openOriginal", "Original Script", "This is a modified version of KraXen's script, here is the original", "Open in Browser", openOriginal, "addonSettings", false);

        addonSetUtils.hookSaving(addonInfo["id"], __dirname);
    }
}
module.exports = gatoAddon
