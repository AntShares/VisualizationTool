/**
 * Created by kimi on 2016/3/12.
 */
var bitcoin = require('bitcoin');

var client = new bitcoin.Client({
    host: 'seed1.antshares.org',
    port: 20332,
    user: '',
    pass: '',
    timeout: 30000
});


module.exports = {

    client : client


};


