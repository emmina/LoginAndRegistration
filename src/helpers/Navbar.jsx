import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';
import profile from '../assets/profile.png';

import './Navbar.css';

class Navbar extends Component {
    onOpenModal(modal) {
        this.props.onOpenModal(modal);
    }

    render() {
        console.log(localStorage.getItem('user'))
        return (
            <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
            <a className='' href="/">
            <img src={logo} className='logo' alt="logo" height="27" width="151"/>
            </a>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item navbar-text">
      <a className='nav-link' href="/shows">Flowers</a>
      </li>
      <li className="nav-item navbar-text">
      <a className='nav-link' href="/shows">Latest Sightings</a>
      </li>
      <li className="nav-item navbar-text">
      <a className='nav-link' href="/shows">Favorites</a>
      </li>
      {localStorage.getItem('user') === null && <li className='profile-item'>
      <Link to='/' className='nav-link' onClick={(e) => this.onOpenModal('profile')}>
      John Doe
      <img className='profile-image' src={profile} alt="profile" height='40' width='40'></img>
      </Link>
        </li>}
      {localStorage.getItem('user') === null && <li className="nav-item navbar-text">
      <Link to='/' className='nav-link login' onClick={(e) => this.onOpenModal('login')}>Login</Link>
      </li>}
      {localStorage.getItem('user') === null && <li className="nav-item navbar-text">
      <button type="button" className="btn btn-primary signup-button" onClick={(e) => this.onOpenModal('signup')}>
      New Account
      </button>
    </li>}
    </ul>
            </nav>
        );
    }
}

export default Navbar;
