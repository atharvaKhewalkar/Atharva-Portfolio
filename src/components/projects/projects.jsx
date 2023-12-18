import React from "react";
import './projects.css'
import Prcard from "../card-prj/prjc";
import img from '../projects/projectimg/port.png'
import img0 from '../projects/projectimg/studio.png'
import img1 from './projectimg/Screenshot 2023-09-21 142211.png'
import img2 from './projectimg/Screenshot 2023-09-21 142317.png'
import img3 from './projectimg/Screenshot 2023-09-21 142347.png'
import img4 from './projectimg/Screenshot 2023-09-21 142407.png'
import Lottie from "lottie-react";
import dog from '../animations/hiphop.json'

function Projects(){

   


    return(
        <section className="projects">
            <div className="heading">
               <h1>Projects</h1> 
            </div>
            <Lottie className="pr-ani" animationData={dog} style={{width:"28%"}}/>
            <div className="prj-cards">

                <Prcard
                    img={img}
                    title={"Portfolio Website"}
                    description={"A Portfolio website created using REACT.JS"}
                />
                <Prcard
                    img={img0}
                    title={"IT-Studio Website"}
                    description={"A Club website created using REACT.JS"}
                />
                
                <Prcard
                    img={img1}
                    title={"Canteen Website"}
                    description={"A College Canteen website created using HTML, CSS and JavaScript"}
                />
                
                
                <Prcard
                    img={img2}
                    title={"Portfolio Website"}
                    description={"A Portfolio website created using Wordpress"}
                />
                <Prcard
                    img={img3}
                    title={"E-Commerce Site"}
                    description={"Created using HTML, CSS and JavaScript"}
                />
                <Prcard
                    img={img4}
                    title={"Qr-Code Generator"}
                    description={"Website created using HTML, CSS and JavaScript"}
                />
            </div>
            
          
        </section>
    )
}


export default Projects;