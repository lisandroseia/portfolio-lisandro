import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload  } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faAngellist, faLinkedinIn  } from '@fortawesome/free-brands-svg-icons'

import me2 from '../assets/images/me2.png'
import resume from '../assets/resume/resume.pdf'

import './header.scss';

function Header() {
    return (
        <section className="header">
            <h1>Lisandro's <span>portfolio</span></h1>
            <div className="info">
                <div className="img-name">
                    <img src={me2} alt="lisandro seia" />
                    <div className="card">
                        <p>Lisandro Seia</p>
                        <p>Full stack developer</p>
                    </div>
                </div>
                <div className="info-card">
                    <div className="typewriter info-title">
                        <h2>ABOUT ME</h2>
                    </div>
                    <p className="ab-me-desc">I am Lisandro, a passionate full-stack web developer bringing you fancy and professional web applications. I have experience developing web applications, including front-end and back-end, with a professional performance to give a great experience to the users. This includes rest apis and well-looking web-pages.</p>
                    <div className="contact">
                        <a className="cv-download" href={resume} download>
                            <FontAwesomeIcon icon={faDownload} />
                            Download resume</a>

                            <a target="blank" href="https://github.com/lisandroseia">
                            <FontAwesomeIcon icon={faGithub}/>
                            </a>
                            <a target="blank" href="https://angel.co/u/lisandro-seia">
                            <FontAwesomeIcon icon={faAngellist}/>
                            </a>
                            <a target="blank" href="https://www.linkedin.com/in/lisandroseia/">
                            <FontAwesomeIcon icon={faLinkedinIn}/>
                            </a>
                            <a target="blank" href="https://torre.co/lisandroseia11?r=NimjTt3p">torre</a>
                            <a target="blank" href="https://www.upwork.com/freelancers/~01721492d20393a796">upwork</a>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header