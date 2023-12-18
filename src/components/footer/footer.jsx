import React from "react";
import './footer.css'
import fotr from '../animations/footer.json'
import Lottie from "lottie-react";
import insta from '../animations/insta.json'
import linkedin from '../animations/linkedin.json'
import git from '../animations/github.json'


function Footer(){
    return(
        <section className="footer">
            <div className="heading">
                <h1>Join Me</h1>
            </div>
            <div className="social">
                <div className="ftr-ani1">
                {/* <a href="https://www.instagram.com/atharvaa.14?igshid=YzVkODRmOTdmMw=="> */}
                <Lottie animationData={insta} style={{width:"30%"}}/>
                {/* </a> */}
               
                </div>

                <div className="ftr-ani2">
                {/* <a href="https://www.linkedin.com/in/atharva-khewalkar-06a588229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> */}
                <Lottie animationData={linkedin}  style={{width:"30%"}}/>
                {/* </a> */}
                
                </div>

                <div className="ftr-ani3">
                <Lottie animationData={git}  style={{width:"30%"}}/>
                </div>
               
            
            </div>
            <div className="ftr_ani">
                <Lottie animationData={fotr}/>
            </div>
            
        </section>
    )
}

export default Footer;