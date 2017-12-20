/**
 * Created by Administrator on 2017/12/12.
 */
import logo from '../../logo.svg';


export function draw() {
    //画背景画布
    let canvas = document.getElementById('draw');
    /*
     * screen.availWidth  屏幕可用宽度
     * screen.width  屏幕显示宽度
     * window.innerWidth  窗口的宽度
     * document.documentElement.clientWidth  可见区域宽度
     * */
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let ctx = canvas.getContext('2d');
    const sw = canvas.width;
    const sh = canvas.height;

    //左右两边rect
    ctx.beginPath();
    ctx.fillRect(0,0,1/2*sw,sh);
    ctx.fillStyle = '#fff';
    ctx.fillRect(1/2*sw,0,1/2*sw,sh);

    //画code
    let code = document.getElementById('code');
    let ctc = code.getContext('2d');

    const w = code.width;
    const h = code.height;

    ctc.lineWidth = 5;
    ctc.lineCap = 'round';

    ctc.beginPath();
    ctc.strokeStyle = "#fff";
    ctc.moveTo(1/4*w,1/4*h);
    ctc.lineTo(5,1/2*h);
    ctc.lineTo(1/4*w,3/4*h);
    ctc.stroke();

    ctc.moveTo(1.8/8*w,h-5);
    ctc.lineTo(1/2*w,1/2*h);
    ctc.stroke();

    ctc.beginPath();
    ctc.strokeStyle = "#000";
    ctc.moveTo(1/2*w,1/2*h);
    ctc.lineTo(6.2/8*w,5);
    ctc.stroke();

    ctc.moveTo(3/4*w,1/4*h);
    ctc.lineTo(w-5,1/2*h);
    ctc.lineTo(3/4*w,3/4*h);
    ctc.stroke();
    // window.requestAnimationFrame(draw);
}

export function animate() {
    function draw() {
        var ctx = document.getElementById('draw').getContext('2d');
        ctx.fillRect(0,0,300,300);
        for (var i=0;i<3;i++) {
            for (var j=0;j<3;j++) {
                ctx.save();
                ctx.strokeStyle = "#9CFF00";
                ctx.translate(50+j*100,50+i*100);
                drawSpirograph(ctx,20*(j+2)/(j+1),-8*(i+3)/(i+1),10);
                ctx.restore();
            }
        }
    }
    draw();
    function drawSpirograph(ctx,R,r,O){
        var x1 = R-O;
        var y1 = 0;
        var i  = 1;
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        do {
            if (i>20000) break;
            var x2 = (R+r)*Math.cos(i*Math.PI/72) - (r+O)*Math.cos(((R+r)/r)*(i*Math.PI/72))
            var y2 = (R+r)*Math.sin(i*Math.PI/72) - (r+O)*Math.sin(((R+r)/r)*(i*Math.PI/72))
            ctx.lineTo(x2,y2);
            x1 = x2;
            y1 = y2;
            i++;
        } while (x2 != R-O && y2 != 0 );
        ctx.stroke();
    }

}
