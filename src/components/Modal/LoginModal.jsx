import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

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
        const { dispatch, history, openLoginToast } = this.props;
        const { email, password } = this.state;

        dispatch(userActions.login({
            email: email,
            password: password
        }));

        history.replace('/');
        openLoginToast();
    }

    render() {
        const { isShown } = this.props;

        return (
            <div>
                <Modal show={isShown}
                    animation={false}
                    className='login'
                    backdropClassName='backdrop-opacity'>
                    <h5 className='modal-title'>Welcome Back</h5>
                    <Modal.Body bsClass='custom-modal-body'>
                        <div className='form-padding'>
                        <div className="form-floating-label has-value">
                                <input type="email" id="email" name="email" onChange={(event) => this.setState({ email: event.target.value })} required />
                                <label>Email Address</label>
                            </div>
                            <div className="form-floating-label has-value">
                                <input type="password" id="pass" name="pass" onChange={(event) => this.setState({ password: event.target.value })} required />
                                <label>Password</label>
                            </div>

                            <input type="submit" value="Login to your Account" onClick={this.onLogin}/>
                        </div>
                    </Modal.Body>
                    <Link to='/' className='close-modal' onClick={this.props.handleClose}>I don't want to Login</Link>
                </Modal>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

LoginModal = withRouter(LoginModal);
LoginModal = connect(mapStateToProps)(LoginModal);
export default LoginModal;