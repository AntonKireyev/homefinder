# Homefinder

Final Project for the OIM3600 Course

![image](https://github.com/user-attachments/assets/d8ae5276-aa85-4700-94ae-978de5350ab3)


1. <strong> Project Overview: </strong> </br>

Homefinder is designed to provide users with a dynamic and interactive platform to explore and visualize metropolitan statistical area statistics. By applying customizable filters, users can view relevant data directly on an interactive map. The future integration of the Llama 3.2 large language model enhances user experience by enabling conversational filtering, where users can refine their criteria through natural language interactions.

2. <strong> Usage Guidelines: </strong> </br>

Accessing the Platform:</br>

* Open the web application in any modern browser.
* Select predefined filters (e.g., population size, commitability, home availability, income) from dropdowns or sliders.

Viewing Results:</br>
* A dynamic map updates in real time to display areas matching the selected criteria.
* A Table is also dynamically updated that matches the results shown on the map

3. <strong> Dependencies: </strong>

Frontend:</br>

* Leaflet.js: For rendering interactive maps.
* Bootstrap: For styling the application.

Backend:</br>
* FastAPI for API handling.
* <i> SQLite for persistent data storage (Maybe) </i>

AI and NLP: </br>
* <i> Llama 3.2 Large Language Model (If time allows) </i>

APIs:
* Open Data Platforms: U.S. Census Bureau
* Geocoding API for mapping county names to lat/long coordinates

4. <strong> Project Structure: </strong>

```
Homefinder/
│
├── data/
│     ├── clean/
│     │     ├── combined.csv                    # Final dataset used, combines other clean datasets into one file 
│     │     ├── geodf.csv                       # cleaned geographic information dataset, derived from MSA_REFERENCE.csv
│     │     ├── housing.csv                     # cleaned housing data dataset, derived from MSA_HOUSING_UNITS.csv
│     │     ├── labor.csv                       # cleaned labor data dataset, derived from MSA_LABOR_TRAVEL_INCOME.csv
│     │     └── population.csv                  # cleaned population data dataset, derived from MSA_POP_HOUSING.csv
│     └── raw/ 
│           ├── MSA_HOUSING_UNITS.csv           # Raw housing data on the MSA level from the U.S Census 
│           ├── MSA_LABOR_TRAVEL_INCOME.csv     # Raw emplyoment data on the MSA level from the U.S Census 
│           ├── MSA_POP_HOUSING.csv             # Raw population and housing data on the MSA level from the U.S Census 
│           └── MSA_REFERENCE.csv               # Raw geographic data on the county level from the U.S Census 
│ 
├── fastapi/ 
│       └── main.py                             # Main FastAPI application 
│ 
├── pages/ 
│      ├── index.html                           # Main landing page (with map and filters) 
│      └── about.html                           # About page 
│ 
├── static/ 
│       ├── css/ 
│       │     ├── index.css                     # css for page styling 
│       │     └── map.css                       # css for map styling 
│       ├── js/ 
│       │    ├── index.js                       # JavaScript to handle sliders and filter input values 
│       │    └── map.js                         # JavaScript for map rendering and interactivity 
│       └── assets/ 
│             └── cityscape.ico                 # favicon 
│ 
├── census_api.ipynb                            # testing notebook for the census API (Not in Use) 
├── cleaning.ipynb                              # notebook used for cleaning all the data found in data/raw 
├── notes.ipynb                                 # notebook used to keep code samples for potential future use 
├── README.md                                   # Documentation and project overview 
└── .gitignore                                  # Git ignore rules 
```

</br>

5. <strong> Acknowledgements: </strong>

* <a href="https://www.census.gov/"> Census Data </a>
* <a href="https://leafletjs.com/index.html"> Leaflet </a>
* <a href="https://geopy.readthedocs.io/en/stable/"> Geocoding API </a>
* <a href="https://getbootstrap.com/"> Bootstrap </a>
* <a href="https://chatgpt.com/"> Chat GPT </a>

6. <strong> Reflection: </strong>

What went well: </br>
* Being able to integrade both front-end and back-end features, and actually create something that functions.
* working with Bootstrap was incredibly easy and intuitive, the Bootstrap documentation is fairly easy to follow, and the templates provided were fairly easy to use and implement.
* Fast-Api's benefit of being in Python made it intuitive to integrate pandas for data-management.

Challenges Faced: </br>
* Connecting with data and being able to integrate it successfully. Use of APIs would have been preffered but given the scope of the project I was not able to integrate them in time.
* Performing data management on census data was incredibly time-consuming, but was worth it for the end-result.
* Fast-API was interesting to work with, but I found that I still had a lot to learn about it's use-cases and how to use it well.
* Project planning was a critical challenge that I faced, I had a large issue with my codebase and file management system.

Use of GenAI: </br>
* I used ChatGPT as a consultant for this project, I was able to get assistance with front-end UI building, javascript functions, as well as strategies for connecting the front-end to the back-end. I believe the use of Chat was incredibly useful, however without manual interpretation and specific prompting would have been useless.
* Understanding tools became a lot easier and more intuitive through explanations generated by chat, I was able to understand certain functions at a deeper level, and it made connection various tools together more intuitive.

Further Improvements: </br>
* Re-build database to pull from an API to get the most updated information.
* Implement SQLite or similar tool for persistent storage, letting users save their queries and search results.
* Implement an AI assistant to help users build Queries or adjust parameters (Lamma/ChatGPT).
* Rebuild UI and Filters, giving users more flexibility and more intuitive search parameters.
* Create Export and Share functionality
  * Export: Download CSV (of table data), Download PNG of Map Image
  * Share: Share live site view directly (with filters applied), or create custom snapshot to share (social media platforms/link)
