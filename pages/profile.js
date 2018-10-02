import withRedux from 'next-redux-wrapper';
import axios from 'axios';
import {API} from '../config';
import initialize from '../utils/initialize';
import {initStore} from '../redux';
import Layout from '../components/Layout';
import ProfileForm from '../components/ProfileForm';

const Profile = ({user, token, error}) => (
    <Layout title="Cheap Flight Alerts | Profile" userEmail={user.email}>

        <section className="profile-welcome text-center">
            <div className="container">

                {(user && (
                    <ProfileForm user={user} token={token}/>
                )) ||
                <h3>You are not authenticated. {error && error}</h3>}

            </div>
        </section>

    </Layout>
);

Profile.getInitialProps = async (ctx) => {

    initialize(ctx);

    const token = ctx.store.getState().authentication.token;

    if (token) {

        console.log(this.props);

        try {

            const response = await axios.get(`${API}/premium/profile`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json; version=1',
                    'Access-Token': token
                }
            });

            const user = response.data.user;

            return {
                user,
                token
            };

        } catch (error) {

            return {
                error: 'Your session has expired. Please logout and login again.'
            }

        }

    }

};


export default withRedux(initStore)(Profile);