import React, { Component } from 'react';

import { Modal } from 'react-bootstrap';

import './style.css';

class SignupModal extends Component {
    render() {
        const { isShown } = this.props;

        return (
                <Modal show={isShown}
                    animation={false}
                    className='signup'
                    backdropClassName='backdrop-opacity'>
                    <h4 className='modal-title'>Create an account</h4>
                    <Modal.Body bsClass='custom-modal-body'>
                        <form action="/action_page.php" className='form-padding'>
                            <div className='center-names'>
                                <div className="form-floating-label has-value">
                                    <input type="text" id="fname" name="firstname" required />
                                    <label>First name</label>
                                </div>

                                <div className="form-floating-label has-value">
                                    <input type="text" id="lname" name="lastname" required />
                                    <label>Last name</label>
                                </div>

                            </div>

                            <div className="form-floating-label has-value">
                                <input type="date" id="date" name="date" required />
                                <label>Date of Birth</label>
                            </div>

                            <div className="form-floating-label has-value">
                                <input type="email" id="email" name="email" required />
                                <label>Email Address</label>
                            </div>
                            <div className="form-floating-label has-value">
                                <input type="password" id="pass" name="pass" required />
                                <label>Password</label>
                            </div>

                            <input type="submit" value="Create account" />
                        </form>
                    </Modal.Body>

                </Modal>
        )
    }
}

export default SignupModal;