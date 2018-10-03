import {connect} from 'react-redux';
import actions from '../redux/actions';
import Link from 'next/link';

const Header = ({isAuthenticated, deauthenticate}) => (

    <nav className="navbar navbar-default" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>

                <Link href="/">
                    <a className="navbar-brand">
                        <img src={'/static/img/logo.png'} alt="CheapFlightAlerts" width={180} height={30}/>
                    </a>
                </Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link href="/premium">
                            <a className="btn btn-primary btn-primary--outline hidden-xs">
                                <img src={'/static/img/star.svg'} alt="Star" width={16} height={16} />
                                Premium Members
                            </a>
                        </Link>
                        <Link href="/premium" >
                            <a className="premium visible-xs">
                                <img src={'/static/img/star.svg'} alt="Star" width={16} height={16} />
                                Premium Members
                            </a>
                        </Link>
                    </li>

                    {!isAuthenticated &&
                    <li>
                        <Link href="/login">
                            <a className="btn btn-primary hidden-xs">
                                Login
                            </a>
                        </Link>
                        <Link href="/login">
                            <a className="visible-xs">
                                Login
                            </a>
                        </Link>
                    </li>}

                    {isAuthenticated &&
                    <li>
                        <Link href="/profile">
                            <a className="profile">
                                Profile
                            </a>
                        </Link>
                    </li>}

                    {isAuthenticated &&
                    <li onClick={deauthenticate}>
                        <Link href="#">
                            <a>
                                Logout
                            </a>
                        </Link>
                    </li>}
                </ul>
            </div>
        </div>
    </nav>
);

const mapStateToProps = (state) => (
    {isAuthenticated: !!state.authentication.token}
);

export default connect(mapStateToProps, actions)(Header);