import {Component} from 'react';

class Error extends Component {

    // componentDidMount() {
    //   setTimeout(() => {
    //     document.querySelector('.alert').remove();
    //   }, 3000);
    // }

    // componentWillUnmount() {
    //   document.querySelector('.alert').remove();
    // }

    render() {
        return (
            <div className="alert alert-danger alert-dismissible">

                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>

                <strong>Error!</strong> {this.props.error}

            </div>
        );
    }

}

export default Error;