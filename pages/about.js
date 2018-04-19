import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';

const About = () => (
  <Layout title="About">

    <section className="section about">

      <div className="heading-primary text-center">
        <h1>
          About <b>Cheap Flight Alerts</b>
        </h1>
      </div>

      <div className="about__text">

        <p>
          The concept for Cheap Flight Alerts is simple.  Travelers have so many resources when it comes to searching for flights.  Plus there are many newsletters, twitter feeds, websites and blogs that offer visitors cheap flight deals.  We thought, what if we aggregated all these and provided our subscribers a more personalized flight deals feed, straight to their inbox, that provides all the necessary information to spot a great deal and book it.
        </p>

        <p>
          We pride ourselves on delivering you customized and relevant cheap flight deals, and since we source our deals from all across the globe from every website, newsletter or twitter feed out there, you can rest assured you're getting the latest and greatest flight deals out there.
        </p>

        <p>
          Thank you for checking out our website and we hope to see you join our free or premium newsletter so you can travel more for less!
        </p>

      </div>

    </section>
  </Layout>
);

About.getInitialProps = function(ctx) {
  initialize(ctx);
};

export default withRedux(initStore)(About);