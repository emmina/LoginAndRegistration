import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../assets/logo.png';
import profileImage from '../assets/profile.png';

import './Navbar.css';

class Navbar extends Component {
    onOpenModal(modal) {
        this.props.onOpenModal(modal);
    }

    render() {
        const { profile } = this.props;
        let profileUser = profile === undefined ? {first_name: '', last_name: ''} : profile.user;

        return (
            <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
                <a className='' href="/">
                    <img src={logo} className='logo' alt="logo" height="27" width="151" />
                </a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item navbar-text">
                        <a className='nav-link' href="/flowers">Flowers</a>
                    </li>
                    <li className="nav-item navbar-text">
                        <a className='nav-link' href="/sightings">Latest Sightings</a>
                    </li>
                    <li className="nav-item navbar-text">
                        <a className='nav-link' href="/favourites">Favorites</a>
                    </li>
                    {localStorage.getItem('user') !== null && <li className='profile-item'>
                        <Link to='/' className='nav-link profile-link' onClick={(e) => this.onOpenModal('profile')}>
                            {profileUser !== undefined ? profileUser.first_name : ''} {profileUser !== undefined ? profileUser.last_name : ''}
      <img className='profile-image' src={profileImage} alt="profile" height='40' width='40'></img>
                        </Link>
                    </li>}
                    {localStorage.getItem('user') === null && <li className="nav-item navbar-text">
                        <Link to='/' className='nav-link login-item' onClick={(e) => this.onOpenModal('login')}>Login</Link>
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

function mapStateToProps(state) {
    const { getuser } = state;
    const { profile } = getuser;
    return {
        profile
    };
}

Navbar = connect(mapStateToProps)(Navbar);
export default Navbar;
