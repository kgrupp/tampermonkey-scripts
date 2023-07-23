// ==UserScript==
// @name         Hide YouTube Shorts
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  More efficient without YouTube shorts.
// @author       Konstantin Grupp
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        GM_addStyle
// @downloadURL  https://github.com/kgrupp/tampermonkey-scripts/raw/master/youtube-hide-shorts.user.js
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle("ytd-rich-shelf-renderer[is-shorts] { display: none !important; }");
    GM_addStyle("ytd-reel-shelf-renderer { display: none !important; }");
    GM_addStyle(".ytd-reel-shelf-renderer { display: none !important; }");
    GM_addStyle(".ytd-reel-video-renderer { display: none !important; }");
})();
