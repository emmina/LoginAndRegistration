import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';

import profile from '../../assets/profile.png';
import { userActions } from '../../actions';

import './style.css';

class ProfileModal extends Component {

    componentDidMount() {
        this.props.dispatch(userActions.getUser());
    }

    render() {
        const { isShown, user } = this.props;
        console.log(user)

        return (
            <Modal show={isShown}
                className='profile'
                animation={false}
                backdrop={true}
                onHide={this.props.handleClose}
                backdropClassName='backdrop-opacity'>
                <Modal.Header closeButton>
                <div className='profile-header'>
                <img src={profile} alt="logo" className='profile-picture' height="80" width="80"/>
                <div className='profile-name'>
                    <h5>Michael Berry</h5>
                    <p>47 sightings</p>
                </div>
                </div>
        </Modal.Header>
                
                <Modal.Body bsClass='custom-modal-body'>
                    <form action="/action_page.php" className='form-padding profile-form'>
                        <div className="form-floating-label has-value profile">
                            <input type="text" id="fname" name="fname" value='John' disabled />
                            <label>First Name</label>
                        </div>
                        <div className="form-floating-label has-value profile">
                            <input type="text" id="lname" name="lname" value='Doe' disabled />
                            <label>Last Name</label>
                        </div>

                        <div className="form-floating-label has-value profile">
                            <input type="text" id="date" name="date" value='May 20, 1980' disabled />
                            <label>Date of Birth</label>
                        </div>

                        <div className="form-floating-label has-value profile">
                            <input type="text" id="email" name="email" value='emina@gmail.com' disabled />
                            <label>Email Address</label>
                        </div>

                        <input type="submit" value="Logout" className='logout-button' />
                    </form>
                </Modal.Body>

            </Modal>
        )
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    console.log('auth', authentication)
    const { user } = authentication;
    return {
        user
    };
}

ProfileModal = connect(mapStateToProps)(ProfileModal);
export default ProfileModal;