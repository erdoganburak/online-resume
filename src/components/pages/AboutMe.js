import React from 'react';
import '../../App.css';
import Abilities from '../Abilities';
import AboutMeDetail from '../AboutMeDetail';
import Experiences from '../Experiences';
import Projects from '../Projects';

export default function AboutMe() {
    return (
        <div>
            <div className="about-me">
                <h6>Full Stack Development</h6>
            </div>
            <AboutMeDetail />
            <Experiences />
            <Abilities />
            <Projects />
        </div>
    );
}