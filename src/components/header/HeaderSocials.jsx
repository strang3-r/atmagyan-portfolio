import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {SiLinktree} from 'react-icons/si';

const HeaderSocials = () => {
    return (
        <div className="header__social">
            <a href="https://www.linkedin.com/in/black-d3vil/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/Black-D3vil007" target="_blank" rel="noreferrer"><BsGithub /></a>
            <a href="https://linktr.ee/atmagyan" target="_blank" rel="noreferrer"><SiLinktree /></a>
        </div>
    )
}

export default HeaderSocials;