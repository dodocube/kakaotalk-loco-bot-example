const { loadImage, registerFont, createCanvas, Image } = require('canvas');
registerFont('./bot/font.otf', { family: 'DungGeunMo' });
const fs = require("fs");
const whoMadeIt = "williameom";
const fileName = 'Led_Test.png';

async function LED(whereInfo, stnInfo, upStatInfo, downStatInfo) {
    //var img = await loadImage('./bot/led.png');
    //var canvas = createCanvas(img.width, img.height);
    // 770, 300
    var canvas = createCanvas(770, 300);
    var ctx = canvas.getContext('2d');
    ctx.font = "54px DungGeunMo";
    //ctx.drawImage(img, img.width, img.height);

    ctx.fillRect(0, 0, 770, 300);
    async function where(toGo) { // 행선지가 어디인가?
        if (toGo.length == 3) { // 207, 55
            var fstxt = toGo.substring(0, 1);
            var setxt = toGo.substring(1, 2);
            var thtxt = toGo.substring(2, 3);
            var fntxt = fstxt + ' ' + setxt + ' ' + thtxt + ' 행';
            const {
                actualBoundingBoxLeft,
                actualBoundingBoxRight,
                emHeightAscent: titleHeight,
                actualBoundingBoxAscent,
                actualBoundingBoxDescent,
                emHeightDescent,
            } = ctx.measureText(fntxt);
            const titlePosition = {
                x: 214,
                y: 140,
            };
            // - ((textPaint.descent() + textPaint.ascent()) / 2
            ctx.fillStyle = "#fb8d19";
            ctx.textAlign = "center";
            ctx.fillText(title, titlePosition.x, titlePosition.y);
            ctx.fillText(title, titlePosition.x, titlePosition.y + 65);

        } else if (toGo.length == 2) { // 214, 205
            var fstxt = toGo.substring(0, 1);
            var setxt = toGo.substring(1, 2);
            var fntxt = fstxt + ' ' + setxt + ' 행';

            /*const {
                actualBoundingBoxLeft,
                actualBoundingBoxRight,
                emHeightAscent: titleHeight,
                actualBoundingBoxAscent,
                actualBoundingBoxDescent,
                emHeightDescent,
            } = ctx.measureText(fntxt);*/
            const titlePosition = {
                x: 214,
                y: 140,
            };
            // - ((textPaint.descent() + textPaint.ascent()) / 2
            ctx.fillStyle = "#fb8d19";
            ctx.textAlign = "center";
            ctx.fillText(fntxt, titlePosition.x, titlePosition.y);
            ctx.fillText(fntxt, titlePosition.x, titlePosition.y + 65);

        }
    }

    async function stn(what) { // 어기서 출발했는가?
        if (what.length == 3) { // 207, 55
            var fstxt = what.substring(0, 1);
            var setxt = what.substring(1, 2);
            var thtxt = what.substring(2, 3);
            var fntxt = fstxt + ' ' + setxt + ' ' + thtxt;
            /*const {
                actualBoundingBoxLeft,
                actualBoundingBoxRight,
                emHeightAscent: titleHeight,
                actualBoundingBoxAscent,
                actualBoundingBoxDescent,
                emHeightDescent,
            } = ctx.measureText(fntxt);*/
            const titlePosition = {
                x: 430,
                y: 140,
            };
            // - ((textPaint.descent() + textPaint.ascent()) / 2
            ctx.fillStyle = "#5C6F0E";
            ctx.textAlign = "center";
            ctx.fillText(fntxt, titlePosition.x, titlePosition.y);
            ctx.fillText(fntxt, titlePosition.x, titlePosition.y + 65);

        } else if (what.length == 2) { // 214, 205
            var fstxt = what.substring(0, 1);
            var setxt = what.substring(1, 2);
            var fntxt = fstxt + ' ' + setxt ;

            const {
                actualBoundingBoxLeft,
                actualBoundingBoxRight,
                emHeightAscent: titleHeight,
                actualBoundingBoxAscent,
                actualBoundingBoxDescent,
                emHeightDescent,
            } = ctx.measureText(fntxt);
            const titlePosition = {
                x: 430,
                y: 140,
            };
            // - ((textPaint.descent() + textPaint.ascent()) / 2
            ctx.fillStyle = "#5C6F0E";
            ctx.textAlign = "center";
            ctx.fillText(fntxt, titlePosition.x, titlePosition.y);
            ctx.fillText(fntxt, titlePosition.x, titlePosition.y + 65);

        }
    }

    async function stats(up, down) { // 도착=0, 출발=1, 접근=2 508, 100
        var xPos = 600;
        if(up == 0) {
            const {
                actualBoundingBoxLeft,
                actualBoundingBoxRight,
                emHeightAscent: titleHeight,
                actualBoundingBoxAscent,
                actualBoundingBoxDescent,
                emHeightDescent,
            } = ctx.measureText(up);
            const titlePosition = {
                x: xPos,
                y: 140,
            };
            // - ((textPaint.descent() + textPaint.ascent()) / 2
            ctx.fillStyle = "#b22222";
            ctx.textAlign = "center";
            ctx.fillText("도 착", titlePosition.x, titlePosition.y);
        } else if(up == 1) {
            const {
                actualBoundingBoxLeft,
                actualBoundingBoxRight,
                emHeightAscent: titleHeight,
                actualBoundingBoxAscent,
                actualBoundingBoxDescent,
                emHeightDescent,
            } = ctx.measureText(up);
            const titlePosition = {
                x: xPos,
                y: 140,
            };
            // - ((textPaint.descent() + textPaint.ascent()) / 2
            ctx.fillStyle = "#b22222";
            ctx.textAlign = "center";
            ctx.fillText("출 발", titlePosition.x, titlePosition.y);
        } else {
            const {
                actualBoundingBoxLeft,
                actualBoundingBoxRight,
                emHeightAscent: titleHeight,
                actualBoundingBoxAscent,
                actualBoundingBoxDescent,
                emHeightDescent,
            } = ctx.measureText(up);
            const titlePosition = {
                x: xPos,
                y: 140,
            };
            // - ((textPaint.descent() + textPaint.ascent()) / 2
            ctx.fillStyle = "#b22222";
            ctx.textAlign = "center";
            ctx.fillText("접 근", titlePosition.x, titlePosition.y);
        }
        if(down == 0) {
            const {
                actualBoundingBoxLeft,
                actualBoundingBoxRight,
                emHeightAscent: titleHeight,
                actualBoundingBoxAscent,
                actualBoundingBoxDescent,
                emHeightDescent,
            } = ctx.measureText(down);
            const titlePosition = {
                x: xPos,
                y: 205,
            };
            // - ((textPaint.descent() + textPaint.ascent()) / 2
            ctx.fillStyle = "#b22222";
            ctx.textAlign = "center";
            ctx.fillText("도 착", titlePosition.x, titlePosition.y);
        } else if(down == 1) {
            const {
                actualBoundingBoxLeft,
                actualBoundingBoxRight,
                emHeightAscent: titleHeight,
                actualBoundingBoxAscent,
                actualBoundingBoxDescent,
                emHeightDescent,
            } = ctx.measureText(down);
            const titlePosition = {
                x: xPos,
                y: 205,
            };
            // - ((textPaint.descent() + textPaint.ascent()) / 2
            ctx.fillStyle = "#b22222";
            ctx.textAlign = "center";
            ctx.fillText("출 발", titlePosition.x, titlePosition.y);
        } else {
            const {
                actualBoundingBoxLeft,
                actualBoundingBoxRight,
                emHeightAscent: titleHeight,
                actualBoundingBoxAscent,
                actualBoundingBoxDescent,
                emHeightDescent,
            } = ctx.measureText(down);
            const titlePosition = {
                x: xPos,
                y: 205,
            };
            // - ((textPaint.descent() + textPaint.ascent()) / 2
            ctx.fillStyle = "#b22222";
            ctx.textAlign = "center";
            ctx.fillText("접 근", titlePosition.x, titlePosition.y);
        }
    }

    await where(whereInfo);
    await stn(stnInfo);
    await stats(upStatInfo, downStatInfo);

    const stream = canvas.createPNGStream();

    const out = fs.createWriteStream('./Led_Test.png');

    stream.pipe(out);

    out.on("finish", () => {
        console.log("finished.");
    });
} 



LED("용산", "동인천", 1, 0);