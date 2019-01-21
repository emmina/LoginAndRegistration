import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../../helpers/Navbar';
import ModalPopup from '../../helpers/ModalPopup';
import { userActions } from '../../actions';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openedModal: props.match.params.openedModal !== undefined ? 'profile' : ''
        }

        this.onOpenModal = this.onOpenModal.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(userActions.getUser());
    }

    onOpenModal(modal) {
        this.setState({ openedModal: modal })
    }

    handleClose() {
        this.setState({ openedModal: '' })
    }

    render() {
        const { openedModal } = this.state;

        return (
            <div className="home">
                <Navbar active='home'
                    onOpenModal={this.onOpenModal} />
                <ModalPopup
                    openedModal={openedModal}
                    handleClose={this.handleClose}
                    onOpenModal={this.onOpenModal} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

Home = connect(mapStateToProps)(Home);
export default Home;