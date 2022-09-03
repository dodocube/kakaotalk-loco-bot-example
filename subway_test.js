const { loadImage, registerFont, createCanvas, Image } = require('canvas');
const whoMadeIt = "williameom";

async function LED() {

    var img = await loadImage('/bot/led.png');
    var canvas = createCanvas(img.width, img.height);

    registerFont('/bot/font.ttf', { family: 'DungGeunMo' });
    
    var ctx = canvas.getContext('2d');
    ctx.font = "36px DunGeunMo";
    ctx.drawImage(img, img.width, img.height)


    async function where(toGo) {

    }

    async function stn(what) {

    }

    async function stats(idk) {
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