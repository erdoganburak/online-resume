import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-links">
                <div className="fotter-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Me</h2>
                        <Link to='/'>Home</Link>
                        <Link to='/about-me'>About Me</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link target="_blank" to={{ pathname: "https://www.facebook.com/profile.php?id=100014788951810" }}>Facebook</Link>
                        <Link target="_blank" to={{ pathname: "https://www.instagram.com/burak__erdogan/" }}>Instagram</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <small className="website-rights">Burak ERDOĞAN ® 2020</small>
                    <div className="social-icons">
                        <Link
                            to={{ pathname: "https://www.facebook.com/profile.php?id=100014788951810" }}
                            className="social-icon-link"
                            target="_blank"
                            aria-label='Facebook'
                        >
                            <FontAwesomeIcon className="social-icon-item" icon={['fab', 'facebook']} />
                        </Link>
                        <Link
                            to={{ pathname: "https://www.linkedin.com/in/burak-erdo%C4%9Fan-4a553a9b/" }}
                            className="social-icon-link"
                            target="_blank"
                            aria-label='Linkedin'
                        >
                            <FontAwesomeIcon className="social-icon-item" icon={['fab', 'linkedin']} />
                        </Link>
                        <Link
                            to={{ pathname: "https://github.com/erdoganburak" }}
                            className="social-icon-link"
                            target="_blank"
                            aria-label='Github'
                        >
                            <FontAwesomeIcon className="social-icon-item" icon={['fab', 'github']} />
                        </Link>
                        <Link
                            to={{ pathname: "https://www.instagram.com/burak__erdogan/" }}
                            className="social-icon-link"
                            target="_blank"
                            aria-label='Instagram'
                        >
                            <FontAwesomeIcon className="social-icon-item" icon={['fab', 'instagram']} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
