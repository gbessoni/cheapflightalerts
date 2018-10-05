import withRedux from 'next-redux-wrapper';
import axios from 'axios';
import {API} from '../config';
import initialize from '../utils/initialize';
import {initStore} from '../redux';
import Layout from '../components/Layout';
import PreferencesForm from '../components/PreferencesForm';

const Preferences = ({premiumUser, premiumToken, basicUser, persistenceToken}) => {
    if (premiumToken || persistenceToken) {

        return (
            <Layout title="Cheap Flight Alerts | Preferences" userEmail={premiumUser && premiumUser.email}>
                <section className="section section--top preferences">
                    <div className="container">

                        <div className="heading-primary text-center">
                            <h1>
                                Preferences
                            </h1>
                        </div>

                        <PreferencesForm
                            isPremium={premiumUser && Object.keys(premiumUser).length > 0 ? true : false}
                            premiumUser={premiumUser}
                            premiumToken={premiumToken}
                            basicUser={basicUser}
                            persistenceToken={persistenceToken}
                        />

                    </div>
                </section>

            </Layout>
        );

    } else {

        return (
            <Layout title="Preferences">
                <div className="section section--top">
                    <div className="container">

                        <div className="heading-non-auth text-center">
                            <h3>You are not authorized to view this content.</h3>
                        </div>

                    </div>
                </div>
            </Layout>
        );

    }
};

Preferences.getInitialProps = async (ctx) => {

    initialize(ctx);

    // if premium user with token from cookie

    const token = ctx.store.getState().authentication.token;

    if (token) {

        try {

            const response = await axios.get(`${API}/premium/profile`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json; version=1',
                    'Access-Token': token
                }
            });

            const user = response.data.user;

            return {
                premiumUser: user,
                premiumToken: token
            };

        } catch (error) {

            return {
                error: 'Your session has expired. Please logout and login again.'
            }

        }

    }

    // if basic user with token from url

    const {persistence_token} = ctx.query;

    if (persistence_token) {

        const response = await axios.get(`${API}/basic/preferences/${persistence_token}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json; version=1'
            }
        });

        const user = response.data;

        return {
            basicUser: user,
            persistenceToken: persistence_token
        };

    }

};

export default withRedux(initStore)(Preferences);