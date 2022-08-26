import React from "react";
import { projects } from "../logic/projects";
import './projects.scss'

function Projects(){
    return(
        <section className="projects">
        <h2>Projects</h2>
          <div className="projects-container">
            {projects.map(item => {return <div className="project-card">
                <div className="project-wrap">
                    <img src={item.image} />
                    <div className="project-info">
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                    <div className="techs">{item.technologies.map(item => <p className="tech">{item}</p>)}</div>
                    <div className="links">
                        {item.src && <a target="blank" href={item.src}>Source</a>}
                        {item.live && <a target="blank" href={item.live}>Live version</a>}
                        </div>
                    </div>
                </div>
                </div>})}
          </div>
        </section>
    )
}

export default Projects