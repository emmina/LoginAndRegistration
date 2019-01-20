import React, { Component } from 'react';

import { Modal } from 'react-bootstrap';

import './style.css';

class LoginModal extends Component {
    render() {
        const { isShown } = this.props;

        return (
                <Modal show={isShown}
                    animation={false}
                    className='login'
                    backdropClassName='backdrop-opacity'>
                    <h4 className='modal-title'>Welcome Back</h4>
                    <Modal.Body bsClass='custom-modal-body'>
                        <form action="/action_page.php" className='form-padding'>
                            <div className="form-floating-label has-value">
                                <input type="email" id="email" name="email" required />
                                <label>Email Address</label>
                            </div>
                            <div className="form-floating-label has-value">
                                <input type="password" id="pass" name="pass" required />
                                <label>Password</label>
                            </div>

                            <input type="submit" value="Login to your Account" />
                        </form>
                    </Modal.Body>

                </Modal>
        )
    }
}

export default LoginModal;