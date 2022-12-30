import React from 'react';
import {FaFacebook} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';

import './footer.css';

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">Black-D3vil</a>
            <ul className="permalink">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testinomials">Testinomial</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__social">
                <a href=""><FaFacebook /></a>
                <a href=""><FiInstagram /></a>
                <a href=""><IoLogoTwitter /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Black-D3vil. All rights reserved.</small>
            </div>

        </footer>
    )
}

export default Footer;
