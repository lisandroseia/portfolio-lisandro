import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import './referance.scss'

function Referances() {

    const handleDragStart = (e) => e.preventDefault();
    
    const items = [<div className="carr-card"> <h3>Ergeon internship</h3> <p className="desc">Junior software developer</p> <p>"Lisandro participated during training sessions and provided valuable insight based on previous Jr. Software Engineer experiences. Lisandro shared best practices from previous roles that proved insightful for our team."</p> </div>,
<div className="carr-card"> <h3>Sabina alistar</h3> <p className="desc">Front-end developer</p> <p>Sabina Alistar recommends Lisandro (Lichi) Seia based on their shared experience: Sabina is Senior Director of Engineering at Ergeon . Lisandro (Lichi) Seia is Software engineer at Ergeon . Sabina is/was leading Lisandro.


Sabina recommends Lisandro for demonstrating these skills: Software development, Javascript, React.</p> </div>]
    return (
        <section className="refer-section">
            <h2>REFERANCES</h2>
            <AliceCarousel className="car" mouseTracking items={items} />
        </section>
    )
}

export default Referances