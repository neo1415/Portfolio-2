import React from 'react';
import about from '../img/about.png';

function ImageSection() {
  return (
    <div className='imageSection'>
        <div className='img'>
            <img src ={about} alt='abt img' />
        </div>
        <div className='about-info'>
            <h4>i am <span>The One</span></h4>
            <p className='about-text'
            >Experienced, Dedicated, Committed and more than wiling to take your
            ideas from it's infacy stage to the multi-million dollar stage.
            </p>
            <div className='about-details'>
               <div className='left-section'>
                   <p>Full Name</p>
                   <p>Age</p>
                   <p>Nationality</p>
                   <p>Languages</p>
                   <p>Address</p>
                   <p>Country</p>
               </div>
               <div className='right-section'>
                   <p>: Selene Belladonna</p>
                   <p>: 25</p>
                   <p>: New Zealand</p>
                   <p>: English, French, Japanese</p>
                   <p>: 64, Berghbridge road, Big Ben, London</p>
                   <p>: New Zealand, France, United Kingdom</p>
               </div>
            </div>
            <button className='btn'>Download CV</button>
        </div>
    </div>
  )
}

export default ImageSection