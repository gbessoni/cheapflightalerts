import { Component } from 'react';
import DivWrapper from '../../hoc/divWrapper';
import BackDrop from './BackDrop';

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    return (
      <DivWrapper>

        <BackDrop
          show={this.props.show}
          clicked={this.props.modalClosed}
        />

        <div
          className="custom-modal"
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
        >
          {this.props.children}
        </div>

      </DivWrapper>
    );
  }

}

export default Modal;