import Link from 'next/link';

const Pricing = ({ withIcon, showBtn }) => (
  <section className="section pricing">

    <div className="heading-secondary heading-secondary--bold text-center">
      {withIcon && <i className="ion-thumbsup hidden-xs" />}
      <h2>
        Affordable Pricing Options
      </h2>
    </div>

    <div className="custom-row">

      <div className="custom-col">
        <div className="pricing-card text-center">
          <h4>3 Months</h4>
          <span>$19</span>
          <p>Billed every 3 months</p>
          <p>$6.33 per month</p>
        </div>
      </div>

      <div className="custom-col">
        <div className="pricing-card text-center">
          <h4>Annually</h4>
          <span>$49 <b>(save 55%)</b></span>
          <p>Only $4.08 per month</p>
        </div>
      </div>

    </div>

    <div className="pricing-list">
      <ul>
        <li>
          <i className="ion-checkmark-round"/>
          Domestic and International deals
        </li>
        <li>
          <i className="ion-checkmark-round"/>
          Filter by preferred fly dates
        </li>
        <li>
          <i className="ion-checkmark-round"/>
          30 day money back guarantee
        </li>
        <li>
          <i className="ion-checkmark-round"/>
          Choose your favorite destinations
        </li>
        <li>
          <i className="ion-checkmark-round"/>
          Find out about deals FIRST
        </li>
        <li>
          <i className="ion-checkmark-round"/>
          Auto-renewal - cancel anytime
        </li>
        <li>
          <i className="ion-checkmark-round"/>
          Monthly Flight Giveaways
        </li>
        <li>
          <i className="ion-checkmark-round"/>
          Business and First Class deal alerts
        </li>
      </ul>
    </div>

    {showBtn && (
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
    )}

  </section>
);

export default Pricing;