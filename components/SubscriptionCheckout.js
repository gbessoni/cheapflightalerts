import {Elements} from 'react-stripe-elements-universal';
import InjectedCheckoutForm from './CheckoutForm';

const SubscriptionCheckout = ({plan1, plan2}) => (
    <Elements>
        <InjectedCheckoutForm plan1={plan1} plan2={plan2}/>
    </Elements>
);

export default SubscriptionCheckout;