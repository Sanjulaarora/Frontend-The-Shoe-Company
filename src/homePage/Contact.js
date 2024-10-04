import React from 'react';
import {Link} from 'react-router-dom';
import imgFB from '../images/facebook.svg';
import imgInsta from '../images/instagram.svg';
import imgTwitch from '../images/twitch.svg';
import imgYT from '../images/youtube.svg';

const Contact = () => {

  return (
    <section id="contact" className="px-6 md:px-12 max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center p-16 scroll-mt-16">
      <div className="mb-10 lg:mb-0 shrink-0 self-start media830:self-center">
        <h2 className="text-xl media450:text-3xl media830:text-6xl font-bold">
          Contact Us
        </h2>
        <p className="max-w-[180px] my-4 media450:my-8 text-xs media450:text-base">THE SHOE COMPANY, Dallas, Texas,USA +1 5590 1120 9910</p>
        <div className="flex space-x-2 media450:space-x-4">
          <Link to='/'>
            <img className="hover:bg-slate-600" src={imgFB} alt="facebook" loading="lazy"/>
          </Link>
          <Link to='/'>
            <img className="hover:bg-slate-600" src={imgInsta} alt="instagram" loading="lazy"/>
          </Link>
          <Link to='/'>
            <img className="hover:bg-slate-600" src={imgTwitch} alt="twitch" loading="lazy"/>
          </Link>
          <Link to='/'>
            <img className="hover:bg-slate-600" src={imgYT} alt="youtube" loading="lazy"/>
          </Link>
        </div>
      </div>
      <div className="w-full">
       <iframe className="w-full max-w-2xl mx-auto lg:mx-0 lg:ml-auto"
          title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429174.12173092744!2d-97.06121181137351!3d32.82080973255075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1720448089957!5m2!1sen!2sin" height="600" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>
  )
}

export default Contact;