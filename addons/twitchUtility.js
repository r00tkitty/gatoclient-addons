const addonInfo = {
    name: "Twitch Chat Integration",  // Addon Name
    id: "twitchUtility",     // Addon ID (Referenced by save data)
    version: "1.0.0",        // Version
    thumbnail: "https://github.com/creepycats/gatoclient-addons/blob/main/thumbnails/keyboardoverlay.png?raw=true",           // Thumbnail URL
    description: "Allows you to integrate your Twitch chat ingame (!link, Chat View)",
    isSocial: false,         // UNSUPPORTED - Maybe a future Krunker Hub addon support
    modules: [
        "@twurple/auth",
        "@twurple/chat",
        "@twurple/auth-electron"
    ]
};
const path = require('path');
const fs = require('fs');
const addonSettingsUtils = require(path.resolve('./') + '/resources/app.asar/app/utils/addonUtils');
const addonSetUtils = new addonSettingsUtils();
const client_id = "omnaylafso0f3fdtzwrwk5qdb24km9";

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
    }

    // Runs when page starts loading
    static initialize() {
        const { ElectronAuthProvider } = require("./plugin_packages/@twurple/auth-electron");
        const redirectUri = 'http://localhost';
        console.log("Twitch Int > Initializing Twitch Stuff");
            
        const authProvider = new ElectronAuthProvider({
            clientId,
            redirectUri
        });
    
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
        addonSetUtils.createCheckbox(addonInfo["id"], "enabled", "Enable Addon", "Determines if the Addon loads when refreshing page", "addonSettings", false);

        addonSetUtils.hookSaving(addonInfo["id"], __dirname);
    }
}
module.exports = gatoAddon
