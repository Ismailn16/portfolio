import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Email from './assets/EmailAuto.PNG';
import Accom from './assets/UWEAccom.PNG';
import Twin from './assets/TwinCities.PNG';
import Portfolio from './assets/PortfolioSnip.PNG';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export const PROJECTS = [
  {
    title: "UWE Accomodation System",
    image: Accom,
    description: "Created a university accomodation system that allows users to manage the rooms within UWE accomodation buildings based on their availability, cleaning status, etc.",
    technologies: ["Java", "JavaFX"],
  },
  {
    title: "UWE ITS Help Service",
    image: Email,
    description: "Built a Help Service comprised of two webpages, one as a email automation service utilising a SendGrid Mail API and the other as a FAQ/Q&A page. The goal in creating this was to reduce email traffic for UWE ITS and improve students means of self-service",
    technologies: ["HTML", "Tailwind (CSS)", "JavaScript", "Python", "MySQL"],
  },
  {
    title: "Portfolio Webpage",
    image: Portfolio,
    description: "Created a Portfolio page as a means to interactively display my experience and education to potential employers.",
    technologies: ["HTML", "Tailwind (CSS)", "React (JS)"],
  },
  {
    title: "Twin Cities Weather Web Application",
    image: Twin,
    description: "Collaboratively developed a Twin Cities web app providing information on London and Paris. Utilized APIs for weather forecasts, Google Maps for points of interest, and an RSS feed for daily local news updates.",
    technologies: ["HTML", "Tailwind (CSS)", "JavaScript", "PHP", "SQL"],
  },


]
