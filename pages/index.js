import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';
import SubscribeForm from '../components/SubscribeForm';
import DealItem from '../components/DealItem';
import HowItWorksItem from '../components/HowItWorksItem';
import SubscribeModal from '../components/SubscribeModal';

const Index = () => (
  <Layout title="Home">

    {/* Welcome */}

    <section className="section home-welcome">

      <div className="heading-primary text-center">
        <h1>
          Enjoy exclusive cheap flight alerts <br/>
          right to your inbox
        </h1>
      </div>

      <div className="heading-secondary text-center">
        <h2>
          Saving our Members on average <b>$489</b> per ticket
        </h2>
      </div>

      {/* Subscribe Form */}

      <SubscribeForm
        btnText="Send me cheap flight deals"
      />

    </section>

    {/* Deals */}

    <section className="section home-deals">

      <div className="heading-secondary heading-secondary--bold text-center">
        <i className="ion-fireball" />
        <h2>
          Check out these Past Deal Alerts
        </h2>
      </div>

      <div className="custom-row">

        <DealItem
          image={'/static/img/deal-item-1.jpg'}
          date={'March 22, 2018'}
          title1="SFO to Bali"
          title2="Normal roundtrip"
          price1="$364"
          price2="$1000"
          comments={3}
        />
        <DealItem
          image={'/static/img/deal-item-2.jpg'}
          date={'March 15, 2018'}
          title1="Atlanta to Lima"
          title2="Normal roundtrip"
          price1="$165"
          price2="$800"
          comments={11}
        />
        <DealItem
          image={'/static/img/deal-item-3.jpg'}
          date={'March 8, 2018'}
          title1="NYC to Paris"
          title2="Normal roundtrip"
          price1="$260"
          price2="$900"
          comments={4}
        />

      </div>

    </section>

    {/* How It Works */}

    <section className="section home-hiw">

      <div className="heading-secondary heading-secondary--bold text-center">
        <i className="ion-briefcase"/>
        <h2>
          How it works
        </h2>
      </div>

      <div className="custom-row">

        <HowItWorksItem
          iconClass="ion-ios-people"
          title="Our team searches for deals"
          text="Our team across the globe search for deals day and night"
        />

        <HowItWorksItem
          iconClass="ion-cash"
          title="We compare dozens of newsletters and websites"
          text="When an airline makes a Mistake or puts on a huge sale, our Team Emails you the deal’s link and instructions"
        />

        <HowItWorksItem
          iconClass="ion-happy-outline"
          title="Go on Holiday"
          text="Book your flight and save hundreds of dollars. it's that simple using Cheap Flight Alerts"
        />

      </div>

    </section>

    {/* <SubscribeModal /> */}

    <SubscribeModal />

  </Layout>
);

Index.getInitialProps = function(ctx) {
  initialize(ctx);
};

export default withRedux(initStore)(Index);