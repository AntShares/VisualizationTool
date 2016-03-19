/**
 * Created by kimi on 2016/2/15.
 */

//console.log("進入App2");
var moment = require('moment');
moment().format("dddd, MMMM Do YYYY, h:mm:ss a");



var async=require('async');


var antapi = require( './lib/antapi.js' );

var loader = require( './lib/loader' );


if ($(window).width() < 750){

    var myLoader = loader.loader({width: $(window).width(), height: 400, container: "#svg2", id: "loader2"});
    myLoader();

    var svg1 = d3.select('#svg2')
        .attr("width", $(window).width())
        //.attr("height", height + margin.top + margin.bottom)
        .attr("height", 800);
//.append("g");

    var svg11 = svg1
        .append("g")
        .attr("transform", "translate(" + 0 + "," + 50 + ")");

    svg11.append("text")
        .attr("x", 20)
        .attr("y", 0)
        .text("Transaction")
        .attr("font-family", "Lato")
        .attr("font-size", "30px")
        .attr("fill", "white");



    svg11.append("text")
        .attr("x", 240)
        .attr("y", 0)
        .text("Amount")
        .attr("font-family", "Lato")
        .attr("font-size", "30px")
        .attr("fill", "white");



    var svg111 = svg11.append("g")
        .attr("id","transvg")
        .attr("transform", "translate(0,20)");

    svg111.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .style("fill", "blcak")
        .attr('fill-opacity', 0.1)
        .attr("width", 950)
        .attr("height", "100%");





    function addnewtran( data, callback) {
        //return function(notify) {
        //console.log("start to add new tran");
        //console.log(data);

        d3.select("#loader2").remove();

        var mainsvg_newtran = svg111

            .append("g")
            .attr("class","tran")
            //.attr("id","i"+parseInt(data1+1) );
            .attr("transform", function(d,i){
                return "translate(0,0)";
            });

        mainsvg_newtran
            .append("rect")
            //.attr("x", 50)
            //.attr("y", 50)
            .attr('fill-opacity', 0)
            .attr("stroke-width", 0)
            //.transition()
            //.delay(500)

            //.attr("id","i"+parseInt(data.blockid-2) )
            //.attr("class","block" )
            .style("fill", function(d,i){
                //console.log(data.vout);
                //console.log(data.vout.length);
                if (data.vout.length == 0){
                    return "black";
                }
                else{
                    return "yellow";
                }

            })
            .attr('fill-opacity', 0.1)
            .attr("stroke-width", 1)
            .attr("stroke", "gray")
            .attr("width", 950)
            .attr("height", 50);

        mainsvg_newtran
            .append("text")
            //.transition()
            //.delay(500)
            .text(data.txid.slice(0,20)+"......")
            .attr("x", 20)
            .attr("y", 30)
            .attr("font-family", "Lato")
            .attr("font-size", "14px")
            .attr("fill", "white");



        mainsvg_newtran
            .append("text")
            //.transition()
            //.delay(500)
            .text( function (d) {
                //console.log(data.vout);
                //console.log(data.vout.length);
                if (data.vout.length == 0){
                    return "0";
                }
                else{
                    //console.log("抓到");
                    //console.log(data.vout[0].value);
                    return Math.round(data.vout[0].value);
                }




            })
            .attr("x", 290)
            .attr("y", 30)
            .attr("font-family", "Lato")
            .attr("text-anchor", "end")
            .attr("font-size", "14px")
            .attr("fill", "white");

        //}

        callback(null, 'done');
    };



}
else{

    var myLoader = loader.loader({width: 960, height: 400, container: "#svg2", id: "loader2"});
    myLoader();

    var svg1 = d3.select('#svg2')
        .attr("width", 1050)
        //.attr("height", height + margin.top + margin.bottom)
        .attr("height", 800);
//.append("g");

    var svg11 = svg1
        .append("g")
        .attr("transform", "translate(" + 50 + "," + 50 + ")");

    svg11.append("text")
        .attr("x", 20)
        .attr("y", 0)
        .text("Transaction")
        .attr("font-family", "Lato")
        .attr("font-size", "30px")
        .attr("fill", "white");

    svg11.append("text")
        .attr("x", 600)
        .attr("y", 0)
        .text("Type")
        .attr("font-family", "Lato")
        .attr("font-size", "30px")
        .attr("fill", "white");

    svg11.append("text")
        .attr("x", 785)
        .attr("y", 0)
        .text("Amount")
        .attr("font-family", "Lato")
        .attr("font-size", "30px")
        .attr("fill", "white");

    var svg111 = svg11.append("g")
        .attr("id","main")
        .attr("transform", "translate(0,20)");

    svg111.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .style("fill", "blcak")
        .attr('fill-opacity', 0.1)
        .attr("width", 950)
        .attr("height", "100%");


    function addnewtran(data, callback) {
        //return function(notify) {

        d3.select("#loader2").remove();

        var mainsvg_newblock = svg111

            .append("g")
            .attr("class","tran")
            //.attr("id","i"+parseInt(data1+1) );
            .attr("transform", function(d,i){
                return "translate(0,0)";
            });

        mainsvg_newblock
            .append("rect")
            //.attr("x", 50)
            //.attr("y", 50)
            .attr('fill-opacity', 0)
            .attr("stroke-width", 0)
            //.transition()
            //.delay(500)

            //.attr("id","i"+parseInt(data.blockid-2) )
            //.attr("class","block" )
            .style("fill", function(d,i){
                //console.log(data.vout);
                //console.log(data.vout.length);
                if (data.vout.length == 0){
                    return "black";
                }
                else{
                    return "yellow";
                }

            })
            .attr('fill-opacity', 0.1)
            .attr("stroke-width", 1)
            .attr("stroke", "gray")
            .attr("width", 950)
            .attr("height", 50);

        mainsvg_newblock
            .append("text")
            //.transition()
            //.delay(500)
            .text(data.txid)
            .attr("x", 20)
            .attr("y", 30)
            .attr("font-family", "Lato")
            .attr("font-size", "14px")
            .attr("fill", "white");

        mainsvg_newblock
            .append("text")
            //.transition()
            //.delay(500)
            .text("MinerTrans")
            .attr("x", 600)
            .attr("y", 30)
            .attr("font-family", "Lato")
            .attr("font-size", "14px")
            .attr("fill", "white");


        mainsvg_newblock
            .append("text")
            //.transition()
            //.delay(500)
            .text( function (d) {
                //console.log(data);
                //console.log(data.vout.length);
                if (data.vout.length == 0){
                    return "0";
                }
                else{
                    //console.log("抓到");
                    //console.log(data.vout[0].value);
                    return Math.round(data.vout[0].value);
                }




            })
            .attr("x", 800)
            .attr("y", 30)
            .attr("font-family", "Lato")
            .attr("font-size", "14px")
            .attr("fill", "white");

        callback(null);



        //}

        //callback(null, 'ok');
    };

}

