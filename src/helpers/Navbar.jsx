import React, { PureComponent } from 'react';

import logo from '../assets/logo.png';

import './Navbar.css';

class Navbar extends PureComponent {
    render() {
        return (
            <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
            <a className='' href="/">
            <img src={logo} alt="logo" height="27" width="151"/>
            </a>
            <ul class="navbar-nav ml-auto">
            <li class="nav-item navbar-text">
      <a className='nav-link' href="/shows">Flowers</a>
      </li>
      <li class="nav-item navbar-text">
      <a className='nav-link' href="/shows">Latest Sightings</a>
      </li>
      <li class="nav-item navbar-text">
      <a className='nav-link' href="/shows">Favorites</a>
      </li>
      <li class="nav-item navbar-text">
      <a className='nav-link' href="/shows">Login</a>
      </li>
      <li class="nav-item navbar-text">
      <a className='nav-link' href="/shows">Signup</a>
      </li>
    </ul>
            </nav>
        );
    }
}

export default Navbar;
