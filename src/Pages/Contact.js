import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg'; 
import email from '../img/emailme.svg'; 
import location from '../img/location.svg'; 
import Title from './../Components/Title';


function Contact() {
  return (
    <div>
      <div className='Title'>
      <Title title={'Contact Me'} span={'Contact Me'} />
      </div>
      <div className='ContactPage'>
        <div className='map-sect'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15830.268682159358!2d5.15363365!3d7.289985299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!3m2!1d6.5243793!2d3.3792057!5e0!3m2!1sen!2sng!4v1645661469798!5m2!1sen!2sng" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
        </div>
        <div className='contact-sect'>
            <ContactItem icon={phone} text1={'+234 814 124 3802'} text2={'+0333 7467 0308'} title={'Phone'}/>
            <ContactItem  icon={email} text1={'+234 814 124 3802'} text2={'+0333 7467 0308'} title={'Email'}/>
            <ContactItem  icon={location} text1={'+234 814 124 3802'} text2={'+0333 7467 0308'} title={'Address'}/>
        </div>
    </div>
    </div>
  )
}

export default Contact