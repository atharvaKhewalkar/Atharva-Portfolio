import React from "react";
import './about.css'
import Lottie from "lottie-react";
import load from '../animations/load.json'
function About(){
    return(
        <section className="about">
            <div className="heading">
                <h1>About Me</h1>
            </div>
            <div className="abt-cnt">
                <div className="abt-card">
                <h4>Expertise</h4>
                    <p>Hello, I'm Atharva Khewalkar, a passionate MERN (MongoDB, Express.js, React.js, Node.js) stack developer with a keen interest in crafting digital solutions that make a meaningful impact. I thrive in the dynamic world of web development, where creativity meets functionality, and user experience is at the forefront.</p>
                </div>
                <div className="abt-card">
                    <h4>Professional Journey</h4>
                    <p>

                        My journey into the realm of coding began with a curiosity that quickly transformed into a deep-seated passion for building robust and scalable applications. I have honed my skills in the MERN stack, leveraging each technology's unique capabilities to create seamless and user-friendly web experiences.</p>
                </div>
                <div className="abt-card">
                <h4>What Drives Me</h4>
                    <p>

                    What excites me most about being a developer is the ability to bring ideas to life through code. Whether it's developing intricate backend logic, creating intuitive user interfaces, or optimizing database performance, I find joy in the intricacies of the development process.</p>
                </div>
                <div className="abt-card">
                <h4>Collaboration and Innovation</h4>
                    <p>

                    I strongly believe in the power of collaboration and open communication. Working closely with cross-functional teams, I have had the privilege of contributing to diverse projects, each presenting unique challenges and learning opportunities.</p>
                </div>
                <div className="ani1">
                <Lottie animationData={load}/>
                </div>
               
            </div>
            
        </section>
    )
}

export default About;