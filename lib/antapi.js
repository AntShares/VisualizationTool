/**
 * Created by kimi on 2016/3/12.
 */

var apiclient = require( './apiclient.js' );

module.exports = {


    getblockcount : function(callback){
        // do something ...
        apiclient.client.cmd('getblockcount', function(err, d, resHeaders){
            if (err) {
                console.log("getblockcount 報錯");
                console.log(err);
            }
            callback(null,d);
        });

    },

    getblockhash : function(arg1,callback){
        // do something ...

        apiclient.client.cmd('getblockhash',arg1 ,  function(err, d, resHeaders){
            if (err) {
                console.log("getblockhash 報錯");
                console.log(err);
            }
            callback(null,d);
        });

    },


    getblockinfo : function(arg1, callback){
        // do something ...
        apiclient.client.cmd('getblock', arg1, function(err, d, resHeaders){
            if (err) {
                console.log("getblock 報錯");
                console.log(err);
            }
            callback(null,d);
        });

    },

    getrawtransaction : function(arg1, callback){
        // do something ...
        apiclient.client.cmd('getrawtransaction', arg1, function(err, d, resHeaders){
            if (err) {
                console.log("getrawtransaction 報錯");
                console.log(err);
            }
            callback(null,d);
        });

    },


    do_b : function(){
        // do something ...
    }
};


