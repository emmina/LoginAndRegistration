import React, { Component } from 'react';

import { SignupModal, LoginModal, ProfileModal, RegistrationToast, LoginToast } from '../components/Modal';

class ModalPopup extends Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
        this.openProfile = this.openProfile.bind(this);
        this.openLogin = this.openLogin.bind(this);
        this.openLoginToast = this.openLoginToast.bind(this);
        this.openRegToast = this.openRegToast.bind(this);
    }

    handleClose() {
        this.props.handleClose();
    }

    openProfile() {
        this.props.onOpenModal('profile');
    }

    openLogin() {
        this.props.onOpenModal('login')
    }

    openLoginToast() {
        this.props.onOpenModal('log-toast');
    }

    openRegToast() {
        this.props.onOpenModal('reg-toast');
    }

    render() {
        const { openedModal } = this.props;

        return (
            <div hidden={openedModal === ''} className={openedModal}>
                <SignupModal 
                isShown={openedModal === 'signup'} 
                handleClose={this.handleClose}
                openRegToast={this.openRegToast} />
                <LoginModal 
                isShown={openedModal === 'login'} 
                handleClose={this.handleClose}
                openLoginToast={this.openLoginToast} />
                <ProfileModal isShown={openedModal === 'profile'} handleClose={this.handleClose} />
                <RegistrationToast
                    isShown={openedModal === 'reg-toast'}
                    openLogin={this.openLogin} />
                <LoginToast
                    isShown={openedModal === 'log-toast'}/>
            </div>

        )
    }
}

export default ModalPopup;