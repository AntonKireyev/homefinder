from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.templating import Jinja2Templates
import pandas as pd
import uvicorn
from fastapi.staticfiles import StaticFiles
import json

app = FastAPI()

# Set up template rendering
templates = Jinja2Templates(directory="pages")

# Serve static files
app.mount("/static", StaticFiles(directory="static"), name="static")

# Load the CSV file for data
df = pd.read_csv("data/clean/combined.csv")
# sorting the data by population to return the largest areas first.
df = df.sort_values(
    by="Population", ascending=False
)  # can be changed in the future to let users choose the sorting method


def apply_filters(
    income: int,
    vacant_homes: float,
    unemployment: float,
    travel: int,
    remote: float,
    locations: int,
):
    """
    returns a pandas dataframe of locations that match the filters provided

    Parameters:
        income (int): filter input by user, indicates maximum median personal income
        vacant_homes (float): filter input by user, indicates minimum % value of vacant homes
        unemployment (float): filter input by user, indicates maximum unemplyoment %
        travel (int): filter input by user, indicates maximum travel time to work (minutes)
        remote (float): filter input by user, indicates minimum remote workers in the area (%).

    Returns:
        filtered_data.head(locations) (pandas dataframe): returns a dataframe of the top N locations (indicated by locations variable) by population given the filters
    """
    # Apply filters to the dataframe
    filtered_data = df[
        (df["Vacant_Homes_Percent"] >= vacant_homes)
        & (df["Worker_Income"] <= income)
        & (df["Unemployment (%)"] <= unemployment)
        & (df["Travel_Time"] <= travel)
        & (df["Remote (%)"] >= remote)
    ]

    # Limit the result to the top N locations
    return filtered_data.head(locations)


@app.get("/")
async def home(
    request: Request,
    income: int = 100000,  # Default values for filters
    vacant_homes: float = 3.0,
    unemployment: float = 13.0,
    travel: int = 35,
    remote: float = 0.0,
    locations: int = 15,
):
    """
    updates the main webpage with the filtered data

    Parameters:
        income (int): filter input by user, indicates maximum median personal income
        vacant_homes (float): filter input by user, indicates minimum % value of vacant homes
        unemployment (float): filter input by user, indicates maximum unemplyoment %
        travel (int): filter input by user, indicates maximum travel time to work (minutes)
        remote (float): filter input by user, indicates minimum remote workers in the area (%).

    Returns:
        data: data used by table
        json_data: data used by map
        income: filter value
        vacant_homes: filter value
        unemployment: filter value
        travel: filter value
        remote: filter value
    """

    filtered_data = apply_filters(
        income, vacant_homes, unemployment, travel, remote, locations
    )

    return templates.TemplateResponse(
        "index.html",
        {
            "request": request,
            "data": filtered_data.to_dict(orient="records"),
            "json_data": filtered_data.to_json(orient="records"),
            "income": income,
            "vacant_homes": vacant_homes,
            "unemployment": unemployment,
            "travel": travel,
            "remote": remote,
            "locations": locations,
        },
    )


@app.get("/about.html")
async def home(request: Request):
    """
    returns the about page
    """
    return templates.TemplateResponse(
        "about.html",
        {
            "request": request,
        },
    )


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
