# Homefinder

Final Project for the OIM3600 Course

![image](https://github.com/user-attachments/assets/76ecf54d-311a-49c9-932f-6895618d11e8)

1. Project Overview:

Homefinder is designed to provide users with a dynamic and interactive platform to explore and visualize metropolitan statistical area statistics. By applying customizable filters, users can view relevant data directly on an interactive map. The future integration of the Llama 3.2 large language model enhances user experience by enabling conversational filtering, where users can refine their criteria through natural language interactions.

2. Usage Guidelines

Accessing the Platform:
Open the web application in any modern browser.

Select predefined filters (e.g., population size, commitability, home availability, income) from dropdowns or sliders.
Use the integrated chat feature powered by Llama 3.2 to adjust filters conversationally. Example: “Show me cities with a population over 100,000 and with more than 10% vacant homes".

Viewing Results:
A dynamic map updates in real time to display areas matching the selected criteria.

3. Dependencies

Frontend:

Leaflet.js: For rendering interactive maps.
Bootstrap: For styling the application.

Backend:
FastAPI for API handling.

<i> SQLite for persistent data storage (Maybe) </i>

AI and NLP:
<i> Llama 3.2 Large Language Model (If time allows) </i>

APIs:
Open Data Platforms: U.S. Census Bureau
Geocoding API for mapping county names to lat/long coordinates

4. Project Structure

Homefinder/</br>
│</br>
├── data/</br>
│ ├── clean/</br>
│ │     ├── combined.csv # Final dataset used, combines other clean datasets into one file </br>
│ │     ├── geodf.csv # cleaned geographic information dataset, derived from MSA_REFERENCE.csv
│ │     ├── housing.csv # cleaned housing data dataset, derived from MSA_HOUSING_UNITS.csv
│ │     ├── labor.csv # cleaned labor data dataset, derived from MSA_LABOR_TRAVEL_INCOME.csv
│ │     └── population.csv # cleaned population data dataset, derived from MSA_POP_HOUSING.csv
│ └── raw/
│       ├── MSA_HOUSING_UNITS.csv # Raw housing data on the MSA level from the U.S Census
│       ├── MSA_LABOR_TRAVEL_INCOME.csv # Raw emplyoment data on the MSA level from the U.S Census
│       ├── MSA_POP_HOUSING.csv # Raw population and housing data on the MSA level from the U.S Census
│       └── MSA_REFERENCE.csv # Raw geographic data on the county level from the U.S Census
│
├── fastapi/
│       └── main.py # Main FastAPI application
│
├── pages/
│       ├── index.html # Main landing page (with map and filters)
│       └── about.html # About page
│
├── static/
│ ├── css/
│ │     ├── index.css # css for page styling
│ │     └── map.css # css for map styling
│ ├── js/
│ │     ├── index.js # JavaScript to handle sliders and filter input values
│ │     └── map.js # JavaScript for map rendering and interactivity
│ └── assets/
│       └── cityscape.ico # favicon
│
├── census_api.ipynb # testing notebook for the census API (Not in Use)
├── cleaning.ipynb # notebook used for cleaning all the data found in data/raw
├── cleaning.ipynb # notebook used to keep code samples for potential future use
├── README.md # Documentation and project overview
└── .gitignore # Git ignore rules

5. Acknowledgments

Census Data
Leaflet
Geocoding API

6. Reflection

Reflect on the project experience, focusing on both the process and learning perspectives.

Consider what went well, challenges faced, and how this experience can benefit you in future projects.

While the reflection can cover any aspects meaningful to you, feel free to draw insights from areas such as project planning, problem-solving, or using GenAI tools like ChatGPT.
