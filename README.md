# Belly-Button-Biodiversity
deploy interactive dashboard and website via github pages: plotly, html, json, javascript, CSS and bootstrap

## Purpose
The purpose of this project was to use Plotly.js, a JavaScript data visualization library, to create an interactive data visualization for the web. In doing so, I would begin to gain an understanding of how to communicate my data analysis findings to an generalized audience that would only require them to have an internet connection and browser.  This is important because not everyone who will want to view the analyzed data or final projects will have the required software and knowledge, or the desire to download specialized files, such as json, python, Javascript, or Html files.  This allows anyone anywhere to have access to my findings packaged in an interactive webpage.

This project required that learn how to to the following: 
* Create basic plots/charts with Plotly, including bar charts, line charts, and pie charts
* Use D3.json() to fetch external data, such as CSV files and web APIs
* Parse data in JSON format
* Use functional programming in JavaScript to manipulate data
* Use JavaScript's Math library to manipulate numbers
* Use event handlers in JavaScript to add interactivity to a data visualization
* How to use interactivity to enhance your visualizations
* Deploy an interactive chart to GitHub Pages

## Overview
In order to achieve this, I helped a friend named "Roza" build a webpage to share her findings on the bacterial biodiversity contained in the natural flora of the belly button.  Roza works for a company that hopes to use bacteria from the belly button to sythesize in vitro specific proteins of interest.  Roza's goal is to have a simple, but interactive, webpage that study participants/donors can use to see their bacterial statisitics. The final webpage was deployed by and is hosted by github-pages, linked through my profile. [Click here](https://bartblack13.github.io/Belly-Button-Biodiversity/) to visit webpage.
The page contains 5 main elements that are part of the interactive experience:
* a dropdown menu that allows a participant/donor to select their anonymized donor ID#, which then automatically updates and displays the remaining 4 elements;
* Demographic information, extracted and parsed from a JSON data file;
* bar chart displaying the top 10 bacterial strains located in the donor's belly button, their bacterial ID (OTU#), their scientific name, and their count; bacterial names and counts can also be seen by hovering over the bars;
* a guage chart displaying the washing frequency of the donor;
* a bubble chart that shows the correlation between bacteria ID and bacterial count, where the size of the bubble is depedent on the bacterial count; bacterial names can be viewed by hovering over each bubble;

This project consisted of 4 deliverables, the first three were the bar chart, the guage chart, and the bubble chart.  The fourth deliverable involved customizing my webpage.  To do this I did the following:
* added image from local folder to jumbotron, changed jumbotron header text font to white, changed the font size of "use interactive charts..." by changing from p-tag to an h3-tag and added a line break to have the color of the text stand out against the background image; and used an empty row-tag to add a margin above the jumbotron image for aesthtics; 
* added background color to body of website
* adjusted size of guage chart to have a margin on right side of the graph; and added custom colors to the chart;
* used an empty row-tag to add a margin above the bubble image for aesthtics;
  
## Conclusion
Given that this is the first official webpage that I have designed, and the challenge of using Javascript to parse data from a JSON file, and link everything via an html file, I am pleased with how the site functions and looks.  However, given my long history in the biomedical research field, I find the page to be somewhat lacking from an analytical point of view.  I realize that the goal of the page was to provide study participants with a fun and interactive way to see the results of their participation, in addition to the technical side of me learning how to insert dropdown menus and plotly graphs, with auto-update capabilities.  I think there is a lot of redundancy.  I would get rid of the gauge chart since, the demographic panel includes the participant's wash frequency, and the chart offers no new information.  There is also no indication of how wash frequency matters to the outcomes of the findings.  The scientist in me is also curious about the bacterial count, and how those values were defined and obtained, espcially since they are variables in 2 of the 3 graphs.  The bubble chart presents the same info as teh bar graph.  A more informative graph than the current bubble chart might be a cluster graph with bacteria strain names on the x-axis, bacterial count (highest for each donor) on the y-axis, and the participants grouped by their most prevelant bacterial strain.  This would show two things: 1) the most common strains of bacteria in the study; so for example, if 90% of participants cluster under a single strain; 2) and the highest amount of bacteria per strain.  It would be neat to somehow have the participant's datapoint on the graph become highlighted when their ID is selected from the dropdown menu, so they could see how their results compare to everyone else's results.
  
