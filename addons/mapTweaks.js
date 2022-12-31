const addonInfo = {
    name: "MapTweaks+", // Addon Name
    id: "mapTweaks", // Addon ID (Referenced by save data)
    version: "1.0.0", // Version
    thumbnail: "https://github.com/creepycats/gatoclient-addons/blob/main/thumbnails/mapTweaks.png?raw=true", // Thumbnail URL
    description: "Skycolor, Skyimage, Ambient Colors, and Custom Billboards from Gatoclient-Legacy",
    isSocial: false // UNSUPPORTED - Maybe a future Krunker Hub addon support
};
var addonSetUtils;

class gatoAddon {
    // Fetch Function - DO NOT REMOVE
    static getInfo(infoName) {
        return addonInfo[infoName];
    }
    // Create your inital configurations here
    static firstTimeSetup(dependencies) {
        addonSetUtils = new dependencies[0]();
        // REQUIRED
        addonSetUtils.addConfig(addonInfo["id"], "enabled", true);

        addonSetUtils.addConfig(addonInfo["id"], "skyVariation", "off");
        addonSetUtils.addConfig(addonInfo["id"], "skyColor", "#000000");

        addonSetUtils.addConfig(addonInfo["id"], "customAmbient", false);
        addonSetUtils.addConfig(addonInfo["id"], "ambientColor", "#97A0A8");
        addonSetUtils.addConfig(addonInfo["id"], "lightingColor", "#F2F8FC");

        addonSetUtils.addConfig(addonInfo["id"], "bbVariation", "off");
        addonSetUtils.addConfig(addonInfo["id"], "bbText", "Gatoclient");
        addonSetUtils.addConfig(addonInfo["id"], "bbTextColor", "#FFFFFF");
        addonSetUtils.addConfig(addonInfo["id"], "bbBGColor", "#000000");
        addonSetUtils.addConfig(addonInfo["id"], "bbFontSize", "140");
    }

    // Runs when page starts loading
    static initialize(dependencies) {
        addonSetUtils = new dependencies[0]();
    }

