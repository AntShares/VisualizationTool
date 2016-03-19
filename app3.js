/**
 * Created by kimi on 2016/2/15.
 */

//console.log("進入App3");
var moment = require('moment');
//moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

var $ = require("jquery");
//var io = require('socket.io')();
var d3 = require("d3");

//console.log("$(window).width() ");
//console.log($(window).width());


var co = require('co');

var async=require('async');

var antapi = require( './lib/antapi.js' );


var loader = require( './lib/loader' );




if ($(window).width() < 750){

    var myLoader = loader.loader({width: $(window).width(), height: 400, container: "#svg3", id: "loader3"});
    myLoader();

    var svg1 = d3.select('#svg3')
        .attr("width", $(window).width())
        //.attr("height", height + margin.top + margin.bottom)
        .attr("height", 300+20);
//.append("g");

    var svg11 = svg1
        .append("g")
        .attr("transform", "translate(" + 0 + "," + 50 + ")");

    svg11.append("text")
        .attr("x", 20)
        .attr("y", 0)
        .text("Block")
        .style("font-weight","100")
        .attr("font-family", "Lato")
        .attr("font-size", "30px")
        .attr("fill", "white");

    svg11.append("text")
        .attr("x", 110)
        .attr("y", 0)
        .text("Timestamp")
        .attr("font-family", "Lato")
        .attr("font-size", "30px")
        .attr("fill", "white");


    svg111 = svg11.append("g")
        .attr("id","blocksvg")
        .attr("transform", "translate(0,20)");

    svg111.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .style("fill", "blcak")
        .attr('fill-opacity', 0.1)
        .attr("width", 950)
        .attr("height", "100%");




    function endall(transition, callback) {
        var n = 0;
        transition
            .each(function() { ++n; })
            .each("end", function() { if (!--n) callback.apply(this, arguments); });
    };



    function addnewblock( data, callback) {
        //return function(notify) {

        d3.select("#loader3").remove();

        //console.log("start to add blockㄅ");
        //console.log(data);

        var mainsvg_newblock = svg111

            .append("g")
            .attr("class","block")
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
            .style("fill", "black")
            .attr('fill-opacity', 0.1)
            .attr("stroke-width", 1)
            .attr("stroke", "gray")
            .attr("width", 950)
            .attr("height", 50);

        mainsvg_newblock
            .append("text")
            //.transition()
            //.delay(500)
            .text(data.height)
            .attr("x", 20)
            .attr("y", 30)
            .attr("font-family", "Lato")
            .attr("font-size", "14px")
            .attr("fill", "white");

        mainsvg_newblock
            .append("text")
            //.transition()
            //.delay(500)
            .text( function (d) {
                moment().format("dddd, MMMM Do YYYY, h:mm:ss");
                var day = moment.unix(data.time);
                return day.format("MMMM Do YYYY, h:mm:ss"); })
            .attr("x", 110)
            .attr("y", 30)
            .attr("font-family", "Lato")
            .attr("font-size", "14px")
            .attr("fill", "white");

        mainsvg_newblock
            .append("text")
            .attr("x", 500)
            .attr("y", 30)
            .text( function (d) {
                //d.tx.length();
                //console.log(data.tx.length);
                return data.tx.length; })
            .attr("font-family", "Lato")
            .attr("font-size", "14px")
            .attr("fill", "white");

        mainsvg_newblock
            .append("text")
            .attr("x", 850)
            .attr("y", 30)
            .text( function (d) {
                //d.tx.length();
                ////console.log(d.tx.length);
                return data.nonce; })
            .attr("font-family", "Lato")
            .attr("text-anchor", "end")
            .attr("font-size", "14px")
            .attr("fill", "white");

        //}

        callback(null, 'done');
    };





}
else{

    var myLoader = loader.loader({width: 960, height: 400, container: "#svg3", id: "loader3"});
    myLoader();

    var svg1 = d3.select('#svg3')
        .attr("width", 1050)
        //.attr("height", height + margin.top + margin.bottom)
        .attr("height", 300+20);
//.append("g");

    var svg11 = svg1
        .append("g")
        .attr("transform", "translate(" + 50 + "," + 50 + ")");

    svg11.append("text")
        .attr("x", 20)
        .attr("y", 0)
        .text("Block")
        .attr("font-family", "Lato")
        .attr("font-size", "30px")
        .attr("fill", "white");

    svg11.append("text")
        .attr("x", 150)
        .attr("y", 0)
        .text("Timestamp")
        .attr("font-family", "Lato")
        .attr("font-size", "30px")
        .attr("fill", "white");

    svg11.append("text")
        .attr("x", 430)
        .attr("y", 0)
        .text("Transaction")
        .attr("font-family", "Lato")
        .attr("font-size", "30px")
        .attr("fill", "white");

    svg11.append("text")
        .attr("x", 720)
        .attr("y", 0)
        .text("Hash")
        .attr("font-family", "Lato")
        .attr("font-size", "30px")
        .attr("fill", "white");


    svg111 = svg11.append("g")
        .attr("id","blocksvg")
        .attr("transform", "translate(0,20)");

    svg111.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .style("fill", "blcak")
        .attr('fill-opacity', 0.1)
        .attr("width", 950)
        .attr("height", "100%");






    function endall(transition, callback) {
        var n = 0;
        transition
            .each(function() { ++n; })
            .each("end", function() { if (!--n) callback.apply(this, arguments); });
    };



    function addnewblock( data, callback) {
        //return function(notify) {

        d3.select("#loader3").remove();

        //console.log("start to add blockㄅ");
        //console.log(data);

        var mainsvg_newblock = svg111

            .append("g")
            .attr("class","block")
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
            .style("fill", "black")
            .attr('fill-opacity', 0.1)
            .attr("stroke-width", 1)
            .attr("stroke", "gray")
            .attr("width", 950)
            .attr("height", 50);

        mainsvg_newblock
            .append("text")
            //.transition()
            //.delay(500)
            .text(data.height)
            .attr("x", 20)
            .attr("y", 30)
            .attr("font-family", "Lato")
            .attr("font-size", "14px")
            .attr("fill", "white");

        mainsvg_newblock
            .append("text")
            //.transition()
            //.delay(500)
            .text( function (d) {
                var day = moment.unix(data.time);
                day = day.format("dddd, MMMM Do YYYY, h:mm:ss a");
                ////console.log(day);
                return day; })
            .attr("x", 150)
            .attr("y", 30)
            .attr("font-family", "Lato")
            .attr("font-size", "14px")
            .attr("fill", "white");

        mainsvg_newblock
            .append("text")
            .attr("x", 500)
            .attr("y", 30)
            .text( function (d) {
                //d.tx.length();
                //console.log(data.tx.length);
                return data.tx.length; })
            .attr("font-family", "Lato")
            .attr("font-size", "14px")
            .attr("fill", "white");

        mainsvg_newblock
            .append("text")
            .attr("x", 650)
            .attr("y", 30)
            .text( function (d) {
                //d.tx.length();
                ////console.log(d.tx.length);
                return data.hash.slice(0,30)+"..."; })
            .attr("font-family", "Lato")
            //.attr("text-anchor", "end")
            .attr("font-size", "14px")
            .attr("fill", "white");

        //}

        callback(null, 'done');
    };




}



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
                //console.log("向伺服器尋求新區塊");
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
                        //console.log(arg1);
                        callback(null, arg1);
                    },
                    moveall,
                    addnewblock

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



