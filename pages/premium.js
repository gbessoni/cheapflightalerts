import withRedux from 'next-redux-wrapper';
import Link from 'next/link';
import { initStore } from '../redux';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';
import Pricing from '../components/Pricing';

const Premium = () => (
  <Layout title="Premium">

    {/* Welcome */}

    <section className="premium-welcome">

      <div className="heading-primary heading-primary--premium text-center">
        <h1>
          Upgrade to <b>Premium</b> <span>to receive all the deals</span>
        </h1>
      </div>

    </section>

    <section className="section premium-promo">

      <div className="heading-secondary heading-secondary--bold text-center">
        <h2>
          Free members miss out on 75% of flight deals
        </h2>
      </div>

      <div className="heading-tertiary text-center">
        <h3>
          (Domestic + International Flight Deals Included)
        </h3>
      </div>

      <div className="heading-quaternary text-center">
        <h4>
          <i className="ion-plus-round" />
          Filter by "When to fly dates"
        </h4>
      </div>

      <div className="heading-quaternary text-center">
        <h4>
          <i className="ion-plus-round" />
          Filter by "Favorite destinations"
        </h4>
      </div>

    </section>

    {/* Pricing */}

    <Pricing withIcon={true} showBtn={true} />

    {/* Comparison */}

    <section className="section premium-comparison">

      <div className="heading-secondary heading-secondary--bold text-center">
        <h2>
          Compare to the Competition
        </h2>
      </div>

      <div className="panel panel-default">
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <tbody>
              <tr>
                <th>Premium Membership Features</th>
                <th><Link href="/"><a className="link">Cheap Flight Alerts</a></Link></th>
                <th>Scott’s</th>
                <th>DollarFlightClub</th>
              </tr>
              <tr>
                <td>Add Destinations vs Take me Anywhere</td>
                <td><i className="ion-checkmark-round"/></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Add "When to Fly Dates" Filter</td>
                <td><i className="ion-checkmark-round"/></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Choose your departure city/airports</td>
                <td><i className="ion-checkmark-round"/></td>
                <td><i className="ion-checkmark-round"/></td>
                <td><i className="ion-checkmark-round"/></td>
              </tr>
              <tr>
                <td>Business and First Class deal alerts</td>
                <td><i className="ion-checkmark-round"/></td>
                <td></td>
                <td><i className="ion-checkmark-round"/></td>
              </tr>
              <tr>
                <td>Get alerts first before free members</td>
                <td><i className="ion-checkmark-round"/></td>
                <td><i className="ion-checkmark-round"/></td>
                <td><i className="ion-checkmark-round"/></td>
              </tr>
              <tr>
                <td>Free Cancellations, Anytime</td>
                <td><i className="ion-checkmark-round"/></td>
                <td><i className="ion-checkmark-round"/></td>
                <td><i className="ion-checkmark-round"/></td>
              </tr>
              <tr>
                <td>30 day money back guarantee</td>
                <td><i className="ion-checkmark-round"/></td>
                <td><i className="ion-checkmark-round"/></td>
                <td><i className="ion-checkmark-round"/></td>
              </tr>
              <tr>
                <td>Monthly Flight giveaway</td>
                <td><i className="ion-checkmark-round"/></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td><b>Domestic Flight Deals</b></td>
                <td><i className="ion-checkmark-round"/></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </section>

    {/* More */}

    <section className="section premium-more">

      <div className="heading-secondary heading-secondary--bold text-center">
        <h2>
          What’s more!
        </h2>
      </div>

      <div className="custom-row">

        <div className="custom-col">
          <div className="more-card">
            <i className="ion-clock" />
            <h4>Save time</h4>
            <p>We search far and wide to bring you the best deals, and when we find it, your Inbox will know about it.</p>
          </div>
        </div>

        <div className="custom-col">
          <div className="more-card">
            <i className="ion-ios-lightbulb-outline" />
            <h4>Have an idea of when and where you want to fly?</h4>
            <p>Don’t worry, we allow you to filter by desired fly dates and destinations. We won’t flood your inbox with deals to places you don’t want to go or during dates you can’t travel.</p>
          </div>
        </div>

        <div className="custom-col">
          <div className="more-card">
            <i className="ion-happy-outline" />
            <h4>Win a free ticket every month</h4>
            <p>We are giving away a free flight to one of our <span>Premium</span> members every month.  Good Luck!</p>
          </div>
        </div>

        <div className="custom-col">
          <div className="more-card">
            <i className="ion-social-usd-outline" />
            <h4>Pays for itself - Yes - Plus way more</h4>
            <p>Buy one ticket, save on average $500 on international and $150 on Domestic and your subscription pays for itself for 10 years!!!</p>
          </div>
        </div>

      </div>

      <div className="text-center">
        <Link href="/subscription">
          <a className="btn btn-cta btn-lg">
            Try premium membership <span className="hidden-xs">($19 - 3 months)</span>
          </a>
        </Link>
        <p className="text-under-btn">
          If you're already a premium member
          <Link href="/login"><a className="link">Login</a></Link>
        </p>
      </div>

    </section>

  </Layout>
);

Premium.getInitialProps = function(ctx) {
  initialize(ctx);
};

export default withRedux(initStore)(Premium);