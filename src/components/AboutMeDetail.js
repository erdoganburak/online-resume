import React from 'react'
import './AboutMeDetail.css'

function AboutMeDetail() {
    return (
        <div className="about-me-detail-container">
            <div className="profile-picture">
                <img className="img-pic" src={process.env.PUBLIC_URL + "/images/pp.jpg"} alt="profile_picture"></img>
            </div>
            <div className="details">
                <div>
                    <strong className="name">Burak Erdoğan</strong>
                </div>
                <div>
                    <p className="age">28 Years Old</p>
                </div>
                <div>
                    <p className="location">Ankara, Turkey</p>
                </div>
            </div>
            <div className="biograpyh">
                <p className="biography-text">
                    Software developer specializing in web development.
                    Experienced with all stages of the development cycle
                    for dynamic web projects. Well-versed in numerous
                    programming languages including Java, JavaScript,
                    Typescript, HTML5, CSS. Had experience with popular
                    frameworks and libraries such as Angular, React
                    Native and Node.js. Strong background in object-oriented programming and web development.
                </p>
            </div>
        </div >
    )
}

export default AboutMeDetail
