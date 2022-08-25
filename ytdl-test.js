const ytdl = require("ytdl-core");
const vidURL = "https://www.youtube.com/watch?v=yWujsXLpeSI";
const vidID = "yWujsXLpeSI";

//var vidInfo = ytdl.getInfo(vidURL);
//var vidLength = (vidInfo.videoDetails.lengthSeconds || '') * 1000;

//console.log(ytdl.validateURL(vidURL)+"\n");
//console.log(vidInfo + "\n");
//console.log(ytdl.downloadFromInfo(vidInfo, { quality: 'highestaudio' }) + "\n");
//console.log((vidInfo.videoDetails.lengthSeconds || '') * 1000);

async function test(vidURL) {
    var vidInfo = await ytdl.getInfo(vidURL);
    var readable = ytdl.downloadFromInfo(vidInfo, { quality: 137 })
}