function moveall(arg1, callback) {
    //return function(notify) {

    //console.log("Enter moveall");
    //console.log(d3.selectAll(".tran")[0]);
    //console.log(d3.selectAll(".tran")[0].length);

    if (d3.selectAll(".tran")[0].length == 0){

        callback(null, arg1);
    }
    else{

        if (document.hidden){

            d3.selectAll(".tran")

                .attr("transform", function(d,i){
                    //console.log(this.getAttribute("transform"));
                    ////console.log(d);
                    return  this.getAttribute("transform")+ "translate(0,50)"
                });

            callback(null, arg1);


            //return 1;
        }
        else{

            d3.selectAll(".tran")
                .transition()
                .duration(500)

                .attr("transform", function(d,i){
                    //console.log(this.getAttribute("transform"));
                    ////console.log(d);
                    return  this.getAttribute("transform")+ "translate(0,50)"
                })

                //callback(null);

                .call(endall, function() {
                    //console.log("全部完成");
                    //d3.selectAll(".tran").transition();
                    //notify(null, "ok");
                    callback(null, arg1);
                });

            //return 500;
        }




    }


    //}
};
function endall(transition, callback) {
    var n = 0;
    transition
        .each(function() { ++n; })
        .each("end", function() { if (!--n) callback.apply(this, arguments); });
};

//抓取伺服器高度寫到本地
var server_height="1";
async.forever(
    function(next) {
        // next is suitable for passing to things that need a callback(err [, whatever]);
        // it will result in this function being called again.

        async.waterfall([
            myFirstFunction,
            antapi.getblockcount,
            mySecondFunction

        ], function (err, result) {
            // result now equals 'done'
            next()
        });
        function myFirstFunction(callback) {
            // arg1 now equals 'zero'
            setTimeout(function(){
                //alert("Hello");
                callback(null);
            }, 3000);

        }


        function mySecondFunction(arg1,callback) {

            //console.log(arg1);
            server_height = arg1-1;
            callback(null);

        }


    },
    function(err) {
        // if next is called with a value in its first parameter, it will appear
        // in here as 'err', and execution will stop.
        //console.log("偵測到錯誤 : "+ err)
    }
);

//判斷本地高度是與伺服器高度不同
var local_height="1";
async.forever(
    function(next) {
        // next is suitable for passing to things that need a callback(err [, whatever]);
        // it will result in this function being called again.

        async.waterfall([
            myFirstFunction,
            mySecondFunction

        ], function (err, result) {
            // result now equals 'done'
            next()
        });
        function myFirstFunction(callback) {
            // arg1 now equals 'zero'
            setTimeout(function(){
                //alert("Hello");
                callback(null);
            }, 3000);

        }
        function mySecondFunction(callback) {

            if (server_height != local_height){
                //console.log("向伺服器尋求新交易");
                ////console.log(server_height);

                async.waterfall([
                    function(callback) {
                        // arg1 now equals 'three'
                        callback(null, server_height);
                    },
                    antapi.getblockhash,
                    antapi.getblockinfo ,
                    function(arg1, callback) {
                        // arg1 now equals 'three'
                        console.log("arg1");
                        console.log(arg1.tx);
                        callback(null, arg1.tx[0]);
                    },
                    moveall,
                    addnewtran

                ], function (err, result) {
                    // result now equals 'done'
                    local_height = server_height;
                    callback(null);
                });

            }
            else{
                //console.log("目前區塊與伺服器同步中");
                callback(null);
            }


        }

    },
    function(err) {
        // if next is called with a value in its first parameter, it will appear
        // in here as 'err', and execution will stop.
        //console.log("偵測到錯誤 : "+ err)
    }
);
