import React, { Component } from 'react';

import { Modal } from 'react-bootstrap';

import './style.css';

class ModalPopup extends Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.props.handleClose();
    }

    render() {
        const { openedModal } = this.props;

        return (
            <div hidden={openedModal === ''}>
                <Modal show={openedModal !== ''}
                    animation={false}
                    backdropClassName='backdrop-opacity'>
                    <h4 className='modal-title'>Create an account</h4>
                    <Modal.Body bsClass='custom-modal-body'>
                        <form action="/action_page.php" className='form-padding'>
                            <div className='center-names'>
                                <div class="form-floating-label has-value">
                                    <input type="text" id="fname" name="firstname" required />
                                    <label for="email">First name</label>
                                </div>

                                <div class="form-floating-label has-value">
                                    <input type="text" id="lname" name="lastname" required />
                                    <label for="email">Last name</label>
                                </div>

                            </div>

                            <div class="form-floating-label has-value">
                                <input type="date" id="date" name="date" required />
                                <label for="email">Date of Birth</label>
                            </div>

                            <div class="form-floating-label has-value">
                                <input type="email" id="email" name="email" required />
                                <label for="email">Email Address</label>
                            </div>
                            <div class="form-floating-label has-value">
                                <input type="password" id="pass" name="pass" required />
                                <label for="email">Password</label>
                            </div>

                            <input type="submit" value="Create account" />
                        </form>
                    </Modal.Body>

                </Modal>
                <p>I don't want to register</p>
            </div>

        )
    }
}

export default ModalPopup;