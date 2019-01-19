import React, { Component } from 'react';

import logo from '../assets/logo.png';

import './Navbar.css';

class Navbar extends Component {
    onOpenModal(modal) {
        this.props.onOpenModal(modal);
    }

    render() {
        return (
            <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
            <a className='' href="/">
            <img src={logo} alt="logo" height="27" width="151"/>
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
      <li className="nav-item navbar-text">
      <a className='nav-link' href="/shows">Login</a>
      </li>
      <li className="nav-item navbar-text">
      <button type="button" className="btn btn-primary" onClick={(e) => this.onOpenModal('signup')}>
      Signup
      </button>
      </li>
    </ul>
            </nav>
        );
    }
}

export default Navbar;
