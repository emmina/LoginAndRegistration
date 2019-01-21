import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import './style.css';

class RegistrationToast extends Component {
    constructor(props) {
        super(props);

        this.openLogin = this.openLogin.bind(this);
    }

    openLogin() {
        const { openLogin } = this.props;

        openLogin();
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
                    <h5 className='modal-title toast-title'>Congratulations! You have successfully signed up for FlowrSpot!</h5>
                    </Modal.Header>
                    <Modal.Body bsClass='custom-modal-body'>
                        <div className='form-padding'>
                            <input type="submit" value="OK" onClick={this.openLogin}/>
                        </div>
                    </Modal.Body>
                </Modal>
                
            </div>
        )
    }
}

export default RegistrationToast;