
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "wikit",
    title: "Wikit ile aç",
    contexts: ["selection"]
  });
});

function fixedEncodeURL(str) {
  return encodeURI(str).replace(/%5B/g, "[").replace(/%5D/g, "]");
}

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "wikit" && info.selectionText) {
    const wikiUrl = "https://tr.wikipedia.org/wiki/" + fixedEncodeURL(info.selectionText);

    chrome.windows.create({
      url: wikiUrl,
      type: "popup",
      top: 5,
      left: 5,
      width: 800,
      height: 600
    });
  }
});
