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
        let canvas = document.getElementById('draw');
        let ctx = canvas.getContext('2d');
        canvas.width = 800;
        canvas.height = 600;
        ctx.globalCompositeOperation = 'source-over';
        ctx.beginPath();

        ctx.fillStyle = "#fff";
        ctx.fillRect(0,0,800,600);

        ctx.translate(400,300);
        ctx.fillStyle = "rgba(255,0,0,0.25)";
        var time = new Date().getMilliseconds();
        // console.log(time)
        for(var i = 0;i < 18;i ++) {
            ctx.save();
            ctx.rotate((i*0.15)*Math.PI);
            ctx.rotate(2*Math.PI * time /4000);
            ctx.fillRect(-100,-100,200,200);
            ctx.restore();
        }
        ctx.beginPath();
        ctx.fillStyle = "#fff";
        ctx.arc(0,0,120,0,2*Math.PI,false);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle="rgba(0,0,255,0.3)";
        for(var i = 0;i < 18;i ++) {
            ctx.save();
            ctx.rotate((i*0.15)*Math.PI);
            ctx.rotate(-2*Math.PI * time /4000);
            ctx.fillRect(-60,-60,120,120);
            ctx.restore();
        }

        ctx.beginPath();
        ctx.fillStyle = "#fff";
        ctx.arc(0,0,70,0,2*Math.PI,false);
        ctx.fill();
        window.requestAnimationFrame(draw);

    }
    draw();
}
