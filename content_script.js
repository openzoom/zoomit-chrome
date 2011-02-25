//////////////////////////////////////////////////////////////////////////////
//
//  Copyright 2010 Daniel Gasienica <daniel@gasienica.ch>
//  Copyright 2011 Aseem Kishore <aseem.kishore@gmail.com>
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//
//////////////////////////////////////////////////////////////////////////////

// Create context menu items for link, image and page clicks:
// http://code.google.com/chrome/extensions/contextMenus.html#method-create

chrome.contextMenus.create({
    "title": "Open Link with Zoom.it",
    "contexts": ["link"],
    "onclick": function (data, tab) {
        //alert("Worked!");
        //alert("data.linkUrl=" + data.linkUrl);
        openWithZoomit(data.linkUrl);
        //alert("Should be opening...");
    }
});

chrome.contextMenus.create({
    "title": "View Image with Zoom.it",
    "contexts": ["image"],
    "onclick": function (data, tab) {
        openWithZoomit(data.srcUrl);
    }
});

chrome.contextMenus.create({
    "title": "View Page with Zoom.it",
    "contexts": ["page"],
    "onclick": function (data, tab) {
        openWithZoomit(data.pageUrl);
    }
});

function openWithZoomit(url) {
    // http://code.google.com/chrome/extensions/tabs.html#method-create
    chrome.tabs.create({
        url: "http://zoom.it/?url=" + encodeURIComponent(url)
    });
    
    // TEMP not sure what this is for? closes the extension's background page?
    window.close();
}