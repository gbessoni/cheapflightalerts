import {Component} from 'react';
import Modal from '../components/UI/Modal';
import SubscribeForm from '../components/SubscribeForm';

class SubscribeModal extends Component {

    state = {
        isModalOpen: false
    };

    openModal = () => {
        this.setState({isModalOpen: true});
    };

    closeModal = () => {
        this.setState({isModalOpen: false});
    };

    componentDidMount() {
        setTimeout(() => {
            this.openModal();
        }, 20000);
    }

    componentWillUnmount() {
        this.closeModal();
    }

    render() {
        return (
            <Modal
                show={this.state.isModalOpen}
                modalClosed={this.closeModal}
            >

                <div className="custom-modal__content">

                    <span
                      className="custom-modal__content__close-icon"
                      onClick={this.closeModal}
                    >
                        <i className="ion-close-round" />
                    </span>

                    <div className="heading-secondary heading-secondary--bold text-center">
                        <i className="ion-ios-email"/>
                        <h2>Don't want to miss anything?</h2>
                    </div>

                    <div className="custom-modal__content__text">
                        <p>
                            Get notified on amazingly low flight deals. We search the web 24/7 to bring you insane deals
                            on international flights, right to your inbox. Upgrade to receive Domestic Flight Deals,
                            Filter your deals by preferred fly dates and destinations.
                        </p>
                    </div>

                    <SubscribeForm
                        btnText="Send me cheap flight alerts today!"
                    />

                    <span
                        className="custom-modal__content__close-link"
                        onClick={this.closeModal}
                    >
                        No thanks, I’ll pay full price for my flight!
                    </span>

                </div>

            </Modal>
        );
    }

}

export default SubscribeModal;