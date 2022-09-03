const { loadImage, registerFont, createCanvas, Image } = require('canvas');
const whoMadeIt = "williameom";

async function LED(debugParm) {

    var img = await loadImage('/bot/led.png');
    var canvas = createCanvas(img.width, img.height);

    registerFont('/bot/font.ttf', { family: 'DungGeunMo' });
    
    var ctx = canvas.getContext('2d');
    ctx.font = "36px DunGeunMo";
    ctx.drawImage(img, img.width, img.height);


    async function where(toGo) { // 행선지가 어디인가?
        if(toGo.length == 3) { // 207, 55
            var fstxt = toGo.substring(0, 0);
            var setxt = toGo.substring(1, 1);
            var thtxt = toGo.substring(2, 2);
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

        } else if(toGo.length == 2){ // 214, 205
            var fstxt = toGo.substring(0,0);
            var setxt = toGo.substring(1,1);
            var fntxt = fstxt + ' ' + setxt + ' 행';

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

        }
    }

    async function stn(what) { // 어기서 출발했는가?
        if (what.length == 3) { // 207, 55
            var fstxt = what.substring(0, 0);
            var setxt = what.substring(1, 1);
            var thtxt = what.substring(2, 2);
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
                x: 412,
                y: 140,
            };
            // - ((textPaint.descent() + textPaint.ascent()) / 2
            ctx.fillStyle = "#5C6F0E";
            ctx.textAlign = "center";
            ctx.fillText(title, titlePosition.x, titlePosition.y);
            ctx.fillText(title, titlePosition.x, titlePosition.y + 65);

        } else if (what.length == 2) { // 214, 205
            var fstxt = what.substring(0, 0);
            var setxt = what.substring(1, 1);
            var fntxt = fstxt + ' ' + setxt + ' 행';

            const {
                actualBoundingBoxLeft,
                actualBoundingBoxRight,
                emHeightAscent: titleHeight,
                actualBoundingBoxAscent,
                actualBoundingBoxDescent,
                emHeightDescent,
            } = ctx.measureText(fntxt);
            const titlePosition = {
                x: 412,
                y: 140,
            };
            // - ((textPaint.descent() + textPaint.ascent()) / 2
            ctx.fillStyle = "#5C6F0E";
            ctx.textAlign = "center";
            ctx.fillText(title, titlePosition.x, titlePosition.y);
            ctx.fillText(title, titlePosition.x, titlePosition.y + 65);

        }
    }

    async function stats(idk) { // 도착, 출발, 접근
        var arrive = await loadImage('/bot/arrival.png');
        var depart = await loadImage('/bot/depart.png');
        var closer = await loadImage('/bot/close.png');
        var moll1u = await loadImage('/bot/mollu.png');
        switch(idk) {
            case 1: // 1번칸 도착, 2번칸 도착
                ctx.drawImage(arrive, 508, 111);
                ctx.drawImage(arrive, 508, 179);
                break;
            case 2: // 1번칸 도착, 2번칸 출발
                ctx.drawImage(arrive, 508, 111);
                ctx.drawImage(closer, 508, 179);
                break;
            case 3: // 1번칸 도착, 2번칸 접근
                ctx.drawImage(arrive, 508, 111);
                ctx.drawImage(closer, 508, 179);
                break;
            case 4: // 1번칸 출발, 2번칸 도착
                ctx.drawImage(depart, 508, 111);
                ctx.drawImage(arrive, 508, 179);
                break;
            case 5: // 1번칸 출발, 2번칸 출발
                ctx.drawImage(depart, 508, 111);
                ctx.drawImage(depart, 508, 179);
                break;
            case 6: // 1번칸 출발, 2번칸 접근
                ctx.drawImage(depart, 508, 111);
                ctx.drawImage(closer, 508, 179);
                break;
            case 7: // 1번칸 접근, 2번칸 도착
                ctx.drawImage(closer, 508, 111);
                ctx.drawImage(arrive, 508, 179);
                break;
            case 8: // 1번칸 접근, 2번칸 접근
                ctx.drawImage(closer, 508, 111);
                ctx.drawImage(closer, 508, 179);
                break;
            case 9: // 1번칸 접근, 2번칸 출발
                ctx.drawImage(closer, 508, 111);
                ctx.drawImage(depart, 508, 179);
                break;
            default: // 몰?루
                ctx.drawImage(moll1u, 508, 111);
                ctx.drawImage(moll1u, 508, 179);
                break;
        }
    }
}