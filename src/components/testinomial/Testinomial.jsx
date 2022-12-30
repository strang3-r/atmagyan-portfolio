import React from 'react';

import './testinomial.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




const data = [
    {
      avatar: AVTR1,
      name: 'Tina Snow',
      review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, iste itaque similique? Voluptates, voluptate saepe molestiae, iure sit quis commodi eaque laborum iste maxime possimus sapiente, animi consequatur perspiciatis nobis.'
    },

    {
        avatar: AVTR2,
        name: 'Shatta Wale',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, iste itaque similique? Voluptates, voluptate saepe molestiae, iure sit quis commodi eaque laborum iste maxime possimus sapiente, animi consequatur perspiciatis nobis.'
    },
    {
        avatar: AVTR3,
        name: 'Kwame Despite',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, iste itaque similique? Voluptates, voluptate saepe molestiae, iure sit quis commodi eaque laborum iste maxime possimus sapiente, animi consequatur perspiciatis nobis.'
    },
    {
        avatar: AVTR4,
        name: 'Mr. D3vil',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, iste itaque similique? Voluptates, voluptate saepe molestiae, iure sit quis commodi eaque laborum iste maxime possimus sapiente, animi consequatur perspiciatis nobis.'
    }

]


const settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 1,
slidesToScroll: 1
};


const Testinomial = () => {
    return (
        <section id="testinomials">
            <h5>Review from Clients</h5>
            <h2>Testinomials</h2>

            <Slider {...settings} class="container testinomials__container" >
                {
                    data.map(({avatar, name, review}, index) => {
                        return(
                            <div key={index} className="testinomial item">
                                <div className="client__avatar">
                                    <img src={avatar} alt={name} />
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">{review}</small>
                            </div>
                        )
                    })
                }
            </Slider>

        </section>
    );
}

export default Testinomial;