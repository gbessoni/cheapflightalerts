import Link from 'next/link';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <ul>
        <li><Link href="/about"><a>About</a></Link></li>

        <li>
          <a href="http://cheapflights.helpsite.io/">FAQ</a>
        </li>

        <li>
          <a href="https://twitter.com/FlightAlertDeal">Twitter</a>
        </li>
        <li>
          <a href="https://www.facebook.com/Cheap-Flight-Alerts-2252307978129969/?view_public_for=2252307978129969">Facebook</a>
        </li>
        <li>
          <a href="https://www.instagram.com/flightalertdeals/">Instagram</a>
        </li>

      </ul>

      <div className="footer__copyright">
        2018 All rights reserved. Cheap Flight Alerts owned and operated by Parking Access, LLC
      </div>

    </div>
  </footer>
);

export default Footer;