function moveall(arg1, callback) {
    //return function(notify) {

    //console.log("Enter moveall");
    //console.log(d3.selectAll(".block")[0]);
    //console.log(d3.selectAll(".block")[0].length);

    if (d3.selectAll(".block")[0].length == 0){

        callback(null, arg1);
    }
    else{

        if (document.hidden){

            d3.selectAll(".block")

                .attr("transform", function(d,i){
                    //console.log(this.getAttribute("transform"));
                    ////console.log(d);
                    return  this.getAttribute("transform")+ "translate(0,50)"
                });

            callback(null, arg1);


            //return 1;
        }
        else{

            d3.selectAll(".block")
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
                    //d3.selectAll(".block").transition();
                    //notify(null, "ok");
                    callback(null, arg1);
                });

            //return 500;
        }




    }


    //}
};


function addnewblock( data, callback) {
    //return function(notify) {
    //console.log("start to add blockㄅ");
    //console.log(data);

    var mainsvg_newblock = svg111

        .append("g")
        .attr("class","block")
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
        .style("fill", "black")
        .attr('fill-opacity', 0.1)
        .attr("stroke-width", 1)
        .attr("stroke", "gray")
        .attr("width", 950)
        .attr("height", 50);

    mainsvg_newblock
        .append("text")
        //.transition()
        //.delay(500)
        .text(data.height)
        .attr("x", 20)
        .attr("y", 30)
        .attr("font-family", "test1")
        .attr("font-size", "14px")
        .attr("fill", "white");

    mainsvg_newblock
        .append("text")
        //.transition()
        //.delay(500)
        .text( function (d) {
            var day = moment.unix(data.time);

            return day; })
        .attr("x", 150)
        .attr("y", 30)
        .attr("font-family", "test1")
        .attr("font-size", "14px")
        .attr("fill", "white");

    mainsvg_newblock
        .append("text")
        .attr("x", 500)
        .attr("y", 30)
        .text( function (d) {
            //d.tx.length();
            //console.log(data.tx.length);
            return data.tx.length; })
        .attr("font-family", "test1")
        .attr("font-size", "14px")
        .attr("fill", "white");

    mainsvg_newblock
        .append("text")
        .attr("x", 850)
        .attr("y", 30)
        .text( function (d) {
            //d.tx.length();
            ////console.log(d.tx.length);
            return data.nonce; })
        .attr("font-family", "test1")
        .attr("text-anchor", "end")
        .attr("font-size", "14px")
        .attr("fill", "white");

    //}

    callback(null, 'done');
};