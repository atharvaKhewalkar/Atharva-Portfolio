import React from "react";
import './prjc.css'


function Prcard({img,title,description}){
    return(
        <div className="prcard">
            <img src={img} style={{height:"12rem"}} ></img>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}
export default Prcard;
