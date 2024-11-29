from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
import pandas as pd
import uvicorn

app = FastAPI()

templates = Jinja2Templates("pages")

# Load the data
census_data = pd.read_csv("data/clean/combined.csv")


@app.get("/", response_class=HTMLResponse)
def homepage(request: Request):
    return {
        "request": request,
    }


# async def filter_data(request: Request):
#     form = await request.form()
#     vacant_homes = form.get("vacant_homes")
#     income = form.get("income")
#     unemployment = form.get("unemployment")
#     travel = form.get("travel")
#     remote = form.get("remote")

#     # Filter the data using the form inputs
#     filtered_data = census_data[
#         (census_data["vacant_homes"] >= vacant_homes)
#         & (census_data["Worker_Income"] <= income)
#         & (census_data["Unemployment (%)"] <= unemployment)
#         & (census_data["Travel_Time"] <= travel)
#         & (census_data["Remote (%)"] >= remote)
#     ]

#     filtered_data = filtered_data.head(10).to_dict(orient="records")

#     # Return the filtered data in the template
#     return templates.TemplateResponse(
#         "pages/index.html",
#         {
#             "request": request,
#             "data": filtered_data,
#         },
#     )


# # @app.post("pages/index.html", response_class=HTMLResponse)
# # async def filter_data(request: Request):
# #     form = await request.form()
# #     vacant_homes = form.get("vacant_homes")
# #     income = form.get("income")
# #     unemployment = form.get("unemployment")
# #     travel = form.get("travel")
# #     remote = form.get("remote")

# #     # Filter the data using the form inputs
# #     filtered_data = census_data[
# #         (census_data["vacant_homes"] >= vacant_homes)
# #         & (census_data["Worker_Income"] <= income)
# #         & (census_data["Unemployment (%)"] <= unemployment)
# #         & (census_data["Travel_Time"] <= travel)
# #         & (census_data["Remote (%)"] >= remote)
# #     ]

# #     filtered_data = filtered_data.head(10).to_dict(orient="records")

# #     # Return the filtered data in the template
# #     return templates.TemplateResponse(
# #         "pages/index.html",
# #         {
# #             "request": request,
# #             "data": filtered_data,
# #         },
# #     )


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
