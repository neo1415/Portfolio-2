import React from 'react'
import avatar from '../img/avatar.png'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <div className='NavBar'>
        <nav className='nav'>
            <div className='Profile'>
                <img src={avatar} alt='img avatar' />
            </div>
                <ul className='nav-items'>
                    <li className='nav-item'>
                        <NavLink to='/' exact='true' activeclassname='active'>
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/about' exact='true' activeclassname='active'>
                            About
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/portfolio' exact='true' activeclassname='active'>
                            Portfolio
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/blogs' exact='true' activeclassname='active'>
                            Blogs
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/contact' exact='true' activeclassname='active'>
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <footer className='footer'>
                     <p>@2021 The Skynet</p>
                </footer>
        </nav>
    </div>
  )
}

export default NavBar