const addonInfo = {
    name:"Keystrokes Overlay",  // Addon Name
    id:"keystrokeOverlay",     // Addon ID (Referenced by save data)
    version:"1.0.0",        // Version
    thumbnail:"https://media.discordapp.net/attachments/901905234861883432/965766624235896882/unknown.png",           // Thumbnail URL
    description:"Gatoclient Keyboard Overlay",
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
    static firstTimeSetup(){
        // REQUIRED
        addonSetUtils.addConfig("enabled", true);
        // Add your custom configuration options here
    }

    // Runs when page starts loading
    static initialize() {
        console.log("Keybinds Running")
    }
    // Runs when page fully loaded
    static domLoaded() {

    }
    // Runs when addon is disabled
    static deactivate(){
        
    }

    // Runs when settings update
    static updateSettings(){

    }

    // Loads Addons Settings to Configuration Window
    static loadAddonSettings() {
        addonSetUtils.createForm(addonInfo["id"]);

        addonSetUtils.createCategory("addonSettings", "Addon Settings");
        addonSetUtils.createCheckbox(addonInfo["id"], "enabled", "Enable Addon", "Determines if the Addon loads when refreshing page", "addonSettings", false);

        addonSetUtils.hookSaving(addonInfo["id"]);
    }
}
module.exports = gatoAddon
