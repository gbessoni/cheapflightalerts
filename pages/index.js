import withRedux from 'next-redux-wrapper';
import {initStore} from '../redux';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';
import SubscribeForm from '../components/SubscribeForm';
import DealItem from '../components/DealItem';
import HowItWorksItem from '../components/HowItWorksItem';
import SubscribeModal from '../components/SubscribeModal';
import {getDateBeforeCurrent} from '../utils/date';

const Index = () => (
    <Layout title="Cheap Flight Alerts.net: Cheap airfare deals straight to your Inbox">

        {/* Welcome */}

        <section className="home-welcome">
            <div className="container">

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

            </div>
        </section>

        {/* Deals */}

        <section className="section home-deals">
            <div className="container">

                <div className="heading-secondary heading-secondary--bold text-center">
                    <h2>
                        <span className="heading-decor">HOT DEALS</span>
                        Check out these Past Deal Alerts
                    </h2>
                </div>

                <div className="custom-row">

                    <DealItem
                        image={'/static/img/deal-item-1.jpg'}
                        date={getDateBeforeCurrent(3)}
                        title1="SFO to Bali"
                        title2="Normal roundtrip"
                        price1="$364"
                        price2="$1000"
                        comments={3}
                    />
                    <DealItem
                        image={'/static/img/deal-item-2.jpg'}
                        date={getDateBeforeCurrent(4)}
                        title1="Atlanta to Lima"
                        title2="Normal roundtrip"
                        price1="$165"
                        price2="$800"
                        comments={11}
                    />
                    <DealItem
                        image={'/static/img/deal-item-3.jpg'}
                        date={getDateBeforeCurrent(5)}
                        title1="NYC to Paris"
                        title2="Normal roundtrip"
                        price1="$260"
                        price2="$900"
                        comments={4}
                    />

                    <DealItem
                        image={'/static/img/deal-item-3.jpg'}
                        date={getDateBeforeCurrent(5)}
                        title1="NYC to Paris"
                        title2="Normal roundtrip"
                        price1="$260"
                        price2="$900"
                        comments={4}
                    />

                    <DealItem
                        image={'/static/img/deal-item-3.jpg'}
                        date={getDateBeforeCurrent(5)}
                        title1="NYC to Paris"
                        title2="Normal roundtrip"
                        price1="$260"
                        price2="$900"
                        comments={4}
                    />

                </div>

            </div>
        </section>

        {/* How It Works */}

        <section className="section home-hiw">
            <div className="container">

                <div className="heading-secondary heading-secondary--bold text-center">
                    <span className="heading-decor">OUR MAGIC</span>
                    <h2>
                        How it works
                    </h2>
                </div>

                <div className="custom-row">

                    <HowItWorksItem
                        imgSrc={'/static/img/ico-team.svg'}
                        imgAlt="Team"
                        title="Our team searches for deals"
                        text="Our team across the globe search for deals day and night"
                    />

                    <HowItWorksItem
                        imgSrc={'/static/img/ico-news.svg'}
                        imgAlt="News"
                        title="We compare newsletters and websites"
                        text="When an airline makes a Mistake or puts on a huge sale, our Team Emails you the deal’s link and instructions"
                    />

                    <HowItWorksItem
                        imgSrc={'/static/img/ico-go-holiday.svg'}
                        imgAlt="Smile"
                        title="Go on Holiday"
                        text="Book your flight and save hundreds of dollars. it's that simple using Cheap Flight Alerts"
                    />

                </div>

            </div>
        </section>

        {/* Testimonials */}

        <section className="section home-testimonials">
            <div className="container">

                <div className="heading-secondary heading-secondary--bold text-center">
                    <span className="heading-decor">PEOPLE SAY</span>
                    <h2>
                        Testimonials
                    </h2>
                </div>

                <div className="custom-row">

                    <div className="testimonial-item">
                        <div className="testimonial-item__card">

                            <div className="testimonial-item__img">
                                <img src="/static/img/user-3.jpg" alt="Jonathan F."/>
                            </div>


                            <div className="testimonial-item__content">

                                <img src="/static/img/quotes.svg" alt="quote" className="testimonial-item__quotes"/>

                                <div className="testimonial-item__author-img">
                                    <img src="/static/img/user.png" alt="Jackie L."/>
                                </div>

                                <div className="testimonial-item__header">
                                    <p>
                                        Jonathan F, April 2018
                                        <span>
                                        saved
                                        <b> $1,500</b> on flights
                                        </span>
                                    </p>
                                </div>


                                <div className="testimonial-item__text">
                                    - How could I not book this Business class flight to Barcelona for $542 roundtrip?? Saved me
                                    over $1,500 on airfare! Absolutely an amazing deal, I did it, and I'm super excited. Your
                                    premium newsletter awesome
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="testimonial-item">
                        <div className="testimonial-item__card">

                            <div className="testimonial-item__img">
                                <img src="/static/img/user-3.jpg" alt="Jonathan F."/>
                            </div>


                            <div className="testimonial-item__content">

                                <img src="/static/img/quotes.svg" alt="quote" className="testimonial-item__quotes"/>

                                <div className="testimonial-item__author-img">
                                    <img src="/static/img/user.png" alt="Jackie L."/>
                                </div>

                                <div className="testimonial-item__header">
                                    <p>
                                        Jonathan F, April 2018
                                        <span>
                                        saved
                                        <b> $1,500</b> on flights
                                        </span>
                                    </p>
                                </div>


                                <div className="testimonial-item__text">
                                    - How could I not book this Business class flight to Barcelona for $542 roundtrip?? Saved me
                                    over $1,500 on airfare! Absolutely an amazing deal, I did it, and I'm super excited. Your
                                    premium newsletter awesome
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="testimonial-item">
                        <div className="testimonial-item__card">

                            <div className="testimonial-item__img">
                                <img src="/static/img/user-3.jpg" alt="Jonathan F."/>
                            </div>


                            <div className="testimonial-item__content">

                                <img src="/static/img/quotes.svg" alt="quote" className="testimonial-item__quotes"/>

                                <div className="testimonial-item__author-img">
                                    <img src="/static/img/user.png" alt="Jackie L."/>
                                </div>

                                <div className="testimonial-item__header">
                                    <p>
                                        Jonathan F, April 2018
                                        <span>
                                        saved
                                        <b> $1,500</b> on flights
                                        </span>
                                    </p>
                                </div>


                                <div className="testimonial-item__text">
                                    - How could I not book this Business class flight to Barcelona for $542 roundtrip?? Saved me
                                    over $1,500 on airfare! Absolutely an amazing deal, I did it, and I'm super excited. Your
                                    premium newsletter awesome
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>

        {/* About */}

        <section className="section home-about">
            <div className="container">

                <div className="heading-secondary heading-secondary--bold text-center">
                    <h2>
                        <span className="heading-decor">INFO</span>
                        About us
                    </h2>
                </div>


                <div className="row">
                    <div className="col-sm-4">

                        <img src="/static/img/user-3.jpg" alt="Jonathan F."/>

                    </div>
                    <div className="col-sm-8">
                        <div className="home-about__text">
                            <p>
                                Cheap Flight Alerts is your only source for cheap flight deals, because we source our deals from all the
                                greatest websites, blogs, newsletters and twitter feeds, to deliver the latest and lowest airfares, both
                                Domestic and International. And since our service allows you to customize when and where you want to
                                fly, you receive relevant deals 100% of the time. Try us out today!
                            </p>
                        </div>
                        <div className="home-about__questions">
                            <h4>
                                Still have Questions?
                            </h4>
                            <p>
                                Check out our <b>FAQs</b> and <b>Help section</b>
                                <br/>
                                <a href="http://cheapflights.helpsite.io/" className="btn btn-primary">Help section</a>
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>

        {/*<SubscribeModal/>*/}

    </Layout>
);

Index.getInitialProps = function (ctx) {
    initialize(ctx);
};

export default withRedux(initStore)(Index);