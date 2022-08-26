import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPhone, faMailBulk, faCalendar  } from '@fortawesome/free-solid-svg-icons'
import './contact.scss'

function Contact(){

    return(
        <section className="contact-section">
           <h2>CONTACT ME</h2>
           <div className="contact-info">
             <div className="card-info">
                <div className="card-head">
             <FontAwesomeIcon icon={faPhone} />
             telephone
                </div>
                +54 3532 433111
             </div>
             <div className="card-info">
                <div className="card-head">
             <FontAwesomeIcon icon={faCalendar} />
             Calendly
                </div>
                <a className="calendar" target="blank" href="https://calendly.com/lisandroseia11/30min">Click to check my calendly</a>
             </div>
             <div className="card-info">
                <div className="card-head">
             <FontAwesomeIcon icon={faMailBulk} />
             Email
                </div>
                lisandroseia11@gmail.com
             </div>
           </div>
           <div className="form">
           <form
              id="form"
              action="https://formspree.io/f/mgedwpkj"
              method="POST"
            >
                <input name="name" type='text' placeholder="Name" />
                <input name="email" type="email" placeholder="email" />
                <textarea name="message" placeholder="Message" />
                <button type="submit">Send</button>
                </form>
           </div>
        </section>
    )
}

export default Contact