/**
 * Created by xiangyuchen on 2016/3/14.
 */

//var myLoader = loader({width: 960, height: 500, id: "blockloader"});
//myLoader();



module.exports = {

    loader: function loader(config) {
        return function() {

            var svg = d3.select(config.container).append("svg")
                .attr("id", config.id)
                .attr("width", config.width)
                .attr("height", config.height)
                .append("g")
                .attr("transform", "translate(" + config.width / 2 + "," + config.height / 2 + ")");

            svg.append("text")
            //.attr("x", function(d) { return d.cx; })
                //.attr("y", function(d) { return d.cy; })
                .text("Loading...")
                .attr("font-family", "Lato")
                //.attr("x", "0")
                .attr("font-size", "20px")
                .attr("fill", "white");

        };
    },

    do_b : function(){
        // do something ...
    }
};


