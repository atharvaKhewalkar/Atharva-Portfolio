import React from "react";
import './contact.css'
import Lottie from "lottie-react";
import ani from '../animations/getintouch.json'

import cat1 from '../animations/cat2.json'

function Contacts(){
    return(
        <section className="contacts">
            <div className="heading">
                <h1>Contact Me</h1>
            </div>
            <div className="c-form">
            <Lottie animationData={ani} style={{width:"50%"}}/>
            <form>
            <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="textarea" placeholder="message"/>
                <input className="button" type="submit"/>
            </form>
                
            </div>
           
            <div className="catani2">
                <Lottie animationData={cat1}/>
            </div>
    
        </section>
    )
}

export default Contacts;