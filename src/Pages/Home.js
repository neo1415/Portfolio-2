import React from 'react'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className='HomePage'>
        <header className='hero'>
          <h1 className='hero-text'>
            Hey there, I am
            <span> The Skynet</span>
          </h1>
          <p className='h-sub-text'>
            The sanctity of the human race is not in it's ability to survive whatever nature throws at him,
            it is in his ability to evolve past challengeds that were meant to facilitate his own extiction to the point
              where Nature's harshest examinations are nothing but minor inconveniences.
           </p>
           <div className='icons'>
              <Link to={'https://web.facebook.com/ademola.daniel.7127'} className='icon-holder'>
                <FontAwesomeIcon icon={faFacebook} className='icon fb' />
              </Link>
              <Link to={'https://github.com/neo1415/'} className='icon-holder'>
                <FontAwesomeIcon icon={faGithub} className='icon gh' />
              </Link>
              <Link to={'https://www.linkedin.com/in/oyeniyi-daniel-85464b1b2/'} className='icon-holder'>
                <FontAwesomeIcon icon={faLinkedin} className='icon ld' />
              </Link>
           </div>
        </header>
    </div>
  )
}

export default Home