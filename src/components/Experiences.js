import React from 'react'
import './Experiences.css'

function Experiences() {
    return (
        <div className="experiences-container">
            <h1 className="experience-section-title">Work Experience</h1>
            <div className="experiences-row">
                <div className="experience-period">
                    <strong className="experience-title">Armakom</strong>
                    <p className="experience-date">February 2019-Date</p>
                </div>
                <div className="experience-detail">
                    <strong className="experience-text">Full Stack Developer</strong>
                    <p>
                        In Armakom, my work is heavily on front-end
                        development. I was involved in 3 projects developed
                        with Angular and 1 project with React Native for both
                        iOS and Android. Also contributed to back-end
                        (Node.js) development. I cooperated with designers
                        to create clean interfaces and simple, intuitive
                        interactions and experiences. Had experience with
                        popular frameworks and libraries such as Bootstrap,
                        Clarity, D3.js, Chart.js, Cypress.io, Redux, Handlebars,
                        Knex, Socket.io and many more.
                    </p>
                </div>
            </div>

            <div className="experiences-row">
                <div className="experience-period">
                    <strong className="experience-title">Cybersoft</strong>
                    <p className="experience-date">January 2018 – November 2018</p>
                </div>
                <div className="experience-detail">
                    <strong className="experience-text">Full Stack Developer</strong>
                    <p>
                        In Cybersoft, I worked with senior developers to
                        manage large, complex design projects for corporate
                        clients. I had written various end-points and carried
                        out quality assurance tests to discover errors and
                        optimize performance with end-to-end JUnit tests
                        and written documentation for our API. Used Java,
                        Spring, Hibernate and PostgreSQL.
                    </p>
                </div>
            </div>

            <div className="experiences-row">
                <div className="experience-period">
                    <strong className="experience-title">Datasel</strong>
                    <p className="experience-date">September 2015 – February 2017</p>
                </div>
                <div className="experience-detail">
                    <strong className="experience-text">Java Developer</strong>
                    <p>
                        In Datasel, I developed and maintained web-based
                        desktop hospital automation software using Java,
                        Spring and Hibernate and Oracle DBMS. Worked
                        closely with doctors and hospital management.
                    </p>
                </div>
            </div>


            <div className="experiences-row">
                <div className="experience-period">
                    <strong className="experience-title">Oracle (Turkey)</strong>
                    <p className="experience-date">August 2014 - September 2014</p>
                </div>
                <div className="experience-detail">
                    <strong className="experience-text">Intern</strong>
                    <p>

                    </p>
                </div>
            </div>

            <div className="experiences-row">
                <div className="experience-period">
                    <strong className="experience-title"> Mikes Microwave Electronic Systems, Inc</strong>
                    <p className="experience-date">July 2013 – August 2013</p>
                </div>
                <div className="experience-detail">
                    <strong className="experience-text">Intern</strong>
                    <p>

                    </p>
                </div>
            </div>

            <h1 className="experience-section-title">Educations</h1>
            <div className="experiences-row">
                <div className="experience-period">
                    <strong className="experience-title">Başkent University</strong>
                    <p className="experience-date">2017-2020</p>
                </div>
                <div className="experience-detail">
                    <strong className="experience-text">Master’s Degree</strong>
                </div>
            </div>
            <div className="experiences-row">
                <div className="experience-period">
                    <strong className="experience-title">Başkent University</strong>
                    <p className="experience-date">2011-2015</p>
                </div>
                <div className="experience-detail">
                    <strong className="experience-text">Bachelor's Degree</strong>
                </div>
            </div>
        </div>
    )
}

export default Experiences
