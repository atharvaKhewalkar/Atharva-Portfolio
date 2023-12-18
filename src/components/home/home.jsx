import React from "react";
import './home.css'
import Lottie from "lottie-react";
import boy from '../animations/Animation - 1702726332276.json'
function Home(){ 
    return(
        <section className="home">
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Achivements</li>
                    <li>Contact</li>
                
                </ul>
            </div>

            <div className="hero">
                <div className="h-left"> 
                <h1>Hello..!</h1>
                    <h1>I'm</h1>
                    <h1>Atharva Khewalkar</h1>
                    <h4>Web Developer</h4>
                </div>
                <div className="h-right">
                    <Lottie animationData={boy} style={{height:"34rem"}}/>
                </div>
            </div>
        </section>
    )
}

export default Home; 