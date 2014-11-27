
# Width and height
w = 600
h = 500
padding = 100

# Dynamic, random dataset
# dataset = []									   #Initialize empty array
# numDataPoints = 50			 				 #Number of dummy data points to create
# maxRange = Math.random() * 1000  #Max range of new values
# for i in [0..numDataPoints]      #Loop numDataPoints times
#   newNumber1 = Math.floor(Math.random() * maxRange);	#New random integer
#   newNumber2 = Math.floor(Math.random() * maxRange);	#New random integer
#   dataset.push({x:newNumber1, y:newNumber2});					    #Add new number to array

#Create SVG element
svg = d3.select("body")
      .append("svg")
      .attr("width", w)
      .attr("height", h)

d3.json('cbs.json', (dataset) ->
    #Create scale functions
    xScale = d3.scale.linear()
               .domain([0, d3.max(dataset, (d) -> d.x)])
               .range([padding, w - padding])

    yScale = d3.scale.linear()
               .domain([0, d3.max(dataset, (d) -> d.y)])
               .range([h - padding, padding])

    # Define X axis
    xAxis = d3.svg.axis()
              .scale(xScale)
              .orient("bottom")
              .ticks(5)

    # Define Y axis
    yAxis = d3.svg.axis()
              .scale(yScale)
              .orient("left")
              .ticks(5)

    #Create circles
    circles = svg.append("g")
       .attr("id", "circles")
    circles.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) -> xScale(d.x) )
       .attr("cy", (d) -> yScale(d.y) )
       .attr("r", 2)

    #Create labels
    circles.selectAll("text")
       .data(_.filter(dataset, (d) -> d.y > 15000 or d.x > 40 ))
       .enter()
       .append("text")
       .text((d) -> d.name)
       .attr('x', (d)-> xScale(d.x) )
       .attr('y', (d) -> yScale(d.y) )
       .attr('dy', 15)

    #Create X axis
    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (h - padding + 5) + ")")
      .call(xAxis)

    #Create Y axis
    svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + (padding - 5) + ",0)")
      .call(yAxis)
)
