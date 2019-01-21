import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import { history } from '../../helpers';

import './style.css';

class LoginToast extends Component {
    constructor(props) {
        super(props);

        this.closeModal = this.closeModal.bind(this);
        this.openProfile = this.openProfile.bind(this);
    }

    closeModal() {
        history.go(0);
    }

    openProfile() {
        history.push('/openedModal=profile');
        history.go(0);
    }

    render() {
        const { isShown } = this.props;

        return (
            <div>
                <Modal show={isShown}
                    animation={false}
                    className='reg-toast'
                    backdropClassName='backdrop-opacity'>
                    <Modal.Header>
                        <h5 className='modal-title toast-title'>Congratulations! You have successfully logged into FlowrSpot!</h5>
                    </Modal.Header>
                    <Modal.Body bsClass='custom-modal-body'>
                        <div className='form-padding'>
                            <input type="submit" value="OK" onClick={this.closeModal} />
                            <input type="submit" value="Profile" onClick={this.openProfile} />
                        </div>
                    </Modal.Body>
                </Modal>

            </div>
        )
    }
}

export default LoginToast;