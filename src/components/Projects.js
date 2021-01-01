import React from 'react'
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Projects() {
    return (
        <div className="projects-container">
            <div className="projects-wrapper">
                <div className="projects-icon-container">
                    <Link
                        to={{ pathname: "https://github.com/erdoganburak" }}
                        target="_blank"
                        aria-label='Github'
                    >
                        <FontAwesomeIcon icon={['fab', 'github']} color="#fff" size='6x' />
                    </Link>
                </div>
                <div className="projects-row">
                    <Link
                        to={{ pathname: "https://github.com/erdoganburak" }}
                        className="projects-github-icon"
                        target="_blank"
                        aria-label='Github'
                    >
                        <strong className="projects-title">Check out my projects on GitHub. Including this one!</strong>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Projects
