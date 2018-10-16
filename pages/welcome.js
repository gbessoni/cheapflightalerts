import withRedux from 'next-redux-wrapper';
import {initStore} from '../redux';
import initialize from '../utils/initialize';
import axios from 'axios';
import {API} from '../config';
import Link from 'next/link';
import Layout from '../components/Layout';
import AirportForm from '../components/AirportForm';
import Pricing from '../components/Pricing';

const Welcome = ({airport, persistenceToken}) => {

    if (persistenceToken) {
        return (

            <Layout title="Cheap Flight Alerts | Welcome">

                {/* Welcome */}

                <section className="section section--top welcome-welcome">
                    <div className="container">

                        <div className="heading-primary text-center">
                            <h1>
                                Thank you for joining
                                <span>CheapFlightAlerts.net</span>
                            </h1>
                        </div>

                        <p>
                            First, please check your email to confirm you want to receive cheap flight alerts to the
                            address provided.
                            <br/>
                            <br/>
                            If you can’t see it in your inbox, please check your junk folder as sometimes we get lost along the way.
                            <br/>
                            <br/>
                            If you’re still having issues finding the confirmation email after a few minutes, then email us at <a href="mailto:confirm_email@cheapflightalerts.net" className="link">confirm_email@cheapflightalerts.net</a> and we’ll get it sorted 🙂
                            <br/>
                            <br/>
                            Note: If the confirmation email is showing up blank, just hit reply and let us know. We’ll confirm you manually from our end.
                            <br/>
                            <br/>
                            Second, <b>IMPORTANT</b>: Please enter in your preferred departure airport (we cannot
                            deliver cheap flight deals until you've entered in your local airport).
                        </p>

                        {/* Airport Form */}

                        <AirportForm
                            airport={airport}
                            persistenceToken={persistenceToken}
                        />

                        <p>
                            Our free subscription allows you to select one departure airport
                            <br/>
                            <br/>
                            But wait... If you want to receive <b>ALL our exclusive deals</b> from your favorite
                            airports (only 1 airport allowed with free membership), add destinations and desired travel
                            dates, plus get domestic flight deals. <b>Upgrade</b> for one year and receive <b>50%
                            off</b> our normal price!
                        </p>

                    </div>
                </section>

                {/* Promo */}

                <section className="section welcome-promo">
                    <div className="container">

                        <div className="heading-secondary heading-secondary--bold text-center">
                            <h2>
                                Free members miss out on 75% of flight deals
                                <span>(Domestic + International Flight Deals Included)</span>
                            </h2>
                        </div>

                        <div className="heading-tertiary text-center">
                            <h3>
                                <span className="plus">+</span>
                                Filter by "When to fly dates"
                            </h3>
                            <h3>
                                <span className="plus">+</span>
                                Filter by "Favorite destinations"
                            </h3>
                        </div>

                        <div className="text-center">
                            <Link href="/subscription">
                                <a className="btn btn-primary btn-primary--big">
                                    Try premium membership
                                </a>
                            </Link>
                            <p className="text-under-btn">
                                If you're already a premium member
                                <Link href="/login"><a className="link">Login</a></Link>
                            </p>
                        </div>

                    </div>
                </section>

                {/* Pricing */}

                <Pricing withIcon={false} showBtn={true}/>

            </Layout>
        );

    } else {

        return (
            <Layout title="Welcome">
                <div className="container">

                    <div className="heading-non-auth text-center">
                        <h3>You are not authorized to view this content.</h3>
                    </div>

                </div>
            </Layout>
        );

    }

};

Welcome.getInitialProps = async function (ctx) {
    initialize(ctx);

    const {persistence_token} = ctx.query;

    if (persistence_token) {

        const response = await axios.get(`${API}/basic/preferences/${persistence_token}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json; version=1'
            }
        });

        const airport = response.data.preference.departure_airport;

        return {
            airport,
            persistenceToken: persistence_token
        };

    }

};

export default withRedux(initStore)(Welcome);