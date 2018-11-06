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
                    <li><Link as="/deals/atl" href="/deals?from_airport=atl"><a>Deals from Hartsfield–Jackson Atlanta International Airport</a></Link></li>
                    <li><Link as="/deals/sfo" href="/deals?from_airport=sfo"><a>Deals from San Francisco International Airport</a></Link></li>
                    <li><Link as="/deals/ord" href="/deals?from_airport=ord"><a>Deals from O'Hare International Airport</a></Link></li>
                    <li><Link as="/deals/den" href="/deals?from_airport=den"><a>Deals from Denver International Airport</a></Link></li>
                    <li><Link as="/deals/jfk" href="/deals?from_airport=jfk"><a>Deals from John F. Kennedy International Airport</a></Link></li>
                    <li><Link as="/deals/lax" href="/deals?from_airport=lax"><a>Deals from Los Angeles International Airport</a></Link></li>
                    <li><Link as="/deals/dfw" href="/deals?from_airport=dfw"><a>Deals from Dallas/Fort Worth International Airport</a></Link></li>
                    <li><Link as="/deals/las" href="/deals?from_airport=las"><a>Deals from McCarran International Airport</a></Link></li>
                    <li><Link as="/deals/mco" href="/deals?from_airport=mco"><a>Deals from Orlando International Airport</a></Link></li>
                    <li><Link as="/deals/sea" href="/deals?from_airport=sea"><a>Deals from Seattle–Tacoma International Airport</a></Link></li>
                    <li><Link as="/deals/clt" href="/deals?from_airport=clt"><a>Deals from Charlotte Douglas International Airport</a></Link></li>
                    <li><Link as="/deals/ewr" href="/deals?from_airport=ewr"><a>Deals from Newark Liberty International Airport</a></Link></li>
                    <li><Link as="/deals/phx" href="/deals?from_airport=phx"><a>Deals from Phoenix Sky Harbor International Airport</a></Link></li>
                    <li><Link as="/deals/mia" href="/deals?from_airport=mia"><a>Deals from Miami International Airport</a></Link></li>
                    <li><Link as="/deals/iah" href="/deals?from_airport=iah"><a>Deals from George Bush Intercontinental Airport</a></Link></li>
                    <li><Link as="/deals/bos" href="/deals?from_airport=bos"><a>Deals from Logan International Airport</a></Link></li>
                    <li><Link as="/deals/msp" href="/deals?from_airport=msp"><a>Deals from Minneapolis–Saint Paul International Airport</a></Link></li>
                    <li><Link as="/deals/dtw" href="/deals?from_airport=dtw"><a>Deals from Detroit Metropolitan Airport</a></Link></li>
                    <li><Link as="/deals/fll" href="/deals?from_airport=fll"><a>Deals from Fort Lauderdale–Hollywood International Airport</a></Link></li>
                    <li><Link as="/deals/phl" href="/deals?from_airport=phl"><a>Deals from Philadelphia International Airport</a></Link></li>
                    <li><Link as="/deals/lga" href="/deals?from_airport=lga"><a>Deals from LaGuardia Airport</a></Link></li>
                    <li><Link as="/deals/bwi" href="/deals?from_airport=bwi"><a>Deals from Baltimore–Washington International Airport</a></Link></li>
                    <li><Link as="/deals/slc" href="/deals?from_airport=slc"><a>Deals from Salt Lake City International Airport</a></Link></li>
                    <li><Link as="/deals/dca" href="/deals?from_airport=dca"><a>Deals from Ronald Reagan Washington National Airport</a></Link></li>
                    <li><Link as="/deals/iad" href="/deals?from_airport=iad"><a>Deals from Washington Dulles International Airport</a></Link></li>
                    <li><Link as="/deals/san" href="/deals?from_airport=san"><a>Deals from San Diego International Airport</a></Link></li>
                    <li><Link as="/deals/mdw" href="/deals?from_airport=mdw"><a>Deals from Midway International Airport</a></Link></li>
                    <li><Link as="/deals/tpa" href="/deals?from_airport=tpa"><a>Deals from Tampa International Airport</a></Link></li>
                    <li><Link as="/deals/hnl" href="/deals?from_airport=hnl"><a>Deals from Daniel K. Inouye International Airport</a></Link></li>
                    <li><Link as="/deals/pdx" href="/deals?from_airport=pdx"><a>Deals from Portland International Airport</a></Link></li>


                    <li><Link as="/deals/lhr" href="/deals?from_airport=lhr"><a>Deals from Heathrow Airport</a></Link></li>
                    <li><Link as="/deals/cdg" href="/deals?from_airport=cdg"><a>Deals from Charles de Gaulle Airport</a></Link></li>
                    <li><Link as="/deals/yvr" href="/deals?from_airport=yvr"><a>Deals from Vancouver International Airport</a></Link></li>
                    <li><Link as="/deals/hkg" href="/deals?from_airport=hkg"><a>Deals from Hong Kong International Airport</a></Link></li>
                    <li><Link as="/deals/sin" href="/deals?from_airport=sin"><a>Deals from Singapore Changi Airport</a></Link></li>
                    <li><Link as="/deals/dxb" href="/deals?from_airport=dxb"><a>Deals from Dubai International Airport</a></Link></li>
                    <li><Link as="/deals/hnd" href="/deals?from_airport=hnd"><a>Deals from Haneda Airport</a></Link></li>
                    <li><Link as="/deals/ist" href="/deals?from_airport=ist"><a>Deals from Istanbul Atatürk Airport</a></Link></li>
                    <li><Link as="/deals/fra" href="/deals?from_airport=fra"><a>Deals from Frankfurt Airport</a></Link></li>
                    <li><Link as="/deals/zrh" href="/deals?from_airport=zrh"><a>Deals from Zurich Airport</a></Link></li>
                    <li><Link as="/deals/ich" href="/deals?from_airport=ich"><a>Deals from Incheon International Airport</a></Link></li>
                    <li><Link as="/deals/ams" href="/deals?from_airport=ams"><a>Deals from Amsterdam Airport Schiphol</a></Link></li>
                    <li><Link as="/deals/pek" href="/deals?from_airport=pek"><a>Deals from Beijing Capital International Airport</a></Link></li>
                    <li><Link as="/deals/muc" href="/deals?from_airport=muc"><a>Deals from Munich Airport</a></Link></li>
                    <li><Link as="/deals/doh" href="/deals?from_airport=doh"><a>Deals from Hamad International Airport</a></Link></li>
                    <li><Link as="/deals/pvg" href="/deals?from_airport=pvg"><a>Deals from Shanghai Pudong International Airport</a></Link></li>
                    <li><Link as="/deals/kul" href="/deals?from_airport=kul"><a>Deals from Kuala Lumpur International Airport</a></Link></li>
                </ul>
            </div>
        </div>
    </section>
);

export default TopAirports;