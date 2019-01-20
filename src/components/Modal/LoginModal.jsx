import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';

import { userActions } from '../../actions';

import './style.css';

class LoginModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.onLogin = this.onLogin.bind(this);
    }

    onLogin() {
        const { dispatch } = this.props;
        const { email, password } = this.state;

        dispatch(userActions.login({
            email: email,
            password: password
        }));
    }

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
                                <input type="email" id="email" name="email" onChange={(event) => this.setState({ email: event.target.value })} required />
                                <label>Email Address</label>
                            </div>
                            <div className="form-floating-label has-value">
                                <input type="password" id="pass" name="pass" onChange={(event) => this.setState({ password: event.target.value })} required />
                                <label>Password</label>
                            </div>

                            <input type="submit" value="Login to your Account" />
                        </form>
                    </Modal.Body>

                </Modal>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

LoginModal = connect(mapStateToProps)(LoginModal);
export default LoginModal;