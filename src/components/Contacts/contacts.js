import React, { useRef } from 'react';
import './contacts.css';
import Walmart from '../../assets/walmart.png';
import Facebook from '../../assets/facebook.png';
import Microsoft from '../../assets/microsoft.png';
import Adobe from '../../assets/adobe.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';


const Contacts = () => {
  const form= useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j3d1xlf', 'template_86s8mnw', form.current,  'cTq9yLCM4CyUIgN1w')
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email sent !');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
        <div className="contactPageInfo">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="contactDesc">I have clinets from most of the reputated brands and tech giants </p>
        </div>
        <div className="contactImgs">
            <img src={Walmart} alt="" className='contactImg' />
            <img src={Facebook} alt="" className='contactImg' />
            <img src={Microsoft} alt="" className='contactImg' />
            <img src={Adobe} alt="" className='contactImg' />
        </div>
        <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Fill out this form below to discuss any work oppurtunity</span> 
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className='name' placeholder='Your Name' name='your_name' />
          <input type="email" className="email" placeholder='Your Email' name='your_email' />
          <textarea name="message" id="msg" rows="5" placeholder='Your Message'></textarea>
          <button type='submit' className="submitBtn" value='send'>Submit</button>
          <div className="links">
            <img src={FacebookIcon} alt="Facebook" className="link" />
            <img src={TwitterIcon} alt="Twitter" className="link" />
            <img src={YoutubeIcon} alt="Youtube" className="link" />
            <img src={InstagramIcon} alt="Instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
    
  )
}

export default Contacts
