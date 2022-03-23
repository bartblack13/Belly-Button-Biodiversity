function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}


// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    var sampleArray = data.samples;
    // Create a variable that filters the samples for the object with the desired sample number.
    var sampleNumber = sampleArray.filter(sampleObj => sampleObj.id == sample);
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metadataArray = data.metadata;
    var metasampleNumber = metadataArray.filter(sampleObj => sampleObj.id == sample);
    // Create a variable that holds the first sample in the array.
    var sampleResult = sampleNumber[0];

    // 2. Create a variable that holds the first sample in the metadata array.
    var metadataResult = metasampleNumber[0];
    console.log(metasampleNumber);
    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var PANEL = d3.select("#sample-metadata");
    var otu_Ids = sampleResult.otu_ids;
    var otu_Labels = sampleResult.otu_labels;
    var sample_Values = sampleResult.sample_values;
    console.log(otu_Ids);
    console.log(otu_Labels);
    console.log(sample_Values);
    // 3. Create a variable that holds the washing frequency.
    var washFreq = metadataResult.wfreq;
    console.log(washFreq);
    // Create the yticks for the bar chart.
    var yticks = otu_Ids.slice(0,10).map(ids => `OTU ${ids}`).reverse();

    // bar graph trace
    var barData = [{
      x: sample_Values.slice(0,10).reverse(),
      y: yticks,
      text: otu_Labels.slice(0,10).reverse(),
      type: "bar",
      orientation: "h",
      
    }];

    // bar graph layout
    var barLayout = {
      title: "Top Ten Bacteria Strains (OTU)",
      xaxis: {title: "Bacteria Count" },
      yaxis: {title: "OTU/Bacteria ID #"}
     
    };
    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot("bar", barData, barLayout);
    
    // Use Plotly to plot the bubble data and layout.
    // 1. Create the trace for the bubble chart.
    var bubbleData = [
      {
        x: otu_Ids,
        y: sample_Values,
        text: otu_Labels,
        mode: "markers",
        marker: {
          size: sample_Values,
          color: otu_Ids,
          colorscale: "Electric"
        }
      }   
    ];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "Bacteria Cultures Per Sample",
      margin: { t: 0 },
      hovermode: "closest",
      xaxis: { title: "OTU ID" },
      yaxis: { title: "Bacteria Count"},
      margin: { t: 80}       
    };
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [
      {
        domain: { x: [0, 1], y: [0, 1] },    
        value: washFreq,    
        title: { text: "Belly Button Wash Frequency of Donor" },    
        type: "indicator",    
        mode: "gauge+number", 
        gauge: {    
          axis: { range: [null, 10], tickmode: "array", tickvals: [0,2,4,6,8,10], ticktext: [0,2,4,6,8,10]},    
          steps: [    
            { range: [0, 2], color: "rgb(8, 35, 168)" },    
            { range: [2, 4], color: "rgb(40, 199, 188)" },
            { range: [4, 6], color: "rgb(37, 196, 138)" },
            { range: [6, 8], color: "rgb(189, 150, 36)" },
            { range: [8, 10], color: "rgb(204, 51, 43)" },    
          ],
          bar: { color: "black" },   
        }
      }    
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { width: 500, height: 450, margin: { t: 0, b: 0, } };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);
  });
}
