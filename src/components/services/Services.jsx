import React from 'react';
import {BiCheck} from 'react-icons/bi';

import './services.css';

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div class="container services__container">
                <article class="service">
                    <div class="services__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul class="service__list">
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                    </ul>
                </article>
                <article class="service">
                    <div class="services__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul class="service__list">
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                    </ul>
                </article>
                <article class="service">
                    <div class="services__head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul class="service__list">
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                    </ul>
                </article>
            </div>

        </section>
    )
}

export default Services