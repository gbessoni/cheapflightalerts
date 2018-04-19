import { connect } from 'react-redux';
import actions from '../redux/actions';
import Link from 'next/link';

const Header = ({ isAuthenticated, deauthenticate }) => (
  <header className="header">
    <nav className="navbar navbar-default" role="navigation">
      <div className="container">
        <div className="navbar-header">

          <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <Link href="/"><a className="navbar-brand">CheapFlightAlerts</a></Link>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">

            <li>
              {/* <Link href="#"> */}
              <a className="foreign" href="#" onClick={() => alert('What page should be here?')}>
                <i className="ion-earth" />
                Not in USA?
              </a>
              {/* </Link> */}
            </li>
            <li>
              <Link href="/premium">
                <a className="premium">
                  <i className="ion-ios-star" />
                  Premium Members
                </a>
              </Link>
            </li>

            {!isAuthenticated &&
              <li>
                <Link href="/login">
                  <a className="login">
                    <i className="ion-log-in visible-xs" />
                    Login
                  </a>
               </Link>
              </li>}

            {isAuthenticated &&
              <li>
                <Link href="/profile">
                  <a className="profile">
                    <i className="ion-person visible-xs" />
                    Profile
                  </a>
                </Link>
              </li>}

            {isAuthenticated &&
              <li onClick={deauthenticate}>
                <Link href="#">
                  <a>
                    <i className="ion-log-out visible-xs" />
                    Logout
                  </a>
                </Link>
              </li>}

          </ul>
        </div>
      </div>
    </nav>
  </header>
);

const mapStateToProps = (state) => (
  { isAuthenticated: !!state.authentication.token }
);

export default connect(mapStateToProps, actions)(Header);