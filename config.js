if (process.env.NODE_ENV === 'production') {

    module.exports = {
        API: 'https://api.cheapflightalerts.net',
    };

} else {

    module.exports = {
        API: 'http://staging.api.cheapflightalerts.net',
    };

}