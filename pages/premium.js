import withRedux from 'next-redux-wrapper';
import Link from 'next/link';
import {initStore} from '../redux';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';
import Pricing from '../components/Pricing';

const Premium = () => (
    <Layout title="Cheap Flight Alerts | Premium">

        {/* Welcome */}

        <section className="premium-welcome">
            <div className="container">

                <div className="heading-primary heading-primary--premium text-center">
                    <h1>
                        Upgrade to <b>Premium</b> <span>to receive all the deals</span>
                    </h1>
                </div>

                <div className="heading-secondary heading-secondary--extra-bold text-center">
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

            </div>
        </section>

        {/* Pricing */}

        <Pricing withIcon={true} showBtn={true} isPremium={true} />

        {/* Comparison */}

        <section className="section premium-comparison">
            <div className="container">

                <div className="heading-secondary heading-secondary--bold text-center">
                    <h2>
                        <span className="heading-decor">YOU SHOULD SEE IT</span>
                        Compare to the Competition
                    </h2>
                </div>

                <div className="table-responsive">
                    <div className='custom-table'>

                        <div className="column">
                            <div className='th'>Premium Membership Features</div>
                            <div className='td'>Add Destinations vs Take me Anywhere</div>
                            <div className='td'>Add "When to Fly Dates" Filter</div>
                            <div className='td'>Choose your departure city/airports</div>
                            <div className='td'>Business and First Class deal alerts</div>
                            <div className='td'>Get alerts first before free members</div>
                            <div className='td'>Free Cancellations, Anytime</div>
                            <div className='td'>30 day money back guarantee</div>
                            <div className='td'>Monthly Flight giveaway</div>
                            <div className='td'>Domestic Flight Deals</div>
                        </div>
                        <div className="column">
                            <div className='th'>Cheap Flight Alerts</div>
                            <div className='td'><img src={'/static/img/check.svg'} alt="Check" width={28} height={28} /></div>
                            <div className='td'><img src={'/static/img/check.svg'} alt="Check" width={28} height={28} /></div>
                            <div className='td'><img src={'/static/img/check.svg'} alt="Check" width={28} height={28} /></div>
                            <div className='td'><img src={'/static/img/check.svg'} alt="Check" width={28} height={28} /></div>
                            <div className='td'><img src={'/static/img/check.svg'} alt="Check" width={28} height={28} /></div>
                            <div className='td'><img src={'/static/img/check.svg'} alt="Check" width={28} height={28} /></div>
                            <div className='td'><img src={'/static/img/check.svg'} alt="Check" width={28} height={28} /></div>
                            <div className='td'><img src={'/static/img/check.svg'} alt="Check" width={28} height={28} /></div>
                            <div className='td'><img src={'/static/img/check.svg'} alt="Check" width={28} height={28} /></div>
                        </div>
                        <div className="column">
                            <div className='th'>DollarFlightClub</div>
                            <div className='td'><img src={'/static/img/check.svg'} alt="Check" width={28} height={28} /></div>
                            <div className='td'><img src={'/static/img/check.svg'} alt="Check" width={28} height={28} /></div>
                            <div className='td'><img src={'/static/img/check.svg'} alt="Check" width={28} height={28} /></div>
                            <div className='td'><img src={'/static/img/check.svg'} alt="Check" width={28} height={28} /></div>
                            <div className='td'><img src={'/static/img/check.svg'} alt="Check" width={28} height={28} /></div>
                            <div className='td'><b>–</b></div>
                            <div className='td'><b>–</b></div>
                            <div className='td'><b>–</b></div>
                            <div className='td'><b>–</b></div>
                        </div>
                        <div className="column">
                            <div className='th'>Scott’s</div>
                            <div className='td'><img src={'/static/img/check.svg'} alt="Check" width={28} height={28} /></div>
                            <div className='td'><img src={'/static/img/check.svg'} alt="Check" width={28} height={28} /></div>
                            <div className='td'><img src={'/static/img/check.svg'} alt="Check" width={28} height={28} /></div>
                            <div className='td'><img src={'/static/img/check.svg'} alt="Check" width={28} height={28} /></div>
                            <div className='td'><b>–</b></div>
                            <div className='td'><b>–</b></div>
                            <div className='td'><b>–</b></div>
                            <div className='td'><b>–</b></div>
                            <div className='td'><b>–</b></div>
                        </div>

                    </div>
                </div>

            </div>
        </section>

        {/* More */}

        <section className="section premium-more">
            <div className="container">

                <div className="heading-secondary heading-secondary--bold text-center">
                    <h2>
                        <span className="heading-decor">OUR MAGIC</span>
                        What’s more!
                    </h2>
                </div>

                <div className="custom-row">

                    <div className="custom-col">
                        <div className="more-card">
                            <div className="text-center">
                                <img src={'/static/img/ico-team.svg'} alt="Team" width={140} height={140} />
                            </div>
                            <h4>Save time</h4>
                            <p>We search far and wide to bring you the best deals, and when we find it, your Inbox will know
                                about it.</p>
                        </div>
                    </div>

                    <div className="custom-col">
                        <div className="more-card">
                            <div className="text-center">
                                <img src={'/static/img/ico-news.svg'} alt="News" width={140} height={140} />
                            </div>
                            <h4>Have an idea of when and where you want to fly?</h4>
                            <p>Don’t worry, we allow you to filter by desired fly dates and destinations. We won’t flood
                                your inbox with deals to places you don’t want to go or during dates you can’t travel.</p>
                        </div>
                    </div>

                    <div className="custom-col">
                        <div className="more-card">
                            <div className="text-center">
                                <img src={'/static/img/ico-team.svg'} alt="Team" width={140} height={140} />
                            </div>
                            <h4>Win a free ticket every month</h4>
                            <p>We are giving away a free flight to one of our <span>Premium</span> members every month. Good
                                Luck!</p>
                        </div>
                    </div>

                    <div className="custom-col">
                        <div className="more-card">
                            <div className="text-center">
                                <img src={'/static/img/ico-news.svg'} alt="News" width={140} height={140} />
                            </div>
                            <h4>Pays for itself - Yes - Plus way more</h4>
                            <p>Buy one ticket, save on average $500 on international and $150 on Domestic and your
                                subscription pays for itself for 10 years!!!</p>
                        </div>
                    </div>

                </div>

                <div className="text-center">
                    <Link href="/subscription">
                        <a className="btn btn-primary btn-primary--big">
                            Try premium membership
                        </a>
                    </Link>
                </div>

            </div>
        </section>

    </Layout>
);

Premium.getInitialProps = function (ctx) {
    initialize(ctx);
};

export default withRedux(initStore)(Premium);