import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import DatePicker from "react-datepicker";

import { userActions } from '../../actions';

import './style.css';

class SignupModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fname: '',
            lname: '',
            date: '',
            dateValue: new Date(),
            email: '',
            password: ''
        };

        this.onSignin = this.onSignin.bind(this);
    }

    onSignin() {
        const { dispatch } = this.props;
        const { fname, lname, date, email, password } = this.state;

        dispatch(userActions.register({
            first_name: fname,
            last_name: lname,
            date_of_birth: date,
            password: password,
            email: email
        }));
    }

    render() {
        const { isShown } = this.props;

        return (
            <Modal show={isShown}
                animation={false}
                className='signup'
                backdropClassName='backdrop-opacity'>
                <h5 className='modal-title'>Create an account</h5>
                <Modal.Body bsClass='custom-modal-body'>
                    <form action="/" className='form-padding'>
                        <div className='center-names'>
                            <div className="form-floating-label has-value">
                                <input type="text" id="fname" name="firstname" onChange={(event) => this.setState({ fname: event.target.value })} required />
                                <label>First name</label>
                            </div>

                            <div className="form-floating-label has-value">
                                <input type="text" id="lname" name="lastname" onChange={(event) => this.setState({ lname: event.target.value })} required />
                                <label>Last name</label>
                            </div>

                        </div>

                        <div className="form-floating-label has-value">
                            <DatePicker
                                selected={this.state.dateValue}
                                className='custom-date'
                                onChange={(date) => this.setState({ date: date.toString(), dateValue: date })}
                                dateFormat="MMMM d, yyyy"
                            />
                            <label className='date-label'>Date of Birth</label>
                        </div>

                        <div className="form-floating-label has-value">
                            <input type="email" id="email" name="email" onChange={(event) => this.setState({ email: event.target.value })} required />
                            <label>Email Address</label>
                        </div>
                        <div className="form-floating-label has-value">
                            <input type="password" id="pass" name="pass" onChange={(event) => this.setState({ password: event.target.value })} required />
                            <label>Password</label>
                        </div>

                        <input type="submit" value="Create account" onClick={this.onSignin} />
                    </form>
                </Modal.Body>

            </Modal>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    const { registering } = state.registration;
    return {
        registering
    };
}


SignupModal = connect(mapStateToProps)(SignupModal);
export default SignupModal;