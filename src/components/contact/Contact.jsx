import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'; 
import {AiOutlineInstagram} from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com'           ;



const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_jh7rs88', 'template_yrnze4b', form.current, 'h2xSt3nyNP7-6A8Ki')
        e.target.reset();
    }

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div class="container contact__container">
                <div class="contact__options">
                    <article class="contact__option ">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>singhatmagyan@outlook.com</h5>
                        <a href="mailto:singhatmagyan@outlook.com" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article class="contact__option ">
                        <AiOutlineInstagram className="contact__option-icon"/>
                        <h4>Instagram</h4>
                        <h5>blackd3vil.007</h5>
                        <a href="https://www.instagram.com/blackd3vil.007/" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article class="contact__option ">
                        <BsWhatsapp className="contact__option-icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+91-7309085383</h5>
                        <a href="https://api.whatsapp.com/send?phone=+917309085383" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Full Name" required />
                    <input type="text" name="email" placeholder="Email" required />
                    <textarea name="message" cols="30" rows="7" placeholder="Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>

        </section>
    )
} 

export default Contact;
