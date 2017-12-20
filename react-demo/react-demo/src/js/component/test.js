/**
 * Created by Administrator on 2017/12/12.
 */
import React,{Component} from 'react';
import {draw,animate} from '../function/draw';
class Test extends Component{
    componentDidMount() {

        // draw();
        // window.onresize = () => {
        //     return draw();
        // }
        animate();

    }
    render() {
        return(
            <div className="test">
                <canvas id="draw" width="300px" height="300px"></canvas>
                <canvas id="code"></canvas>
            </div>
        )
    }
}

export default Test;