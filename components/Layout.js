import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

import '../sass/main.sass';

const Layout = ({ title, children, userEmail }) => (
  <div>

    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />

      <title>CheapFlightAlerts | {title}</title>

      <meta name="description" content="Donec rutrum congue leo eget malesuada." />

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />

      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,300,400,600,700,800,900" />

      <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />

      <link rel="stylesheet" href="/_next/static/style.css" />

      <script src="https://js.stripe.com/v3/"></script>

      <script dangerouslySetInnerHTML={{ __html: `
        (function(i,s,o,g,r,a,m){i['ProfitWellObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); })(window,document,'script','https://dna8twue3dlxq.cloudfront.net/js/profitwell.js','profitwell');
        profitwell('auth_token', 'efba8bad1a6007e3dce351df0182d4f1');
        profitwell('user_email', '${userEmail ? userEmail : ''}');
      `}} />

    </Head>

    <Header />

    <main className="container">
      {children}
    </main>

    <Footer />

    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

  </div>
);

export default Layout;