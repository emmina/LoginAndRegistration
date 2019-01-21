import React, { Component } from 'react';

import { SignupModal, LoginModal, ProfileModal, RegistrationToast, LoginToast } from '../components/Modal';

class ModalPopup extends Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    handleClose() {
        this.props.handleClose();
    }

    openModal(modal) {
        this.props.onOpenModal(modal);
    }

    render() {
        const { openedModal } = this.props;

        return (
            <div hidden={openedModal === ''} className={openedModal}>
                <SignupModal
                    isShown={openedModal === 'signup'}
                    handleClose={this.handleClose}
                    openRegToast={(e) => this.openModal('reg-toast')} />
                <LoginModal
                    isShown={openedModal === 'login'}
                    handleClose={this.handleClose}
                    openLoginToast={(e) => this.openModal('log-toast')} />
                <ProfileModal isShown={openedModal === 'profile'} handleClose={this.handleClose} />
                <RegistrationToast
                    isShown={openedModal === 'reg-toast'}
                    openLogin={(e) => this.openModal('login')} />
                <LoginToast
                    isShown={openedModal === 'log-toast'} />
            </div>

        )
    }
}

export default ModalPopup;