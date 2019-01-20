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
                <SignupModal isShown={openedModal === 'signup'}/>
                <LoginModal isShown={openedModal === 'login'}/>
                <ProfileModal isShown={openedModal === 'profile'}/>
                {/*<p>I don't want to register</p>*/}
            </div>

        )
    }
}

export default ModalPopup;