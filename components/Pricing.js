import Link from 'next/link';

const Pricing = ({showBtn}) => (
    <section className="section pricing">
        <div className="container">

            <div className="heading-secondary heading-secondary--bold text-center">
                <span className="heading-decor">OUR PLANS</span>
                <h2>
                    Affordable Pricing Options
                </h2>
            </div>

            <div className="custom-row">

                <div className="custom-col">
                    <div className="pricing-card text-center">
                        <h4>3 Months</h4>
                        <span>$19</span>
                        <p>
                            Billed every 3 months
                            <br/>
                            $6.33 per month
                        </p>
                    </div>
                </div>

                <div className="custom-col">
                    <div className="pricing-card pricing-card--active text-center">
                        <img src={'/static/img/ico-check-bgr.svg'} alt="Checkmark" />
                        <h4>Annually</h4>
                        <span>$49 <b>(save 55%)</b></span>
                        <p>Only $4.08 per month</p>
                    </div>
                </div>

            </div>

            <div className="pricing-list">
                <ul>
                    <li>
                        <img src={'/static/img/check.svg'} alt="Check" width={28} height={28} />
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
                        <a className="btn btn-primary btn-primary--big">
                            Try premium membership
                        </a>
                    </Link>
                </div>
            )}

        </div>
    </section>
);

export default Pricing;