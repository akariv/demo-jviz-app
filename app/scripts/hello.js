(function() {
  var h, padding, svg, w;

  w = 600;

  h = 500;

  padding = 100;

  svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

  d3.json('cbs.json', function(dataset) {
    var circles, xAxis, xScale, yAxis, yScale;
    xScale = d3.scale.linear().domain([
      0, d3.max(dataset, function(d) {
        return d.x;
      })
    ]).range([padding, w - padding]);
    yScale = d3.scale.linear().domain([
      0, d3.max(dataset, function(d) {
        return d.y;
      })
    ]).range([h - padding, padding]);
    xAxis = d3.svg.axis().scale(xScale).orient("bottom").ticks(5);
    yAxis = d3.svg.axis().scale(yScale).orient("left").ticks(5);
    circles = svg.append("g").attr("id", "circles");
    circles.selectAll("circle").data(dataset).enter().append("circle").attr("cx", function(d) {
      return xScale(d.x);
    }).attr("cy", function(d) {
      return yScale(d.y);
    }).attr("r", 2);
    circles.selectAll("text").data(_.filter(dataset, function(d) {
      return d.y > 15000 || d.x > 40;
    })).enter().append("text").text(function(d) {
      return d.name;
    }).attr('x', function(d) {
      return xScale(d.x);
    }).attr('y', function(d) {
      return yScale(d.y);
    }).attr('dy', 15);
    svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + (h - padding + 5) + ")").call(xAxis);
    return svg.append("g").attr("class", "y axis").attr("transform", "translate(" + (padding - 5) + ",0)").call(yAxis);
  });

}).call(this);
