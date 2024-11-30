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

# Serve static files (CSS, JS, etc.)
app.mount("/static", StaticFiles(directory="static"), name="static")

# Load the CSV file for data
df = pd.read_csv("data/clean/combined.csv")
df = df.sort_values(by="Population", ascending=False)
sampledf = df.head(10)


def apply_filters(
    income: int,
    vacant_homes: float,
    unemployment: float,
    travel: int,
    remote: float,
):
    # Apply filters to the dataframe
    filtered_data = df[
        (df["Vacant_Homes_Percent"] >= vacant_homes)
        & (df["Worker_Income"] <= income)
        & (df["Unemployment (%)"] <= unemployment)
        & (df["Travel_Time"] <= travel)
        & (df["Remote (%)"] >= remote)
    ]

    # Limit the result to the top 10
    return filtered_data.head(10)


@app.get("/")
async def home(
    request: Request,
    income: int = 100000,  # Default values for filters
    vacant_homes: float = 3.0,
    unemployment: float = 13.0,
    travel: int = 35,
    remote: float = 0.0,
):
    return templates.TemplateResponse(
        "index.html",
        {
            "request": request,
            "data": sampledf.to_dict(orient="records"),
            "income": income,
            "vacant_homes": vacant_homes,
            "unemployment": unemployment,
            "travel": travel,
            "remote": remote,
        },
    )


@app.get("/index.html")
async def home(
    request: Request,
    income: int = 100000,  # Default values for filters
    vacant_homes: float = 3.0,
    unemployment: float = 13.0,
    travel: int = 35,
    remote: float = 0.0,
):
    return templates.TemplateResponse(
        "index.html",
        {
            "request": request,
            "data": sampledf.to_dict(orient="records"),
            "income": income,
            "vacant_homes": vacant_homes,
            "unemployment": unemployment,
            "travel": travel,
            "remote": remote,
        },
    )


@app.get("/about.html")
async def home(request: Request):
    return templates.TemplateResponse(
        "about.html",
        {
            "request": request,
        },
    )


@app.get("/homefinder")
async def homefinder(
    request: Request,
    income: int = 100000,  # Default values for filters
    vacant_homes: float = 3.0,
    unemployment: float = 13.0,
    travel: int = 35,
    remote: float = 0.0,
):
    # Apply filters to the dataframe
    filtered_data = apply_filters(income, vacant_homes, unemployment, travel, remote)

    return templates.TemplateResponse(
        "index.html",
        {
            "request": request,
            "data": filtered_data.to_dict(orient="records"),
            "income": income,
            "vacant_homes": vacant_homes,
            "unemployment": unemployment,
            "travel": travel,
            "remote": remote,
        },
    )


@app.get("/homefinder/data")
async def get_map_data():
    return JSONResponse(sampledf.to_dict(orient="records"))


# # doesn't work - only uses default values, not dynamic.
# @app.get("/homefinder/data")
# async def get_map_data(
#     request: Request,
#     income: int = 100000,  # Default values for filters
#     vacant_homes: float = 3.0,
#     unemployment: float = 13.0,
#     travel: int = 35,
#     remote: float = 0.0,
# ):

#     filtered_data = apply_filters(income, vacant_homes, unemployment, travel, remote)

#     data = await homefinder(
#         {
#             "request": request,
#             "data": filtered_data.to_dict(orient="records"),
#         }
#     )
#     return JSONResponse(data["data"])


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
