import Link from 'next/link';

const TopAirports = () => (
    <section className="section home-hiw">
        <div className="container">

            <div className="heading-secondary heading-secondary--bold text-center">
                <span className="heading-decor">Top Airports</span>
                <h2>
                    Deals By Airports
                </h2>
                <p className="text-muted">Find the cheap flights departing from your favorite airports.</p>
            </div>

            <div className="airports-wrapper">
                <ul className="airports-list">
                    <li><Link href="/deals/atl"><a>Deals from Hartsfield–Jackson Atlanta International Airport</a></Link></li>
                    <li><Link href="/deals/sfo"><a>Deals from San Francisco International Airport</a></Link></li>
                    <li><Link href="/deals/ord"><a>Deals from O'Hare International Airport</a></Link></li>
                    <li><Link href="/deals/den"><a>Deals from Denver International Airport</a></Link></li>
                    <li><Link href="/deals/jfk"><a>Deals from John F. Kennedy International Airport</a></Link></li>
                    <li><Link href="/deals/lax"><a>Deals from Los Angeles International Airport</a></Link></li>
                    <li><Link href="/deals/dwf"><a>Deals from Dallas/Fort Worth International Airport</a></Link></li>
                    <li><Link href="/deals/las"><a>Deals from McCarran International Airport</a></Link></li>
                    <li><Link href="/deals/mco"><a>Deals from Orlando International Airport</a></Link></li>
                    <li><Link href="/deals/sea"><a>Deals from Seattle–Tacoma International Airport</a></Link></li>
                    <li><Link href="/deals/clt"><a>Deals from Charlotte Douglas International Airport</a></Link></li>
                    <li><Link href="/deals/ewr"><a>Deals from Newark Liberty International Airport</a></Link></li>
                    <li><Link href="/deals/phx"><a>Deals from Phoenix Sky Harbor International Airport</a></Link></li>
                    <li><Link href="/deals/mia"><a>Deals from Miami International Airport</a></Link></li>
                    <li><Link href="/deals/iah"><a>Deals from George Bush Intercontinental Airport</a></Link></li>
                    <li><Link href="/deals/bos"><a>Deals from Logan International Airport</a></Link></li>
                    <li><Link href="/deals/msp"><a>Deals from Minneapolis–Saint Paul International Airport</a></Link></li>
                    <li><Link href="/deals/dtw"><a>Deals from Detroit Metropolitan Airport</a></Link></li>
                    <li><Link href="/deals/fll"><a>Deals from Fort Lauderdale–Hollywood International Airport</a></Link></li>
                    <li><Link href="/deals/phl"><a>Deals from Philadelphia International Airport</a></Link></li>
                    <li><Link href="/deals/lga"><a>Deals from LaGuardia Airport</a></Link></li>
                    <li><Link href="/deals/bwi"><a>Deals from Baltimore–Washington International Airport</a></Link></li>
                    <li><Link href="/deals/slc"><a>Deals from Salt Lake City International Airport</a></Link></li>
                    <li><Link href="/deals/dca"><a>Deals from Ronald Reagan Washington National Airport</a></Link></li>
                    <li><Link href="/deals/iad"><a>Deals from Washington Dulles International Airport</a></Link></li>
                    <li><Link href="/deals/san"><a>Deals from San Diego International Airport</a></Link></li>
                    <li><Link href="/deals/mdw"><a>Deals from Midway International Airport</a></Link></li>
                    <li><Link href="/deals/tpa"><a>Deals from Tampa International Airport</a></Link></li>
                    <li><Link href="/deals/hnl"><a>Deals from Daniel K. Inouye International Airport</a></Link></li>
                    <li><Link href="/deals/pdx"><a>Deals from Portland International Airport</a></Link></li>


                    <li><Link href="/deals/lhr"><a>Deals from Heathrow Airport</a></Link></li>
                    <li><Link href="/deals/cdg"><a>Deals from Charles de Gaulle Airport</a></Link></li>
                    <li><Link href="/deals/yvr"><a>Deals from Vancouver International Airport</a></Link></li>
                    <li><Link href="/deals/hkg"><a>Deals from Hong Kong International Airport</a></Link></li>
                    <li><Link href="/deals/sin"><a>Deals from Singapore Changi Airport</a></Link></li>
                    <li><Link href="/deals/dxb"><a>Deals from Dubai International Airport</a></Link></li>
                    <li><Link href="/deals/hnd"><a>Deals from Haneda Airport</a></Link></li>
                    <li><Link href="/deals/ist"><a>Deals from Istanbul Atatürk Airport</a></Link></li>
                    <li><Link href="/deals/fra"><a>Deals from Frankfurt Airport</a></Link></li>
                    <li><Link href="/deals/zrh"><a>Deals from Zurich Airport</a></Link></li>
                    <li><Link href="/deals/ich"><a>Deals from Incheon International Airport</a></Link></li>
                    <li><Link href="/deals/ams"><a>Deals from Amsterdam Airport Schiphol</a></Link></li>
                    <li><Link href="/deals/pek"><a>Deals from Beijing Capital International Airport</a></Link></li>
                    <li><Link href="/deals/muc"><a>Deals from Munich Airport</a></Link></li>
                    <li><Link href="/deals/doh"><a>Deals from Hamad International Airport</a></Link></li>
                    <li><Link href="/deals/pvg"><a>Deals from Shanghai Pudong International Airport</a></Link></li>
                    <li><Link href="/deals/kul"><a>Deals from Kuala Lumpur International Airport</a></Link></li>
                </ul>
            </div>
        </div>
    </section>
);

export default TopAirports;