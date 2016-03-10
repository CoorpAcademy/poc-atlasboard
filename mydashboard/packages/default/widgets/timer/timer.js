widget = {
  //runs when we receive data from the job
  onData: function (el, data) {

    //The parameters our job passed through are in the data object
    //el is our widget element, so our actions should all be relative to that
    if (data.title) {
        $('h2', el).text(data.title);
    }

    var testdata = [
        {key: "One", y: 5, color: "#5F5"},
        {key: "Two", y: 2},
        {key: "Three", y: 9},
        {key: "Four", y: 7},
        {key: "Five", y: 4},
        {key: "Six", y: 3},
        {key: "Seven", y: 0.5}
    ];

    var height = 300;
    var width = 400;

    nv.addGraph(function() {
        var chart = nv.models.pieChart()
            .x(function(d) { return d.key })
            .y(function(d) { return d.y })
            .width(width)
            .height(height);
        d3.select("#test1")
            .datum(testdata)
            .attr('width', width)
            .attr('height', height)
            .transition().duration(1200)
            .call(chart);
        return chart;
    });
  }
};