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
                            <p>Responsible for designing and implementing the overall user experience of a product or application.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Works closely with product managers, designers, and developers to understand user needs and create intuitive and visually appealing interfaces.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Uses tools such as wireframes, mockups, and prototypes to communicate design ideas and gather feedback.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Familiar with design software such as Adobe XD, Figma, Sketch and prototyping tools like InVision, Axure, Prott.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Proficient in HTML, CSS, and JavaScript to implement designs and ensure they are responsive and accessible.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Keeps up-to-date with the latest design trends and technologies to ensure that products meet or exceed user expectations.</p>
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
                            <p>Uses programming languages such as HTML, CSS, JavaScript, and various frameworks and libraries to create interactive and dynamic user experiences.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Collaborates with designers, project managers, and other developers to plan and build new features and functionality.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Understands and applies principles of web design, user experience, and search engine optimization.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Proficient in one or more web development frameworks such as React, Vite, and Express.js.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Tests and debugs code to ensure cross-browser and cross-device compatibility and high-quality user experience..</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Understands and applies principles of web design, user experience, and search engine optimization.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Familiar with development tools such as Git, text editors, and debugging tools.</p>
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
                            <p>Involves creating written, visual, and audio content for various digital platforms such as websites, blogs, social media, and video platforms..</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Works with a content strategy to create engaging and informative content that aligns with the company's messaging and brandingCollaborates with other teams such as marketing, design, and product development to create cohesive and effective content.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Collaborates with other teams such as marketing, design, and product development to create cohesive and effective content.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Understands and applies principles of SEO, social media optimization, and analytics to track and measure the performance of content.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Familiar with various content creation tools such as Adobe Creative Suite, Canva, and video editing softwareProficient in writing and editing content in different formats such as blog posts, articles, social media posts, videos, infographics.</p>
                        </li>
                        <li>
                            <BiCheck class="service__list-icon" />
                            <p>Proficient in writing and editing content in different formats such as blog posts, articles, social media posts, videos, infographics.</p>
                        </li>
                    </ul>
                </article>
            </div>

        </section>
    )
}

export default Services