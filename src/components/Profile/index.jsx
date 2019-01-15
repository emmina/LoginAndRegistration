import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../../helpers/Navbar';

class Profile extends Component {

    render() {
        const { tvshows } = this.props;

        console.log('render', tvshows)
        return (
            <div className="tv-shows">
                <Navbar active='shows'/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
       
    };
  };
  
Profile = connect(mapStateToProps, {})(Profile);
export default Profile;