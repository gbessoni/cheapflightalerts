import { Elements } from 'react-stripe-elements-universal';
import InjectedCheckoutForm from './CheckoutForm';

const SubscriptionCheckout = () => (
  <Elements>
    <InjectedCheckoutForm />
  </Elements>
);

export default SubscriptionCheckout;