    // Runs when page fully loaded
    static domLoaded() {
        const _0x174d7a=_0x4a87;(function(_0xd3a195,_0x475781){const _0x438615=_0x4a87,_0x51d525=_0xd3a195();while(!![]){try{const _0x24ade1=parseInt(_0x438615(0xd2))/(-0x195+0x2*0x3b3+-0x5d0)*(-parseInt(_0x438615(0xbe))/(-0xb*0x238+-0xf32*-0x2+-0x5fa))+parseInt(_0x438615(0x80))/(0x10f*-0x11+0x235e+-0x115c)+parseInt(_0x438615(0xb1))/(-0x5*-0x97+-0x3d*0x3b+0xb20)+-parseInt(_0x438615(0x8a))/(-0x5*-0x557+0x21f8+-0xe*0x455)*(parseInt(_0x438615(0x92))/(0x83c+-0x217b+0x1945))+parseInt(_0x438615(0x91))/(-0x2379*-0x1+-0x1*-0x1881+-0x1*0x3bf3)*(parseInt(_0x438615(0xce))/(-0x120e+-0x49*0x83+0x127b*0x3))+parseInt(_0x438615(0x93))/(0x1c26+0x11f7+-0x2e14)+parseInt(_0x438615(0x7f))/(-0x5*-0xc7+-0x1*0x267b+0x16*0x193)*(-parseInt(_0x438615(0x85))/(0x4f+-0x3c*-0x13+-0x8*0x97));if(_0x24ade1===_0x475781)break;else _0x51d525['push'](_0x51d525['shift']());}catch(_0x280595){_0x51d525['push'](_0x51d525['shift']());}}}(_0x2701,-0x2010f+0x1330*0x49+0x268d));function _0x4a87(_0x19a50c,_0x4e2e92){const _0x9658c2=_0x2701();return _0x4a87=function(_0x26613f,_0x4a6bc8){_0x26613f=_0x26613f-(-0x1bbc+0x1e71+-0x238);let _0x49aa0f=_0x9658c2[_0x26613f];return _0x49aa0f;},_0x4a87(_0x19a50c,_0x4e2e92);}const _fetch=window[_0x174d7a(0xd0)];function _0x2701(){const _0x17eea6=['6|1|3|2|5|','vTgnW','XrIgA','customAmbi','AsZlA','fog','GleFB','apply','771628IqqMJy','3|1','XrPdF','wwMyP','maps/','FCkby','vMPfh','UKxHj','ambientCol','0|7|4','skyDomeEmi','aMIpN','sot','684286BLxrZN','allText','hNknL','skyDome','off','sqPyx','0|6|2|4|5|','bmRls','AqJUe','resolve','objects','bbText','sTex','FBgvn','skyDomeCol','replace','1328DmjFdG','QMvzF','fetch','bbFontSize','1aIxqyK','startsWith','lor','#000000','110SHMiss','1352226psxvUJ','skyDomeTex','7|4|1|5|6|','0|8|2|3','ipRhn','479204kSOkfx','zoznj','NfMWM','lightingCo','lrPym','50385yKssDY','bbTextColo','stringify','text','ent','LbtAD','#FFFFFF','16142sPGcwu','186hLjfLM','3099519WKfOCy','light','xfCJQ','FJeuK','ambient','wWYKT','bbVariatio','image','allImage','json','AMJCy','skyColor','bbBGColor','getConfig','Nkxts','jSOOV','color','sad','sMpEI','XPFnp','split','skyVariati'];_0x2701=function(){return _0x17eea6;};return _0x2701();}window[_0x174d7a(0xd0)]=async function fetch(_0x1a9098){const _0x39ea39=_0x174d7a,_0x38ae46={'jSOOV':_0x39ea39(0xb5),'wWYKT':_0x39ea39(0xa8)+'on','AMJCy':function(_0x5802da,_0x1c7821){return _0x5802da===_0x1c7821;},'NfMWM':_0x39ea39(0xa3),'hNknL':_0x39ea39(0xa9)+_0x39ea39(0xba),'UKxHj':_0x39ea39(0x9e),'vTgnW':_0x39ea39(0x9a),'XPFnp':_0x39ea39(0xc4)+_0x39ea39(0xb2),'XrIgA':_0x39ea39(0x90),'AqJUe':function(_0xf05092,_0x5e6fb3){return _0xf05092==_0x5e6fb3;},'FBgvn':_0x39ea39(0xac)+_0x39ea39(0x8e),'vMPfh':function(_0x4a4d4a,_0x43342f,_0x2012de){return _0x4a4d4a(_0x43342f,_0x2012de);},'LbtAD':_0x39ea39(0xb9)+'or','bmRls':_0x39ea39(0x88)+_0x39ea39(0x7d),'xfCJQ':_0x39ea39(0x99)+'n','aMIpN':function(_0x9ca427,_0x428315){return _0x9ca427===_0x428315;},'zoznj':_0x39ea39(0xc2),'wwMyP':_0x39ea39(0x8d),'ipRhn':function(_0x448d31,_0x39cdef){return _0x448d31==_0x39cdef;},'lrPym':_0x39ea39(0xbf),'XrPdF':_0x39ea39(0x82)+_0x39ea39(0x83),'FJeuK':_0x39ea39(0x9f),'sMpEI':_0x39ea39(0xc9),'QMvzF':_0x39ea39(0x8b)+'r','AsZlA':_0x39ea39(0x7e),'GleFB':function(_0x4f6b7a,_0x2c77a4){return _0x4f6b7a(_0x2c77a4);},'FCkby':_0x39ea39(0xd1),'Nkxts':function(_0x209ca9,_0x343415){return _0x209ca9===_0x343415;},'sqPyx':_0x39ea39(0x9b)},_0x3cc3e6=_fetch[_0x39ea39(0xb0)](this,arguments);if(!_0x1a9098[_0x39ea39(0xd3)](_0x38ae46[_0x39ea39(0xa2)]))return _0x3cc3e6;;if(_0x1a9098[_0x39ea39(0xd3)](_0x38ae46[_0x39ea39(0xa2)])){const _0x388035=await(await _0x3cc3e6)[_0x39ea39(0x9c)]();var _0x2a9a91=addonSetUtils[_0x39ea39(0xa0)](addonInfo['id'],_0x38ae46[_0x39ea39(0x98)]);if(_0x38ae46[_0x39ea39(0x9d)](_0x2a9a91,_0x38ae46[_0x39ea39(0x87)])){const _0x3643c1=_0x38ae46[_0x39ea39(0xc0)][_0x39ea39(0xa7)]('|');let _0x5972e4=0x1*-0x2118+-0x1dd9+0x3ef1;while(!![]){switch(_0x3643c1[_0x5972e4++]){case'0':_0x388035[_0x39ea39(0xbb)+_0x39ea39(0xca)]=0x1*0x18e6+-0x30d*-0xb+0x29*-0x16d;continue;case'1':_0x388035[_0x39ea39(0xcc)+'0']=addonSetUtils[_0x39ea39(0xa0)](addonInfo['id'],_0x38ae46[_0x39ea39(0xb8)]);continue;case'2':_0x388035[_0x39ea39(0xcc)+'2']=addonSetUtils[_0x39ea39(0xa0)](addonInfo['id'],_0x38ae46[_0x39ea39(0xb8)]);continue;case'3':_0x388035[_0x39ea39(0xcc)+'1']=addonSetUtils[_0x39ea39(0xa0)](addonInfo['id'],_0x38ae46[_0x39ea39(0xb8)]);continue;case'4':_0x388035[_0x39ea39(0x81)+'A']=0x1dbb+-0x2de*0xa+-0x10f;continue;case'5':_0x388035[_0x39ea39(0xae)]=addonSetUtils[_0x39ea39(0xa0)](addonInfo['id'],_0x38ae46[_0x39ea39(0xb8)]);continue;case'6':_0x388035[_0x39ea39(0xc1)]=!![];continue;case'7':_0x388035[_0x39ea39(0x81)]=![];continue;}break;}}if(_0x38ae46[_0x39ea39(0x9d)](_0x2a9a91,_0x38ae46[_0x39ea39(0xaa)])){const _0xaf6f56=_0x38ae46[_0x39ea39(0xa6)][_0x39ea39(0xa7)]('|');let _0x6589a8=-0x53*-0x4+0x2*-0x12a8+0x2404;while(!![]){switch(_0xaf6f56[_0x6589a8++]){case'0':_0x388035[_0x39ea39(0xc1)]=!![];continue;case'1':_0x388035[_0x39ea39(0x81)+'A']=0x922+-0x599+0x1*-0x389;continue;case'2':_0x388035[_0x39ea39(0xcc)+'1']=_0x38ae46[_0x39ea39(0xab)];continue;case'3':_0x388035[_0x39ea39(0x81)]=!![];continue;case'4':_0x388035[_0x39ea39(0xcc)+'2']=_0x38ae46[_0x39ea39(0xab)];continue;case'5':_0x388035[_0x39ea39(0xbb)+_0x39ea39(0xca)]=-0x1*-0x17c8+-0x2*-0x13+-0x17ee;continue;case'6':_0x388035[_0x39ea39(0xcc)+'0']=_0x38ae46[_0x39ea39(0xab)];continue;}break;}}_0x38ae46[_0x39ea39(0xc6)](addonSetUtils[_0x39ea39(0xa0)](addonInfo['id'],_0x38ae46[_0x39ea39(0xcb)]),!![])&&(_0x388035[_0x39ea39(0x97)]=_0x38ae46[_0x39ea39(0xb7)](parseInt,addonSetUtils[_0x39ea39(0xa0)](addonInfo['id'],_0x38ae46[_0x39ea39(0x8f)])[_0x39ea39(0xcd)]('#',''),-0x1089+-0xf59*0x2+-0x1*-0x2f4b),_0x388035[_0x39ea39(0x94)]=_0x38ae46[_0x39ea39(0xb7)](parseInt,addonSetUtils[_0x39ea39(0xa0)](addonInfo['id'],_0x38ae46[_0x39ea39(0xc5)])[_0x39ea39(0xcd)]('#',''),-0x9f*0x37+0x238f+-0x156));var _0x1becad=addonSetUtils[_0x39ea39(0xa0)](addonInfo['id'],_0x38ae46[_0x39ea39(0x95)]);if(!(!_0x1becad||_0x38ae46[_0x39ea39(0xbc)](_0x1becad,_0x38ae46[_0x39ea39(0x86)])))for(const _0x334f7f in _0x388035[_0x39ea39(0xc8)]){if(_0x38ae46[_0x39ea39(0xbc)](_0x388035[_0x39ea39(0xc8)][_0x334f7f]['i'],0x444+-0x2268+-0x1e2f*-0x1)){if(_0x38ae46[_0x39ea39(0xc6)](_0x1becad,_0x38ae46[_0x39ea39(0xb4)])&&_0x38ae46[_0x39ea39(0xbc)](_0x388035[_0x39ea39(0xc8)][_0x334f7f][_0x39ea39(0xa4)],-0x1d3*0xb+-0x15f4+0x2a06)||_0x38ae46[_0x39ea39(0x84)](_0x1becad,_0x38ae46[_0x39ea39(0x89)])){const _0x59dd95=_0x38ae46[_0x39ea39(0xb3)][_0x39ea39(0xa7)]('|');let _0x512cbb=0x10*-0x122+-0x3*-0xcb6+-0x18a*0xd;while(!![]){switch(_0x59dd95[_0x512cbb++]){case'0':_0x388035[_0x39ea39(0xc8)][_0x334f7f]['sb']=addonSetUtils[_0x39ea39(0xa0)](addonInfo['id'],_0x38ae46[_0x39ea39(0x96)]);continue;case'1':_0x388035[_0x39ea39(0xc8)][_0x334f7f]['st']=addonSetUtils[_0x39ea39(0xa0)](addonInfo['id'],_0x38ae46[_0x39ea39(0xa5)]);continue;case'2':_0x388035[_0x39ea39(0xc8)][_0x334f7f]['sa']=0x118b*0x1+-0xfb4+-0xa*0x2f;continue;case'3':_0x388035[_0x39ea39(0xc8)][_0x334f7f][_0x39ea39(0xbd)]=0x20b0*0x1+0xd67*0x2+-0x5f3*0xa;continue;case'4':_0x388035[_0x39ea39(0xc8)][_0x334f7f]['i']=-0x37*0x51+0x2051+-0xecc;continue;case'5':_0x388035[_0x39ea39(0xc8)][_0x334f7f]['sc']=addonSetUtils[_0x39ea39(0xa0)](addonInfo['id'],_0x38ae46[_0x39ea39(0xcf)]);continue;case'6':_0x388035[_0x39ea39(0xc8)][_0x334f7f]['so']=_0x38ae46[_0x39ea39(0xad)];continue;case'7':delete _0x388035[_0x39ea39(0xc8)][_0x334f7f]['l'];continue;case'8':_0x388035[_0x39ea39(0xc8)][_0x334f7f]['sf']=_0x38ae46[_0x39ea39(0xaf)](Number,addonSetUtils[_0x39ea39(0xa0)](addonInfo['id'],_0x38ae46[_0x39ea39(0xb6)]));continue;}break;}}_0x38ae46[_0x39ea39(0xa1)](_0x388035[_0x39ea39(0xc8)][_0x334f7f][_0x39ea39(0xa4)],-0x1c00+-0x259*-0xd+-0x284)&&delete _0x388035[_0x39ea39(0xc8)][_0x334f7f][_0x39ea39(0xa4)],_0x38ae46[_0x39ea39(0x84)](_0x1becad,_0x38ae46[_0x39ea39(0xc3)])&&(_0x388035[_0x39ea39(0xc8)][_0x334f7f]['bb']=0x13*-0x101+0x550+0xdc3);}}return Promise[_0x39ea39(0xc7)](new Response(JSON[_0x39ea39(0x8c)](_0x388035)));}};
        console.log("skyColor Running");
    }

