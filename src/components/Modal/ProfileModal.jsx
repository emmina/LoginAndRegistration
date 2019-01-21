import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import profileImage from '../../assets/profile.png';
import { userActions } from '../../actions';

import './style.css';

class ProfileModal extends Component {
    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(userActions.getUser());
    }

    onLogout() {
        const { dispatch, history, handleClose } = this.props;

        dispatch(userActions.logout());

        history.replace('/');
        handleClose();
    }

    render() {
        const { isShown, profile } = this.props;

        return (
            <Modal show={isShown}
                className='profile'
                animation={false}
                backdrop={true}
                onHide={this.props.handleClose}
                backdropClassName='backdrop-opacity'>
                <Modal.Header closeButton>
                <div className='profile-header'>
                <img src={profileImage} alt="logo" className='profile-picture' height="80" width="80"/>
                <div className='profile-name'>
                    <h5>{profile !== undefined ? profile.first_name : ''} {profile !== undefined ? profile.last_name : ''}</h5>
                    <p>47 sightings</p>
                </div>
                </div>
        </Modal.Header>
                
                <Modal.Body bsClass='custom-modal-body'>
                    <div className='form-padding profile-form'>
                        <div className="form-floating-label has-value profile">
                            <input type="text" id="fname" name="fname" value={profile !== undefined ? profile.first_name : ''} disabled />
                            <label>First Name</label>
                        </div>
                        <div className="form-floating-label has-value profile">
                            <input type="text" id="lname" name="lname" value={profile !== undefined ? profile.last_name : ''} disabled />
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

                        <input type="submit" value="Logout" className='logout-button' onClick={this.onLogout} />
                    </div>
                </Modal.Body>

            </Modal>
        )
    }
}

function mapStateToProps(state) {
    const { getuser } = state;
    const { profile } = getuser;
    return {
        profile: profile !== undefined ? profile.user : undefined
    };
}

ProfileModal = withRouter(ProfileModal);
ProfileModal = connect(mapStateToProps)(ProfileModal);
export default ProfileModal;