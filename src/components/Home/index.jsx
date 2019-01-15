import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../../helpers/Navbar';

class Home extends Component {

    render() {
        const { tvshows } = this.props;

        console.log('render', tvshows)
        return (
            <div className="home">
                <Navbar active='home'/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
       
    };
  };
  
  Home = connect(mapStateToProps, {})(Home);
export default Home;