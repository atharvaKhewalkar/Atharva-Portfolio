import React from "react";
import './skills.css'
import Skcard from "../card-skills/sk-card";
import reac from '../animations/react.json'
import html from '../animations/html.json'
import css from '../animations/css.json'
import js from '../animations/js.json'
import node from '../animations/node.json'
import express from '../animations/express.json'
import mongo from '../animations/mongo.json'

function Skills(){
    return(
        <section className="skills">
            <div className="heading">
               <h1>Skills</h1>
            </div>
            <div className="skill-cnt">
                <Skcard
                    svg={html}
                    title={'HTML'}
                    description={'Advanced'}
                   
                />

                <Skcard
                    svg={css}
                    title={'CSS'}
                    description={'Advanced'}
                   
                />

                <Skcard
                    svg={js}
                    title={'Java Script'}
                    description={'Advanced'}
                   
                />

                <Skcard
                    svg={reac}
                    title={'React'}
                    description={'Intermidiate'}
                   
                />

                <Skcard
                    svg={node}
                    title={'Node.js'}
                    description={'Begginer'}
                   
                />
                <Skcard
                    svg={express}
                    title={'Express.js'}
                    description={'Begginer'}
                   
                />
                <Skcard
                    svg={mongo}
                    title={'MongoDb'}
                    description={'Begginer'}
                   
                />
            </div>
        </section>
    )
}

export default Skills;