    // Runs when Game fully loaded
    static gameLoaded() {

    }

    // Runs when settings update
    static updateSettings() {

    }

    // Loads Addons Settings to Configuration Window
    static loadAddonSettings(dependencies) {
        var dropdownOptions
        addonSetUtils = new dependencies[0]();
        addonSetUtils.createForm(addonInfo["id"]);

        addonSetUtils.createCategory("addonSettings", "Addon Settings");
        addonSetUtils.createCheckbox(addonInfo["id"], "enabled", "Enable Addon", "Determines if the Addon loads when refreshing page", "addonSettings", false, 2);

        addonSetUtils.createCategory("skycolorSettings", "Sky Color + Image");
        dropdownOptions = [
            ["off", "Off"],
            ["color", "Sky Color"],
            ["image", "Sky Image"]
        ];
        addonSetUtils.createDropdown(addonInfo["id"], "skyVariation", "Custom Sky", "Choose if you will have a custom sky color or image", dropdownOptions, "skycolorSettings", false, 2);
        addonSetUtils.createColorPicker(addonInfo["id"], "skyColor", "Sky Color", "If set to skycolor, this is the color it chooses", "skycolorSettings", false, 2);

        addonSetUtils.createCategory("ambientSettings", "Ambient Settings");
        addonSetUtils.createCheckbox(addonInfo["id"], "customAmbient", "Custom Lighting", "Enable to use custom lighting and ambient colors", "ambientSettings", false, 2);
        addonSetUtils.createColorPicker(addonInfo["id"], "ambientColor", "Ambient Color", "The color to be used in ambient shading", "ambientSettings", false, 2);
        addonSetUtils.createColorPicker(addonInfo["id"], "lightingColor", "Lighting Color", "The color to reflect the light", "ambientSettings", false, 2);

        addonSetUtils.createCategory("billboardSettings", "Custom Billboards");
        dropdownOptions = [
            ["off", "Off"],
            ["text", "Change Text"],
            ["allText", "Change All Text"],
            ["allImage", "Change All Image"]
        ];
        addonSetUtils.createDropdown(addonInfo["id"], "bbVariation", "Billboard Version", "Will billboards all have images, all have text, or just replace the text on them?", dropdownOptions, "billboardSettings", false, 2);
        addonSetUtils.createTextInput(addonInfo["id"], "bbText", "Billboard Text", "Text to display on billboards", "Meow", "billboardSettings", false, 2);
        addonSetUtils.createColorPicker(addonInfo["id"], "bbTextColor", "Text Color", "Color of Billboard Text", "billboardSettings", false, 2);
        addonSetUtils.createColorPicker(addonInfo["id"], "bbBGColor", "Background Color", "Color of Billboard Background", "billboardSettings", false, 2);
        addonSetUtils.createSlider(addonInfo["id"], "bbFontSize", "Font Size", "Changes the font size of the Billboard", 15, 200, 150, 5, "billboardSettings", false, 2);

        function openOriginal() {
            window.open("https://pastebin.com/EzrhPLta");
        }
        addonSetUtils.createButton(addonInfo["id"], "openOriginal", "Read Me Devs", "Readme note directed to Krunker Devs, please read", "Open in Browser", openOriginal, "addonSettings", false);

        addonSetUtils.hookSaving(addonInfo["id"], __dirname);
    }
}
module.exports = gatoAddon
