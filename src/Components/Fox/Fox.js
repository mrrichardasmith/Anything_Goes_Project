import React from 'react';
import './Fox.css'


export default function Fox(props)  {
    
    return(
        <div className="row">
            <div className="image">
                <img className="picture" src={props.pic1} alt="fox" />
                <div className="next">
                    <button value="pic1" onClick={props.change}>Change</button>
                </div>
            </div>
            <div className="image">
                <img className="picture" src={props.pic2} alt="fox" />
                <div className="next">
                    <button value="pic2" onClick={props.change}>Change</button>
                </div>
            </div>
            <div className="image">
                <img className="picture" src={props.pic3} alt="fox" />
                <div className="next">
                    <button value="pic3" onClick={props.change}>Change</button>
                </div>
            </div>
        </div>
    )
}
