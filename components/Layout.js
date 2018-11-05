import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

import '../sass/main.sass';

const Layout = ({title, description, children, userEmail, isWelcomePage}) => (
    <div>

        <Head>

            <meta charSet='utf-8'/>
            <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'/>

            <title>{title}</title>

            {!description ? (
                <meta name="description"
                  content="Cheap Flight Alerts: NUMBER 1 For Cheap Flights. LOW AIRFARE On International and Domestic Flights. CHEAP DEALS straight to your inbox!"/>
                ) : (
                <meta name="description" content={description}/>
                )
            }

            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>

            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800" />

            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />

            <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"/>

            <link rel="stylesheet" href="/_next/static/style.css"/>

            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-118762882-1"></script>

            <script dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-118762882-1');
                `
            }}/>

            <script src="https://js.stripe.com/v3/"></script>

            <script dangerouslySetInnerHTML={{
                __html: `
                    (function(i,s,o,g,r,a,m){i['ProfitWellObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); })(window,document,'script','https://dna8twue3dlxq.cloudfront.net/js/profitwell.js','profitwell');
                    profitwell('auth_token', 'efba8bad1a6007e3dce351df0182d4f1');
                    profitwell('user_email', '${userEmail ? userEmail : ''}');
                `
            }}/>

            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-1036423859"></script>

            <script dangerouslySetInnerHTML={{
                __html: `             
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-1036423859');
                `
            }}/>

            {isWelcomePage ? (
                <script dangerouslySetInnerHTML={{
                    __html: `
                        gtag('event', 'conversion', {'send_to': 'AW-1036423859/pxOFCNK28IsBELOlmu4D'});
                    `
                }}/>
            ) : ''}

        </Head>

        <Header/>

        <main>
            {children}
        </main>

        <Footer/>

        <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

        <script dangerouslySetInnerHTML={{
            __html: `
                window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
                d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
                _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
                $.src="//v2.zopim.com/?2zhhocTgixPNHUqtyoFMe6BEZO5j4xb6";z.t=+new Date;$.
                type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");
            `
        }}/>

        <script async src='https://r.wdfl.co/rw.js' data-rewardful='117537'></script>

    </div>
);

export default Layout;