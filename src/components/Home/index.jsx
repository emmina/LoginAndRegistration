import React, { Component } from 'react';

import Navbar from '../../helpers/Navbar';
import ModalPopup from '../../helpers/ModalPopup';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            openedModal: ''
        }

        this.onOpenModal = this.onOpenModal.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    onOpenModal(modal) {
        this.setState({openedModal: modal})
    }

    handleClose() {
        this.setState({openedModal: ''})
    }

    render() {
        const { openedModal } = this.state;
        
        return (
            <div className="home">
                <Navbar active='home' 
                        onOpenModal={this.onOpenModal}/>
                <ModalPopup openedModal={openedModal} handleClose={this.handleClose}/>
            </div>
        )
    }
}

export default Home;