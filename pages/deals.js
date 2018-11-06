import withRedux from 'next-redux-wrapper';
import {initStore} from '../redux';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';
import TopAirports from '../components/TopAirports';
import axios from "axios";
import {API} from "../config";
import DealItem from "../components/DealItem";

const airports = require('../utils/airports');

const Deals = ({from_airport, flights, airportDetails}) => {

    if (!from_airport) {
        return (
            <Layout title="Cheap Flight Alerts | Top Cheap Flight Deals From Anywhere"
                    description="Best discounts, hidden offers and error fares for the flights departing from your favorite airports. Don't miss an incredible cheap flight deal to your dream destination. Join thousands of other members, saving an average of $489 per ticket booked!">

                <section className="section section--top">
                    <div className="container">

                        <div className="heading-primary heading-primary--premium text-center">
                            <h1>
                                Top Cheap Flight Deals From <b>Anywhere</b>
                            </h1>
                        </div>

                        {/*Top Deals*/}

                        <div className="custom-row">
                            {flights.map((flight, index) =>
                                <DealItem
                                    flightDetails={flight}
                                    isAirportDeal={true}
                                />
                            )}
                        </div>

                    </div>
                </section>


                {/*Top Airports*/}

                <TopAirports/>
            </Layout>
        );
    } else {
        return (
            <Layout title={'Cheap Flight Alerts | Top Cheap Flight Deals From ' + airportDetails.name}
                    description={'Best discounts, hidden offers and error fares for the flights departing from_airport ' + airportDetails.name + '. Don\'t miss an incredible cheap flight deal to your dream destination. Join thousands of other members, saving an average of $489 per ticket booked!'}>

                <section className="section section--top about">
                    <div className="container">

                        <div className="heading-primary heading-primary--premium text-center">
                            <h1>
                                Top Cheap Flight Deals From <b>{airportDetails.name} ({airportDetails.iata})</b>
                            </h1>
                        </div>

                        {/*Top Deals*/}

                        <div className="custom-row">
                            {flights.map((flight, index) =>
                                <DealItem
                                    flightDetails={flight}
                                    isAirportDeal={true}
                                />
                            )}
                        </div>

                    </div>
                </section>

                {/*Top Airports*/}
                <TopAirports/>
            </Layout>
        );
    }
};

Deals.getInitialProps = async function (ctx) {
    initialize(ctx);

    const from_airport = ctx.query.from_airport;
    console.log(ctx.query);
    let airportDetails = {};

    const response = await axios.get(`${API}/flights?from=${!from_airport ? '' : from_airport.toUpperCase()}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1'
        }
    });

    const flights = response.data.flights;

    if (from_airport) {
        const regex = new RegExp('^' + from_airport, 'i');
        airportDetails = airports.filter((x) => regex.test(x.iata))[0];
    }

    return {
        from_airport,
        flights,
        airportDetails
    };
};

export default withRedux(initStore)(Deals);