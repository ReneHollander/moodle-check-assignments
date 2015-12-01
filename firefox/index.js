// Import the page-mod API
var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;

// Create a page-mod
pageMod.PageMod({
    include: "https://elearning.tgm.ac.at/my/",
    contentScriptFile: [data.url("jquery.js"),
                        data.url("content.js")],
    contentScriptOptions: {urltickpng: data.url("tick.png")}
});

