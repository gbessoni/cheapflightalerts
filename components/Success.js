import { Component } from 'react';
import Link from 'next/link';

class Success extends Component {

  // componentWillUnmount() {
  //   document.querySelector('.alert').remove();
  // }

  render() {
    return (
      <div className="alert alert-success alert-dismissible">

        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>

        <p>
          <strong>Success!</strong> {this.props.success}
        </p>

        {this.props.isFromSignup && <p>
          Please visit this <Link href="/subscription"><a className="link">link</a></Link> to upgrade your account.
        </p>}

      </div>
    );
  }

}

export default Success;