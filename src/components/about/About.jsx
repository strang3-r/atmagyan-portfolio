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
                            <small>3+ Years Working</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Clients</h5>
                            <small>200+ Worldwide Clients</small>
                        </article><article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>60+ Projects</small>
                        </article>
                    </div>

                    <p>Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Iure consectetur numquam nihil eius autem aut eaque cum saepe laborum, quod cupiditate error porro necessitatibus aspernatur. Nihil corporis iusto quisquam placeat?</p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>

                </div>
            </div>
        </section>
    )
}

export default About