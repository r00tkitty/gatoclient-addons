const addonInfo = {
    name: "MapTweaks+", // Addon Name
    id: "mapTweaks", // Addon ID (Referenced by save data)
    version: "1.0.2", // Version
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

        addonSetUtils.addConfig(addonInfo["id"], "customFog", false);
        addonSetUtils.addConfig(addonInfo["id"], "fogColor", "#000000");

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
        const _0x1e55e9=_0xbc41;(function(_0xc67adc,_0x1a9855){const _0x2489e3=_0xbc41,_0x3b358e=_0xc67adc();while(!![]){try{const _0x1253e0=parseInt(_0x2489e3(0x141))/(-0x104e+-0x168d*-0x1+-0x2*0x31f)*(-parseInt(_0x2489e3(0x123))/(-0x199b+0x1*0x2087+-0x6ea))+parseInt(_0x2489e3(0x160))/(0x16cf+0x4*0x799+-0x3530)+-parseInt(_0x2489e3(0xed))/(0x1e60+0x16da+-0x3536)+parseInt(_0x2489e3(0x139))/(-0x133*0x4+-0x11e6+0x16b7)*(-parseInt(_0x2489e3(0x166))/(0x165f+-0x2153*0x1+0xafa))+parseInt(_0x2489e3(0x173))/(0xb5*0x1+-0x11*-0x77+0xd*-0xa9)*(-parseInt(_0x2489e3(0x15b))/(-0xa2b+-0xdb9+-0x17ec*-0x1))+parseInt(_0x2489e3(0x159))/(-0x315*0x5+0x169c+-0x72a)+parseInt(_0x2489e3(0x16c))/(0x1*0x1939+0x25dc+-0x3f0b);if(_0x1253e0===_0x1a9855)break;else _0x3b358e['push'](_0x3b358e['shift']());}catch(_0x3fbfbd){_0x3b358e['push'](_0x3b358e['shift']());}}}(_0x172a,0x1*0x93aa5+0x1940a5+-0x1546a2));function _0xbc41(_0x969788,_0x353016){const _0x1d4a66=_0x172a();return _0xbc41=function(_0x43ab84,_0x3a92fa){_0x43ab84=_0x43ab84-(0x2175+-0x765+-0x17b*0x11);let _0xfed3c9=_0x1d4a66[_0x43ab84];return _0xfed3c9;},_0xbc41(_0x969788,_0x353016);}const _fetch=window[_0x1e55e9(0x16d)];window[_0x1e55e9(0x16d)]=function fetch(_0x41be42){const _0x1739ce=_0x1e55e9,_0x658081={'ZWXeq':_0x1739ce(0x121)+'on','ENEgu':function(_0x2f77c8,_0x3dbb6e){return _0x2f77c8===_0x3dbb6e;},'CUpaa':_0x1739ce(0x119),'QCawK':_0x1739ce(0x125)+_0x1739ce(0x13d),'TeNUv':_0x1739ce(0x156),'svhzN':_0x1739ce(0x131),'isrSd':_0x1739ce(0x164)+_0x1739ce(0x147),'zQEAV':_0x1739ce(0x12d),'VuTJO':_0x1739ce(0x118),'shJXU':function(_0x1c608c,_0x1e9975){return _0x1c608c==_0x1e9975;},'QLcfB':_0x1739ce(0x143),'qqlxQ':_0x1739ce(0x168),'WKGDH':_0x1739ce(0x107)+_0x1739ce(0x10f),'GYmRO':function(_0x2055ca,_0x1d39f6,_0x33f96d){return _0x2055ca(_0x1d39f6,_0x33f96d);},'crfrm':_0x1739ce(0x178)+'or','wBWWP':function(_0x41b265,_0xcc0a3e,_0x41bab8){return _0x41b265(_0xcc0a3e,_0x41bab8);},'sHino':_0x1739ce(0x120)+_0x1739ce(0x11e),'NLhbR':_0x1739ce(0x12b)+'n','nxhmi':_0x1739ce(0x142),'dHMBT':_0x1739ce(0x15a),'CQxdg':_0x1739ce(0x12a),'KgBYN':_0x1739ce(0x150)+_0x1739ce(0x13e),'jjHpK':_0x1739ce(0x14d),'EPBwo':function(_0x1cbaa2,_0x5dbd12){return _0x1cbaa2(_0x5dbd12);},'JkAWK':_0x1739ce(0x115),'sAKwS':_0x1739ce(0x151)+'r','MOwwu':_0x1739ce(0xf3),'hLJDg':_0x1739ce(0x172),'DlhiO':function(_0x42b6d9,_0x4e3df8){return _0x42b6d9(_0x4e3df8);}};let _0x458cdf=_fetch[_0x1739ce(0x135)](this,arguments);return new Promise((_0x20a922,_0x4ac2dc)=>{const _0x31afb9=_0x1739ce,_0x333999={'Vkqtl':_0x658081[_0x31afb9(0x155)],'KiLWr':function(_0x1e9836,_0x4a2695){const _0x14d147=_0x31afb9;return _0x658081[_0x14d147(0x15c)](_0x1e9836,_0x4a2695);},'rLUlq':_0x658081[_0x31afb9(0x130)],'bJFxm':_0x658081[_0x31afb9(0xe7)],'XfWNt':_0x658081[_0x31afb9(0x17a)],'mwVNL':_0x658081[_0x31afb9(0x158)],'yzoRe':_0x658081[_0x31afb9(0x116)],'OUIEH':_0x658081[_0x31afb9(0x109)],'NMPcm':_0x658081[_0x31afb9(0x108)],'UvWbE':function(_0x14f129,_0x5400c0){const _0xda015d=_0x31afb9;return _0x658081[_0xda015d(0x163)](_0x14f129,_0x5400c0);},'ZSyig':_0x658081[_0x31afb9(0x100)],'nWafH':_0x658081[_0x31afb9(0xf0)],'eihHt':_0x658081[_0x31afb9(0x14a)],'olZzL':function(_0x2811de,_0x5eb905,_0xc51376){const _0xd1740a=_0x31afb9;return _0x658081[_0xd1740a(0x11a)](_0x2811de,_0x5eb905,_0xc51376);},'hgyYT':_0x658081[_0x31afb9(0xe6)],'iDTsP':function(_0x10b5d1,_0x4fe569,_0x219714){const _0x4a356d=_0x31afb9;return _0x658081[_0x4a356d(0x17b)](_0x10b5d1,_0x4fe569,_0x219714);},'dchNY':_0x658081[_0x31afb9(0xe5)],'DKAQD':_0x658081[_0x31afb9(0x13c)],'rIvjX':_0x658081[_0x31afb9(0xee)],'vyYPJ':_0x658081[_0x31afb9(0xf4)],'VmqzP':function(_0x56e02f,_0x23fca2){const _0x5ee60f=_0x31afb9;return _0x658081[_0x5ee60f(0x163)](_0x56e02f,_0x23fca2);},'opnxF':_0x658081[_0x31afb9(0x11c)],'dnoBv':_0x658081[_0x31afb9(0xff)],'bAsgN':_0x658081[_0x31afb9(0xf7)],'ZqojY':function(_0x236e2a,_0x164069){const _0xb2c89c=_0x31afb9;return _0x658081[_0xb2c89c(0x169)](_0x236e2a,_0x164069);},'IpjqA':_0x658081[_0x31afb9(0x175)],'jgKPC':_0x658081[_0x31afb9(0xfa)],'vlbvM':_0x658081[_0x31afb9(0x171)],'PFzFL':_0x658081[_0x31afb9(0x165)],'lqSpZ':function(_0x2a8009,_0x330183){const _0x1bb9dc=_0x31afb9;return _0x658081[_0x1bb9dc(0x152)](_0x2a8009,_0x330183);},'cveie':function(_0x28d0e2,_0xdd8884){const _0x187feb=_0x31afb9;return _0x658081[_0x187feb(0x169)](_0x28d0e2,_0xdd8884);}};_0x458cdf[_0x31afb9(0x16e)](_0x1e2b31=>{const _0x459d06=_0x31afb9,_0x71bc4f={'RZTHl':function(_0x4f6b24,_0xaa8914){const _0x54fef4=_0xbc41;return _0x333999[_0x54fef4(0x103)](_0x4f6b24,_0xaa8914);}};let _0x4f9be4=_0x1e2b31[_0x459d06(0x140)];_0x1e2b31[_0x459d06(0x140)]=function _0x3b5691(){const _0x33e50e=_0x459d06,_0x6338f1={'JzOhR':_0x333999[_0x33e50e(0x122)],'adXVf':function(_0x57c9b4,_0x386bdf){const _0x42b654=_0x33e50e;return _0x333999[_0x42b654(0x146)](_0x57c9b4,_0x386bdf);},'JWckS':_0x333999[_0x33e50e(0x15d)],'KjRWO':_0x333999[_0x33e50e(0x113)],'AdAAO':_0x333999[_0x33e50e(0x112)],'xtczo':_0x333999[_0x33e50e(0x111)],'UtXuC':_0x333999[_0x33e50e(0x174)],'Leatm':_0x333999[_0x33e50e(0xf2)],'FswoE':_0x333999[_0x33e50e(0x10c)],'tbxSO':function(_0x59cfb8,_0x3d3418){const _0xa81635=_0x33e50e;return _0x333999[_0xa81635(0xec)](_0x59cfb8,_0x3d3418);},'thnLF':_0x333999[_0x33e50e(0x13f)],'HjhKx':_0x333999[_0x33e50e(0x10a)],'MTVQy':_0x333999[_0x33e50e(0x145)],'qfREv':function(_0x32f130,_0x4ae0a8,_0x14dbc6){const _0x10cac1=_0x33e50e;return _0x333999[_0x10cac1(0x126)](_0x32f130,_0x4ae0a8,_0x14dbc6);},'olrwH':_0x333999[_0x33e50e(0x154)],'vqDkZ':function(_0x13e24d,_0x47178c,_0x120b5b){const _0x5d4eee=_0x33e50e;return _0x333999[_0x5d4eee(0xf8)](_0x13e24d,_0x47178c,_0x120b5b);},'mszsd':_0x333999[_0x33e50e(0x12e)],'MBXgi':_0x333999[_0x33e50e(0xef)],'hHefc':function(_0x3cec8b,_0xf62119){const _0x5a6110=_0x33e50e;return _0x333999[_0x5a6110(0x146)](_0x3cec8b,_0xf62119);},'oGIJp':_0x333999[_0x33e50e(0x117)],'OjAVM':_0x333999[_0x33e50e(0x14e)],'NVsbT':function(_0x4adad0,_0x186dbd){const _0x5eae45=_0x33e50e;return _0x333999[_0x5eae45(0x133)](_0x4adad0,_0x186dbd);},'PeYog':_0x333999[_0x33e50e(0x153)],'guAxf':_0x333999[_0x33e50e(0x137)],'whlkq':_0x333999[_0x33e50e(0x10d)],'LJrLh':function(_0x3fc1e5,_0x336dde){const _0x932665=_0x33e50e;return _0x333999[_0x932665(0x103)](_0x3fc1e5,_0x336dde);},'SOHYJ':_0x333999[_0x33e50e(0x138)],'iebcn':_0x333999[_0x33e50e(0x148)],'LMinh':_0x333999[_0x33e50e(0xe8)],'cyQus':function(_0x1957cb,_0xadddc3){const _0x1a2433=_0x33e50e;return _0x333999[_0x1a2433(0x146)](_0x1957cb,_0xadddc3);},'WreVs':_0x333999[_0x33e50e(0x157)]};return new Promise((_0x55f623,_0x520bc7)=>{const _0x337a85=_0x33e50e,_0x3e6e61={'pCNIc':function(_0x53691a,_0x1477bb){const _0x1b7ec5=_0xbc41;return _0x71bc4f[_0x1b7ec5(0x101)](_0x53691a,_0x1477bb);}};_0x4f9be4[_0x337a85(0x135)](this,arguments)[_0x337a85(0x16e)](_0x829ad9=>{const _0x4c1725=_0x337a85;if(_0x829ad9[_0x4c1725(0x13a)]&&_0x829ad9[_0x4c1725(0xf9)]){var _0x504fd4=addonSetUtils[_0x4c1725(0xfd)](addonInfo['id'],_0x6338f1[_0x4c1725(0xeb)]);if(_0x6338f1[_0x4c1725(0x124)](_0x504fd4,_0x6338f1[_0x4c1725(0xfb)])){const _0x3cdcc4=_0x6338f1[_0x4c1725(0x11d)][_0x4c1725(0xf1)]('|');let _0x504864=0x1*0xd3+-0x1*-0x2365+-0x2438;while(!![]){switch(_0x3cdcc4[_0x504864++]){case'0':_0x829ad9[_0x4c1725(0x144)+'A']=0x3*-0xa49+-0xf36+0x3*0xf5b;continue;case'1':_0x829ad9[_0x4c1725(0x144)]=![];continue;case'2':_0x829ad9[_0x4c1725(0x161)]=!![];continue;case'3':_0x829ad9[_0x4c1725(0x170)+_0x4c1725(0x10b)]=-0x9*0x3ae+0x1e71+0x2ad;continue;case'4':_0x829ad9[_0x4c1725(0x127)+'2']=addonSetUtils[_0x4c1725(0xfd)](addonInfo['id'],_0x6338f1[_0x4c1725(0xe9)]);continue;case'5':_0x829ad9[_0x4c1725(0x127)+'1']=addonSetUtils[_0x4c1725(0xfd)](addonInfo['id'],_0x6338f1[_0x4c1725(0xe9)]);continue;case'6':_0x829ad9[_0x4c1725(0x127)+'0']=addonSetUtils[_0x4c1725(0xfd)](addonInfo['id'],_0x6338f1[_0x4c1725(0xe9)]);continue;}break;}}if(_0x6338f1[_0x4c1725(0x124)](_0x504fd4,_0x6338f1[_0x4c1725(0x177)])){const _0x169ed3=_0x6338f1[_0x4c1725(0x12c)][_0x4c1725(0xf1)]('|');let _0x18d93e=-0xf48+0x312+0xc36;while(!![]){switch(_0x169ed3[_0x18d93e++]){case'0':_0x829ad9[_0x4c1725(0x144)+'A']=-0x1*0xde7+0x56*0x11+-0x3*-0x2bb;continue;case'1':_0x829ad9[_0x4c1725(0x127)+'1']=_0x6338f1[_0x4c1725(0x179)];continue;case'2':_0x829ad9[_0x4c1725(0x170)+'s']=_0x6338f1[_0x4c1725(0x149)];continue;case'3':_0x829ad9[_0x4c1725(0x161)]=!![];continue;case'4':_0x829ad9[_0x4c1725(0x144)]=!![];continue;case'5':_0x829ad9[_0x4c1725(0x127)+'2']=_0x6338f1[_0x4c1725(0x179)];continue;case'6':_0x829ad9[_0x4c1725(0x127)+'0']=_0x6338f1[_0x4c1725(0x179)];continue;case'7':_0x829ad9[_0x4c1725(0x170)+_0x4c1725(0x10b)]=0xc56+-0xb*-0x2db+-0x2bbf;continue;}break;}}_0x6338f1[_0x4c1725(0x16f)](addonSetUtils[_0x4c1725(0xfd)](addonInfo['id'],_0x6338f1[_0x4c1725(0x104)]),!![])&&(_0x829ad9[_0x4c1725(0x15e)]=addonSetUtils[_0x4c1725(0xfd)](addonInfo['id'],_0x6338f1[_0x4c1725(0x11b)]));_0x6338f1[_0x4c1725(0x16f)](addonSetUtils[_0x4c1725(0xfd)](addonInfo['id'],_0x6338f1[_0x4c1725(0x11f)]),!![])&&(_0x829ad9[_0x4c1725(0x16b)]=_0x6338f1[_0x4c1725(0x12f)](parseInt,addonSetUtils[_0x4c1725(0xfd)](addonInfo['id'],_0x6338f1[_0x4c1725(0x167)])[_0x4c1725(0x15f)]('#',''),-0x56c*0x3+0x45*-0x37+0x1f27*0x1),_0x829ad9[_0x4c1725(0x14f)]=_0x6338f1[_0x4c1725(0x10e)](parseInt,addonSetUtils[_0x4c1725(0xfd)](addonInfo['id'],_0x6338f1[_0x4c1725(0xea)])[_0x4c1725(0x15f)]('#',''),-0x2647+-0x7ce*-0x5+-0x1*0xaf));var _0x35aeb2=addonSetUtils[_0x4c1725(0xfd)](addonInfo['id'],_0x6338f1[_0x4c1725(0x134)]);if(!(!_0x35aeb2||_0x6338f1[_0x4c1725(0x162)](_0x35aeb2,_0x6338f1[_0x4c1725(0x129)])))for(const _0x2732a8 in _0x829ad9[_0x4c1725(0xf9)]){if(_0x6338f1[_0x4c1725(0x162)](_0x829ad9[_0x4c1725(0xf9)][_0x2732a8]['i'],-0x4*0x5b4+0x914+0xdc7*0x1)){if(_0x6338f1[_0x4c1725(0x16f)](_0x35aeb2,_0x6338f1[_0x4c1725(0x128)])&&_0x6338f1[_0x4c1725(0x124)](_0x829ad9[_0x4c1725(0xf9)][_0x2732a8][_0x4c1725(0x14c)],0x231b+0x5bc+0x2*-0x146b)||_0x6338f1[_0x4c1725(0xfc)](_0x35aeb2,_0x6338f1[_0x4c1725(0x114)])){const _0x53a1f6=_0x6338f1[_0x4c1725(0x102)][_0x4c1725(0xf1)]('|');let _0xc82ec1=0x1fba+0xb8e*0x1+-0x2b48;while(!![]){switch(_0x53a1f6[_0xc82ec1++]){case'0':_0x829ad9[_0x4c1725(0xf9)][_0x2732a8]['i']=0x34a*-0x5+0x11d0+0x8*-0x28;continue;case'1':_0x829ad9[_0x4c1725(0xf9)][_0x2732a8][_0x4c1725(0x105)]=-0x199*0x2+-0x1323*-0x1+-0xff1;continue;case'2':_0x829ad9[_0x4c1725(0xf9)][_0x2732a8]['st']=addonSetUtils[_0x4c1725(0xfd)](addonInfo['id'],_0x6338f1[_0x4c1725(0x106)]);continue;case'3':_0x829ad9[_0x4c1725(0xf9)][_0x2732a8]['so']=_0x6338f1[_0x4c1725(0x149)];continue;case'4':_0x829ad9[_0x4c1725(0xf9)][_0x2732a8]['sf']=_0x6338f1[_0x4c1725(0x16a)](Number,addonSetUtils[_0x4c1725(0xfd)](addonInfo['id'],_0x6338f1[_0x4c1725(0xf5)]));continue;case'5':_0x829ad9[_0x4c1725(0xf9)][_0x2732a8]['sc']=addonSetUtils[_0x4c1725(0xfd)](addonInfo['id'],_0x6338f1[_0x4c1725(0xf6)]);continue;case'6':delete _0x829ad9[_0x4c1725(0xf9)][_0x2732a8]['l'];continue;case'7':_0x829ad9[_0x4c1725(0xf9)][_0x2732a8]['sb']=addonSetUtils[_0x4c1725(0xfd)](addonInfo['id'],_0x6338f1[_0x4c1725(0x110)]);continue;case'8':_0x829ad9[_0x4c1725(0xf9)][_0x2732a8]['sa']=-0x36c*-0x7+-0x109f+-0x4*0x1d5;continue;}break;}}_0x6338f1[_0x4c1725(0x14b)](_0x829ad9[_0x4c1725(0xf9)][_0x2732a8][_0x4c1725(0x14c)],-0x1425+0x1b7b+-0x755)&&delete _0x829ad9[_0x4c1725(0xf9)][_0x2732a8][_0x4c1725(0x14c)],_0x6338f1[_0x4c1725(0xfc)](_0x35aeb2,_0x6338f1[_0x4c1725(0x13b)])&&(_0x829ad9[_0x4c1725(0xf9)][_0x2732a8]['bb']=-0x1*0x1239+0x1969+-0x730);}}}_0x6338f1[_0x4c1725(0x16a)](_0x55f623,_0x829ad9);})[_0x337a85(0xfe)](_0x3e0210=>{const _0x4ace5b=_0x337a85;_0x3e6e61[_0x4ace5b(0x136)](_0x520bc7,_0x3e0210);});});},_0x333999[_0x459d06(0x176)](_0x20a922,_0x1e2b31);})[_0x31afb9(0xfe)](_0x37b632=>{const _0x53b751=_0x31afb9;_0x333999[_0x53b751(0x132)](_0x4ac2dc,_0x37b632);});});};function _0x172a(){const _0x3e0f1e=['fogColor','EPBwo','LJrLh','ambient','23501080dnWtFt','fetch','then','tbxSO','skyDomeEmi','MOwwu','allImage','588GJpIRo','yzoRe','JkAWK','lqSpZ','xtczo','ambientCol','Leatm','TeNUv','wBWWP','sHino','crfrm','QCawK','vlbvM','AdAAO','mszsd','JzOhR','UvWbE','6064176CUnUCe','nxhmi','DKAQD','qqlxQ','split','OUIEH','bbBGColor','dHMBT','SOHYJ','iebcn','jjHpK','iDTsP','objects','sAKwS','JWckS','NVsbT','getConfig','catch','KgBYN','QLcfB','RZTHl','guAxf','ZqojY','thnLF','sot','whlkq','customAmbi','VuTJO','zQEAV','nWafH','sTex','NMPcm','bAsgN','vqDkZ','ent','LMinh','mwVNL','XfWNt','bJFxm','PeYog','bbFontSize','isrSd','rIvjX','#000000','color','GYmRO','HjhKx','CQxdg','KjRWO','lor','MTVQy','lightingCo','skyVariati','Vkqtl','404KGQKQr','adXVf','2|6|5|4|3|','olZzL','skyDomeCol','OjAVM','oGIJp','allText','bbVariatio','UtXuC','#FFFFFF','dchNY','qfREv','CUpaa','image','cveie','VmqzP','MBXgi','apply','pCNIc','dnoBv','IpjqA','12395kGZhdm','spawns','WreVs','NLhbR','1|0','7|4|8|1','ZSyig','json','307ptkbjk','off','customFog','skyDomeTex','eihHt','KiLWr','7|4|0','jgKPC','FswoE','WKGDH','cyQus','sad','bbText','vyYPJ','light','6|0|2|5|3|','bbTextColo','DlhiO','opnxF','hgyYT','ZWXeq','skyColor','PFzFL','svhzN','5734926pDzomt','text','120584dMwTjn','ENEgu','rLUlq','fog','replace','2561109laLnXY','skyDome','hHefc','shJXU','3|6|1|5|2|','hLJDg','318VWFNDz','olrwH'];_0x172a=function(){return _0x3e0f1e;};return _0x172a();}

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

        addonSetUtils.createCategory("fogSettings", "Custom Fog Color");
        addonSetUtils.createCheckbox(addonInfo["id"], "customFog", "Custom Fog Color", "Enable to use custom fog color", "fogSettings", false, 2);
        addonSetUtils.createColorPicker(addonInfo["id"], "fogColor", "Fog Color", "The color that fog should be", "fogSettings", false, 2);

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
