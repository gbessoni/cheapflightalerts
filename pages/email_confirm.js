import withRedux from 'next-redux-wrapper';
import {initStore} from '../redux';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';
import EmailConfirmForm from '../components/EmailConfirmForm';

const EmailConfirm = ({persistenceToken}) => {

    if (persistenceToken) {

        return (
            <Layout title="Cheap Flight Alerts | Email confirmation">
                <section className="section section--top email-confirmation text-center">
                    <div className="container">

                        <div className="heading-primary">
                            <h1>
                                Email confirmation
                            </h1>
                        </div>

                        <div className="heading-tertiary">
                            <h3>
                                Hello! You are almost there. Please click on the button below to confirm you email.
                            </h3>
                        </div>

                        <EmailConfirmForm
                            persistenceToken={persistenceToken}
                        />

                    </div>
                </section>
            </Layout>
        );

    } else {

        return (
            <Layout title="Email confirmation">
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

EmailConfirm.getInitialProps = function (ctx) {
    initialize(ctx);

    const {persistence_token} = ctx.query;

    if (persistence_token) {
        return {persistenceToken: persistence_token};
    }
};

export default withRedux(initStore)(EmailConfirm);