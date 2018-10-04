import withRedux from 'next-redux-wrapper';
import {initStore} from '../redux';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';
import NewPasswordForm from '../components/NewPasswordForm';

const NewPassword = ({perishableToken}) => {

    if (perishableToken) {

        return (
            <Layout title="Cheap Flight Alerts | New password">
                <section className="section section--top">
                    <div className="container">

                        <NewPasswordForm
                            perishableToken={perishableToken}
                        />

                    </div>
                </section>
            </Layout>
        );

    } else {

        return (
            <Layout title="New password">
                <section className="section section--top">

                    <div className="container">

                        <div className="heading-non-auth text-center">
                            <h3>You are not authorized to view this content.</h3>
                        </div>

                    </div>

                </section>
            </Layout>
        );

    }

};

NewPassword.getInitialProps = function (ctx) {
    initialize(ctx);

    const {perishable_token} = ctx.query;

    if (perishable_token) {
        return {perishableToken: perishable_token};
    }
};

export default withRedux(initStore)(NewPassword);