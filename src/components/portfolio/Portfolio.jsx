import React from 'react';

import './portfolio.css'
import IMG1 from '../../assets/IMG1.jpeg'
import IMG2 from '../../assets/IMG2.jpeg'
import IMG3 from '../../assets/IMG3.jpeg'
import IMG4 from '../../assets/IMG4.jpeg'
import IMG5 from '../../assets/IMG5.jpeg'
import IMG6 from '../../assets/IMG6.jpeg'


const data = [
    {   
        id: 1,
      image: IMG1,
      title: 'E-Commerce',
      github: 'https://github.com/Black-D3vil007',
      live: 'https://github.com/Black-D3vil007'
    },

    {   
        id: 2,
        image: IMG2,
        title: 'Crypto Zombies',
        github: 'https://github.com/Black-D3vil007',
        live: 'https://github.com/Black-D3vil007'
    },
    {   
        id: 4,
        image: IMG3,
        title: 'HooBank',
        github: 'https://github.com/Black-D3vil007',
        live: 'https://github.com/Black-D3vil007'
    },
    {   
        id: 4,
        image: IMG4,
        title: 'Portfolio',
        github: 'https://github.com/Black-D3vil007',
        live: 'https://github.com/Black-D3vil007'
    },
    {   
        id: 5,
        image: IMG5,
        title: 'Amazon Clone',
        github: 'https://github.com/Black-D3vil007',
        live: 'https://github.com/Black-D3vil007'
    },
    {   
        id: 6,
        image: IMG6,
        title: 'To- Do List',
        github: 'https://github.com/Black-D3vil007',
        live: 'https://github.com/Black-D3vil007'
    }

]


const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div class="container portfolio__container">
                {
                    data.map(({id, image, title, github, live}) => {
                        return(
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn" target="_blank" rel="noopener noreferrer">GitHub</a>
                                    <a href={live} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default Portfolio