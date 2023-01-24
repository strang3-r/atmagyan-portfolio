import React from 'react';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
import './about.css';
import Me from "../../assets/me-about.jpg";


const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Me} alt="About Image"/>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>2+ Years Working</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Clients</h5>
                            <small>10+ Worldwide Clients</small>
                        </article><article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>10+ Projects</small>
                        </article>
                    </div>

                    <p>To use my extensive knowledge of software engineering, innovative problem-solving skills, and passion for technology to develop and implement high-quality software solutions and contribute to the success of the organization.</p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>

                </div>
            </div>
        </section>
    )
}

export default About