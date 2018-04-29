import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';
import { StripeProvider } from 'react-stripe-elements-universal';
import keys from '../config/keys';
import Checkout from '../components/SubscriptionCheckout';

const Subscription = () => (
  <Layout title="Upgrade to our Premium Membership">

    <section className="subscription">

      <div className="heading-primary text-center">
        <h1>
          Upgrade to our Premium Membership
        </h1>
      </div>

      <StripeProvider apiKey={keys.stripeKey}>
        <Checkout />
      </StripeProvider>

    </section>
  </Layout>
);

Subscription.getInitialProps = function(ctx) {
  initialize(ctx);
};

export default withRedux(initStore)(Subscription);