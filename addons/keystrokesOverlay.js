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
const addonSetUtils = new addonSettingsUtils(addonInfo["id"]);

class gatoAddon {
    // Fetch Function - DO NOT REMOVE
    constructor(){

    }
    
    getInfo(infoName) {
        return addonInfo[infoName];
    }

    // Create your inital configurations here
    firstTimeSetup(){
        // REQUIRED
        addonSetUtils.addConfig("enabled", true);
        // Add your custom configuration options here
    }

    // Runs when page starts loading
    initialize() {
        
    }
    // Runs when page fully loaded
    domLoaded() {

    }
    // Runs when addon is disabled
    deactivate(){
        
    }

    // Runs when settings update
    updateSettings(){

    }

    // Loads Addons Settings to Configuration Window
    loadAddonSettings() {
        addonSetUtils.createForm();

        addonSetUtils.createCategory("addonSettings", "Addon Settings");
        addonSetUtils.createCheckbox("enabled", "Enable Addon", "Determines if the Addon loads when refreshing page", "addonSettings", false);

        addonSetUtils.hookSaving();
    }
}
module.exports = gatoAddon
