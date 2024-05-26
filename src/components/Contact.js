import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import email from './mail.png'
import location from './location-pin.png'
import phone from './phone.png'


export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_bzeou8y', 'template_b37t6pu', form.current, 'VBMru-UNMpmrQlhJ-')
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <div className='contact-container' id='contactlinker'>
            <div className="contact-left">
                <div className="contact-subheading">
                    <h1>Let's Connect</h1>
                    <h3>Do you have any <span>questions</span>,</h3>
                    <h3><span>suggestions</span> or <span>feedback</span>?</h3>
                    <h3>I'd love to hear from you</h3>
                </div>
                <div className="contact-socials">
                    <div className="contact-social">
                        <img src={phone}></img>
                        <h3>+91 8059020005</h3>
                    </div>
                    <div className="contact-social">
                        <img src={email}></img>
                        <h3>psmaan4444@gmail.com</h3>
                    </div>
                    <div className="contact-social">
                        <img src={location}></img>
                        <h3>Pune, India</h3>
                    </div>
                </div>
            </div>
            <div className="contact-right">
                <form ref={form} onSubmit={sendEmail}>
                    <div class="form">
                        <div class="input-group name">
                            <input type="text" id="name" name="user_name" required />
                            <label for="">Name</label>
                        </div>
                        <div class="input-group email">
                            <input type="email" id="email" name="user_email" required />
                            <label for="">Email</label>
                        </div>
                        <div class="input-group message-group">
                            <textarea name="message" id="message" cols="30" rows="7"></textarea>
                            <label for="">Message</label>
                        </div>
                        <div className="form-button">
                            <input id="formbutton" type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
                <div className="contact-socials">
                    <div className="contact-social">
                        <img src={phone}></img>
                        <h3>+91 8059020005</h3>
                    </div>
                    <div className="contact-social">
                        <img src={email}></img>
                        <h3>psmaan4444@gmail.com</h3>
                    </div>
                    <div className="contact-social">
                        <img src={location}></img>
                        <h3>Pune, India</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

