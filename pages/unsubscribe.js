import withRedux from 'next-redux-wrapper';
import {initStore} from '../redux';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';
import axios from 'axios';
import {API} from '../config';
import Link from 'next/link';

const Unsubscribe = ({persistenceToken, status}) => {

    if (persistenceToken) {

        return (
            <Layout title="Cheap Flight Alerts | Unsubscribe">
                <section className="section section--top unsubscribe-form text-center">
                    <div className="container">

                        <div className="heading-primary">
                            <h1>
                                Unsubscribe
                            </h1>
                        </div>

                        <div className="large-sm">
                            {status ? (
                                <span>You have unsubscribed successfully.
                                    You won't cheap flight alerts fom now on 😞
                                    <br/>
                                    <br/>
                                    👋 Missing us already? The feeling is mutual! <Link href="/">
                                        <a>
                                            Follow this link
                                        </a></Link> to subscribe again.
                                </span>
                            ) : (
                                <span>Either unsubscribe link is invalid or user doesn't exist in our database. Please, try again later with correct link.</span>
                            )}
                        </div>
                    </div>
                </section>
            </Layout>
        );

    } else {

        return (
            <Layout title="Cheap Flight Alerts | Unsubscribe">
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

Unsubscribe.getInitialProps = async function (ctx) {
    initialize(ctx);

    const {persistence_token} = ctx.query;

    if (persistence_token) {
        let status = false;
        try {
            const response = await axios.delete(`${API}/users/${persistence_token}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json; version=1'
                }
            });
            status = response.status === 200;
        } catch (error) {
            status = false;
        }

        return {persistenceToken: persistence_token, status};
    }
};

export default withRedux(initStore)(Unsubscribe);