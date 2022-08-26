import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Skils.scss'

function Skills() {

    const technologies = [{
        'name': 'html',
        'value': 97
    },
    {
        'name': 'css/scss',
        'value': 90
    },
    {
        'name': 'JS',
        'value': 85
    },
    {
        'name': 'TS',
        'value': 75
    },
    {
        'name': 'ruby',
        'value': 87
    },
    {
        'name': 'RoR',
        'value': 90
    },
    {
        'name': 'jest',
        'value': 96
    },
    {
        'name': 'git',
        'value': 95
    },]

    const progressBars = technologies.map(item => {
        return <div className="small">
            <CircularProgressbar strokeWidth={5} value={item.value} text={item.name} styles={buildStyles({
                pathColor: `rgb(216, 206, 67)`,
                textColor: `rgb(216, 206, 67)`,
                strokeLinecap: "butt",
                trailColor: `#000`
            })} />
        </div>
    })
    return (
        <section className="skills">
            <h2>My skills</h2>
            <div className="container-prog">
            {progressBars}
            </div>
        </section>
    )
}

export default Skills