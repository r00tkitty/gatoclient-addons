const addonInfo = {
    name: "Optic Zoom",  // Addon Name
    id: "opticZoom",     // Addon ID (Referenced by save data)
    version: "1.0.0",        // Version
    thumbnail: "https://github.com/creepycats/gatoclient-addons/blob/main/thumbnails/opticzoom.png?raw=true",           // Thumbnail URL
    description: "Similar to Minecraft Optifine's zoom key, press a key to zoom in",
    isSocial: false         // UNSUPPORTED - Maybe a future Krunker Hub addon support
};
const addonSettingsUtils = require(require('path').resolve('./') + '/resources/app.asar/app/utils/addonUtils');
const { keyFromCode } = require(require('path').resolve('./') + '/resources/app.asar/app/utils/utils');
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
        addonSetUtils.addConfig(addonInfo["id"], "zoomkey", "67");

        addonSetUtils.addConfig(addonInfo["id"], "zoomamt", 2.5);
    }

    // Runs when page starts loading
    static initialize() {
        console.log("opticZoom Running");
    }

    // Runs when page fully loaded
    static domLoaded() {
        var canvases = [];
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.type === 'attributes') {
                    document.addEventListener("keydown", handleKeyDown)
                    document.addEventListener("keyup", handleKeyUp)
                    canvases = Array.from(document.getElementsByTagName('canvas'));
                    canvases.forEach(element => element.addEventListener("mousedown", handleMouseDown));
                    document.addEventListener("mouseup", handleMouseUp);
                    observer.disconnect();
                }
            });
        });
        let loadingBg = document.getElementById("loadingBg")
        observer.observe(loadingBg, { attributes: true });

        const zoomMult = addonSetUtils.getConfig(addonInfo["id"], "zoomamt")
        const zoomKey = addonSetUtils.getConfig(addonInfo["id"], "zoomkey")

        let css = `
        .gatoZoom{transform:scale(${zoomMult})}
        `

        const injectSettingsCss = (css, classId = "opticzoom-css") => {
            let s = document.createElement("style");
            s.setAttribute("id", classId);
            s.innerHTML = css;
            document.head.appendChild(s);
        }

        injectSettingsCss(css)

        const keys = [
            { keyCode: zoomKey }
        ]

        function handleKeyDown(event) {
            switch (event.target.tagName.toLowerCase()) {
                case "input":
                case "textarea":
                case "select":
                case "button":
                    break;
                default:
                    keys[0]["keyCode"] = addonSetUtils.getConfig(addonInfo["id"], "zoomkey")
                    for (let i = 0; i < keys.length; i++) {
                        const key = keys[i];
                        var kC = key.keyCode;
                        if (typeof kC === "number") {
                            kC = parseInt(kC);
                        }
                        if (String(kC).substring(0, 1) != "M" && String(event.keyCode) === String(kC)) {
                            //canvases.forEach(element => element.classList.add("gatoZoom"));
                            canvases[4].classList.add("gatoZoom")
                        }
                    }
            }
        }
        function handleKeyUp(event) {
            switch (event.target.tagName.toLowerCase()) {
                case "input":
                case "textarea":
                case "select":
                case "button":
                    break;
                default:
                    keys[0]["keyCode"] = addonSetUtils.getConfig(addonInfo["id"], "zoomkey")
                    for (let i = 0; i < keys.length; i++) {
                        const key = keys[i];
                        var kC = key.keyCode;
                        if (typeof kC === "number") {
                            kC = parseInt(kC);
                        }
                        if (String(kC).substring(0, 1) != "M" && String(event.keyCode) === String(kC)) {
                            //canvases.forEach(element => element.classList.remove("gatoZoom"));
                            canvases[4].classList.remove("gatoZoom")
                        }
                    }
            }
        }
        function handleMouseDown(event) {
            switch (event.target.tagName.toLowerCase()) {
                case "input":
                case "textarea":
                case "select":
                case "button":
                    break;
                default:
                    keys[0]["keyCode"] = addonSetUtils.getConfig(addonInfo["id"], "zoomkey")
                    for (let i = 0; i < keys.length; i++) {
                        const key = keys[i];
                        var kC = key.keyCode;
                        if (typeof kC === "number") {
                            kC = parseInt(kC);
                        }
                        if (String(kC).substring(0, 1) == "M" && "M" + event.button === String(kC)) {
                            //canvases.forEach(element => element.classList.add("gatoZoom"));
                            canvases[4].classList.add("gatoZoom")
                        }
                    }
            }
        }
        function handleMouseUp(event) {
            switch (event.target.tagName.toLowerCase()) {
                case "input":
                case "textarea":
                case "select":
                case "button":
                    break;
                default:
                    keys[0]["keyCode"] = addonSetUtils.getConfig(addonInfo["id"], "zoomkey")
                    for (let i = 0; i < keys.length; i++) {
                        const key = keys[i];
                        var kC = key.keyCode;
                        if (typeof kC === "number") {
                            kC = parseInt(kC);
                        }
                        if (String(kC).substring(0, 1) == "M" && "M" + event.button === String(kC)) {
                            //canvases.forEach(element => element.classList.remove("gatoZoom"));
                            canvases[4].classList.remove("gatoZoom")
                        }
                    }
            }
        }
    }

    // Runs when settings update
    static updateSettings() {
        const zoomMult = addonSetUtils.getConfig(addonInfo["id"], "zoomamt")
        let css = `
        .gatoZoom{transform:scale(${zoomMult})}
        `

        const injectSettingsCss = (css, classId = "opticzoom-css") => {
            let s = document.createElement("style");
            s.setAttribute("id", classId);
            s.innerHTML = css;
            document.head.appendChild(s);
        }

        document.getElementById("opticzoom-css").remove();
        injectSettingsCss(css)
    }

    // Loads Addons Settings to Configuration Window
    static loadAddonSettings() {
        addonSetUtils.createForm(addonInfo["id"]);

        addonSetUtils.createCategory("addonSettings", "Addon Settings");
        addonSetUtils.createCheckbox(addonInfo["id"], "enabled", "Enable Addon", "Determines if the Addon loads when refreshing page", "addonSettings", false, 2);
        addonSetUtils.createSlider(addonInfo["id"], "zoomamt", "Zoom Amount", "Changes the zoom amount", 1.1, 5.0, 2.5, 0.1, "addonSettings", false);
        addonSetUtils.createKeybindInput(addonInfo["id"], "zoomkey", "Zoom Keybind", "The key that will trigger zoom", "addonSettings", false);
        addonSetUtils.hookSaving(addonInfo["id"], __dirname);
    }
}
module.exports = gatoAddon
