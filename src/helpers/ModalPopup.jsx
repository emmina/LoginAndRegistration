import React, { Component } from 'react';

import { SignupModal, LoginModal, ProfileModal } from '../components/Modal';

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
            <div hidden={openedModal === ''} className={openedModal}>
                <SignupModal isShown={openedModal === 'signup'} handleClose={this.handleClose}/>
                <LoginModal isShown={openedModal === 'login'} handleClose={this.handleClose}/>
                <ProfileModal isShown={openedModal === 'profile'} handleClose={this.handleClose}/>
                {/*<p>I don't want to register</p>*/}
            </div>

        )
    }
}

export default ModalPopup;