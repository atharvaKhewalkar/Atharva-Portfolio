import React from "react";
import './achivements.css'
import ani from '../animations/lazy.json'
import Lottie from "lottie-react";

function Achivements(){
    return(
        <section className="achivements">
            <div className="heading">
                <h1>Achivements</h1>
            </div>
            <div className="achiv-cnt">
                <h1 align="center" style={{fontSize:"5rem"}}>
                    Filhal to kuch nhi hai dikhane layak
                </h1>
                
            </div>
            <Lottie className="achi-ani" animationData={ani} style={{width:"30%"}}/>
        </section>
    )
}

export default Achivements;