/**
 * Created by Administrator on 2017/12/12.
 */
import logo from '../../logo.svg';
export function draw() {
    let canvas = document.getElementById('draw');
    /*
    * screen.availWidth  屏幕可用宽度
    * screen.width  屏幕显示宽度
    * window.innerWidth  窗口的宽度
    * document.documentElement.clientWidth  可见区域宽度
    * */
    canvas.width = document.documentElement.clientWidth; //canvas宽度设置成可见区域宽度
    canvas.height = document.documentElement.clientHeight;
    if(canvas.getContext) {
        let ctx = canvas.getContext('2d');
        const sw = canvas.width;
        const sh = canvas.height;

        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        //左右两边rect
        ctx.beginPath();
        ctx.fillRect(0,0,1/2*sw,sh);
        ctx.fillStyle = '#fff';
        ctx.fillRect(1/2*sw,0,1/2*sw,sh);

        ctx.moveTo(5.5/13*sw,6/13*sh);
        ctx.strokeStyle = '#fff';
        ctx.lineTo(5/13*sw,1/2*sh);
        ctx.lineTo(5.5/13*sw,7/13*sh);
        ctx.moveTo(6/13*sw,7.2/13*sh);
        ctx.lineTo(1/2*sw,1/2*sh);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(7.5/13*sw,6/13*sh);
        ctx.strokeStyle = '#000';
        ctx.lineTo(8/13*sw,1/2*sh);
        ctx.lineTo(7.5/13*sw,7/13*sh);
        ctx.moveTo(7/13*sw,5.8/13*sh);
        ctx.lineTo(1/2*sw,1/2*sh);
        ctx.stroke();


        // let ctx = canvas.getContext('2d');
        // ctx.beginPath();
        // ctx.arc(60,60,30,0,3/4*Math.PI,true);
        // ctx.moveTo(20,20);
        // ctx.lineTo(75,85);
        // ctx.stroke();
        //
        // let text = ctx.measureText('just for test!');
        // console.log(text);
        //
        // let img = new Image(); //实例图片
        // img.onload = () => {
        //     ctx.drawImage(img,80,80,80,60);
        // };
        // img.src = logo;
        // console.log(img);

    }
}
