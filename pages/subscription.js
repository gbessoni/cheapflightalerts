import withRedux from 'next-redux-wrapper';
import axios from 'axios';
import {API} from '../config';
import {initStore} from '../redux';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';
import {StripeProvider} from 'react-stripe-elements-universal';
import keys from '../config/keys';
import Checkout from '../components/SubscriptionCheckout';

const Subscription = ({plan1, plan2}) => (
    <Layout title="Cheap Flight Alerts | Upgrade to our Premium Membership">
        <section className="section subscription">
            <div className="container">

                <div className="heading-primary text-center">
                    <h1>
                        Upgrade to our Premium Membership
                    </h1>
                </div>

                <StripeProvider apiKey={keys.stripeKey}>
                    <Checkout plan1={plan1} plan2={plan2}/>
                </StripeProvider>

            </div>
        </section>
    </Layout>
);

Subscription.getInitialProps = async (ctx) => {

    initialize(ctx);

    try {

        const response = await axios.get(`${API}/payment_plans`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json; version=1'
            }
        });

        return {
            plan1: response.data[1],
            plan2: response.data[0]
        };

    } catch (error) {
        return error;
    }

};

export default withRedux(initStore)(Subscription);