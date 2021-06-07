chrome.contextMenus.create({
    "title" : chrome.i18n.getMessage("generate"),
    "type" : "normal",
    "id": "createUnitTest",
    "contexts" : ["page"],
    "documentUrlPatterns": [
        "*://*.cloudace.topsic.org/examinations/*",
        "*://cloudace.topsic.org/examinations/*"
    ]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "functiontoInvoke": "onClick"
        });
    });
});
