import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';
import NewPasswordForm from '../components/NewPasswordForm';

const NewPassword = ({ perishableToken }) => {

  if (perishableToken) {

    return (
      <Layout title="Cheap Flight Alerts | New password">

        <NewPasswordForm
          perishableToken={perishableToken}
        />

      </Layout>
    );

  } else {

    return (
      <Layout title="New password">
        <div className="heading-non-auth text-center">
          <h3>You are not authorized to view this content.</h3>
        </div>
      </Layout>
    );

  }

};

NewPassword.getInitialProps = function(ctx) {
  initialize(ctx);

  const { perishable_token } = ctx.query;

  if (perishable_token) {
    return { perishableToken: perishable_token };
  }
};

export default withRedux(initStore)(NewPassword);