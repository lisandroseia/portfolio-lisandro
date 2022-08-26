import agility from '../assets/images/agility.png'
import bgtrack from '../assets/images/bgtrack.png'
import hotel from '../assets/images/hotel.png'
import covid from '../assets/images/covid.png'
import rockets from '../assets/images/rockets.png'
import ergeon from '../assets/images/ergeon.png'





export const projects = [
    { name: 'BG-TRACK', image: bgtrack, desc: 'BG-TRACK is an aplication that allows the user to keep track and organize all their payments, allowing them to know how much they spent on each category they created.', src: 'https://github.com/lisandroseia/budget', live: 'https://bg-track.herokuapp.com/', technologies: ['RoR', 'RSpec', 'scss', 'HTML'] },
    { name: 'hotel-reserve', image: hotel, desc: 'Hotel Reservations is a project that gives users options of hotels around the world. Users can create an account to be able to reserve one (or many) hotel rooms and also add their own hotels.', src: 'https://github.com/iKuartz/final-react', live: 'https://cryptic-lake-58741.herokuapp.com/', technologies: ['RoR', 'RSpec', 'React', 'Scss', 'Rest', 'JS', 'Jest'] },
    { name: 'covid-tracker', image: covid, desc:'A react/redux SPA project, that consumes an API to get the data of covid cases in more than 200 countries, and display it on real time, with a functional filtering to find whichever country you want.', src: 'https://github.com/lisandroseia/capstone-3', live: 'https://cov-track-ls.herokuapp.com/', technologies: ['React', 'Scss', 'JS', 'Jest'] },
    { name: 'Agility-contest', image: agility, desc: 'A presentation web-page made with pure HTMl, Css and JavaScript, with a responsive design and a user-friendly interface that allows all type of users to understand the message', src: 'https://github.com/lisandroseia/capstone1', live: 'https://lisandroseia.github.io/capstone1/', technologies: ['React', 'Scss', 'JS', 'Jest'] },
    { name: 'Space travelers', image: rockets, desc:'This is a React-Redux-based project, built with pair programming and Gitflow, following this kanban workflow. The page has a global state that holds the Rockets and missions from the SpaceX API and allows you to reserve them, displaying on your profile section the missions that you own.', src: 'https://github.com/JohnFTitor/space-travelers-hub', live: 'https://jf-ls-space-travelers-hub.netlify.app/', technologies: ['React', 'Css', 'JS', 'Jest'] },
    { name: 'Ergeon internship', image: ergeon, desc: 'In the Ergeon internship I was part of a training program, where I implemented many features with React/TypeScript, including bux-solving, code mantainance, new implementations, and testing with Jest', live: 'https://www.ergeon.com/', technologies: ['JS', 'TypeScript', 'Scss', 'Jest'] }]