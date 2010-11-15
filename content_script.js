var HOST = 'zoom.it';

// Create two context menu items for image and page clicks
var image_menu = chrome.contextMenus.create({"title": "View Image on Zoom.it",
                                             "contexts": ["image"],
                                             "onclick": viewImageHandler});
var image_menu = chrome.contextMenus.create({"title": "View Page on Zoom.it",
                                             "contexts": ["page"],
                                             "onclick": viewPageHandler});

function navigateToURL(url) {
    chrome.tabs.create({url: url, selected: false});
    window.close();
}

function viewImageHandler(info, tab) {
    navigateToURL("http://" + HOST + "/?url=" + encodeURIComponent(info.srcUrl));
}

function viewPageHandler(info, tab) {
    navigateToURL("http://" + HOST + "/?url=" + encodeURIComponent(info.pageUrl));
}
