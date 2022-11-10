const addonInfo = {
    name: "Live Inbox Notifications",  // Addon Name
    id: "inboxNotifier",     // Addon ID (Referenced by save data)
    version: "1.0.0",        // Version
    thumbnail: "https://github.com/creepycats/gatoclient-addons/blob/main/thumbnails/inboxnotifier.png?raw=true",           // Thumbnail URL
    description: "Shows a notification in game when you get a new message in your inbox",
    isSocial: false         // UNSUPPORTED - Maybe a future Krunker Hub addon support
};
const path = require('path');
const addonSettingsUtils = require(path.resolve('./') + '/resources/app.asar/app/utils/addonUtils');
const addonSetUtils = new addonSettingsUtils();
const notificationUtils = require(path.resolve('./') + '/resources/app.asar/app/utils/notificationUtils');

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
        addonSetUtils.addConfig(addonInfo["id"], "showFull", true);
        addonSetUtils.addConfig(addonInfo["id"], "followers", true);
        addonSetUtils.addConfig(addonInfo["id"], "hub", true);
        addonSetUtils.addConfig(addonInfo["id"], "inbox", true);
        addonSetUtils.addConfig(addonInfo["id"], "misc", true);
    }

    // Runs when page starts loading
    static initialize() {

    }

    // Runs when page fully loaded
    static domLoaded() {
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.type === 'attributes') {
                    hookInbox();
                    observer.disconnect();
                }
            });
        });
        let loadingBg = document.getElementById("loadingBg")
        observer.observe(loadingBg, { attributes: true });
        var oldWindowData = [];
        var hasDoneTooMany = false;
        async function checkNotifs(args) {
            if (args[1].length > 0 && args[0] != 4) {
                var filteredArgs = [];
                for (const msg in args[1]) {
                    let msgData = args[1][msg];
                    if (oldWindowData == undefined || !oldWindowData.includes(msgData["km_id"])) {
                        oldWindowData[oldWindowData.length] = msgData["km_id"];
                        filteredArgs[filteredArgs.length] = msgData;
                    }
                }
                if (filteredArgs.length < 3) {
                    for (const msg in filteredArgs) {
                        let msgData = filteredArgs[msg];
                        window.log(msgData);
                        let title = "New Message";
                        let notifContent = "Check your Inbox!";
                        let classified = false;
                        let msgSubject = msgData["km_subject"];
                        if (msgSubject === "New Follower" && addonSetUtils.getConfig(addonInfo["id"], "inbox")) {
                            title = "New Follower";
                            notifContent = msgData["km_link"] + " has followed you";
                            classified = true;
                        }
                        if (msgSubject.includes("sent you") && addonSetUtils.getConfig(addonInfo["id"], "inbox")) {
                            title = "You received a gift!";
                            notifContent = msgSubject;
                            classified = true;
                        }
                        if (msgSubject === "Craft order" && addonSetUtils.getConfig(addonInfo["id"], "inbox")) {
                            title = "Your Item is Crafted!";
                            notifContent = "Your item is finished crafting!";
                            classified = true;
                        }
                        if (msgSubject === "New Comment" && addonSetUtils.getConfig(addonInfo["id"], "hub")) {
                            title = "New Comment";
                            notifContent = "Someone has commented on your post";
                            classified = true;
                        }
                        if(classified || addonSetUtils.getConfig(addonInfo["id"], "misc")){
                            notificationUtils.createNotif("email", title, notifContent, "#42d12c", 3000);
                        }
                    }
                } else {
                    if (!hasDoneTooMany) {
                        hasDoneTooMany = true;
                        notificationUtils.createNotif("email", "You have Unread Messages", "Consider reading them", "#42d12c", 3000);
                    }
                }
            }
        }
        function hookInbox() {
            let old = window.windows[29].onData;
            window.windows[29].onData = function (...args) {
                window.log('Inbox data', args)
                checkNotifs(args);
                return old.apply(this, arguments)
            }
            setInterval(async () => {
                window.windows[29].gen()
            }, 10000)
            setTimeout(async () => {
                window.windows[29].switchTab(0)
            }, 5000)
        }
    }

    // Runs when settings update
    static updateSettings() {

    }

    // Loads Addons Settings to Configuration Window
    static loadAddonSettings() {
        addonSetUtils.createForm(addonInfo["id"]);

        addonSetUtils.createCategory("addonSettings", "Addon Settings");
        addonSetUtils.createCheckbox(addonInfo["id"], "enabled", "Enable Addon", "Determines if the Addon loads when refreshing page", "addonSettings", false, 2);

        addonSetUtils.createCategory("notifSettings", "Notification Settings");
        addonSetUtils.createCheckbox(addonInfo["id"], "showFull", "Compress Old Inbox Notif", "Show a notification when loading the game with 3 or more unread notifications", "notifSettings", false, 2);
        addonSetUtils.createCheckbox(addonInfo["id"], "followers", "Show New Follow", "Show a notification every time you recieve a follower", "notifSettings", false, 2);
        addonSetUtils.createCheckbox(addonInfo["id"], "hub", "Show Hub Updates", "Show a notification every time you recieve a reply on the hub", "notifSettings", false, 2);
        addonSetUtils.createCheckbox(addonInfo["id"], "inbox", "Show Gifts + Crafting", "Show a notification every time you recieve a message or gift", "notifSettings", false, 2);
        addonSetUtils.createCheckbox(addonInfo["id"], "misc", "Show Miscellaneous", "Show a notification when it is unclassified", "notifSettings", false, 2);

        addonSetUtils.hookSaving(addonInfo["id"], __dirname);
    }
}
module.exports = gatoAddon
