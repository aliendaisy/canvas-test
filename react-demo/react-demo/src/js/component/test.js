/**
 * Created by Administrator on 2017/12/12.
 */
import React,{Component} from 'react';
import {draw} from '../function/draw';
class Test extends Component{
    componentDidMount() {

        draw();
        window.onresize = () => {
            return draw();
        }

    }
    render() {
        return(
            <div className="test">
                <canvas id="draw"></canvas>
            </div>
        )
    }
}

export default Test;