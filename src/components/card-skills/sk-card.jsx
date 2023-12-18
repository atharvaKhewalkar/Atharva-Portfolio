import React from "react";
import './sk-card.css'
import Lottie from "lottie-react";

function Skcard({svg,title,description}){
    return(
        <div className="skcard">
            <Lottie animationData={svg} style={{height:'45%'}}/>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}
export default Skcard;
