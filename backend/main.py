from fastapi import FastAPI
from .database import init_db
from .routes import auth_routes, dashboard_routes

app = FastAPI(title="SIAG Webapp Demo PRO")

@app.on_event("startup")
def startup():
    init_db()

app.include_router(auth_routes.router)
app.include_router(dashboard_routes.router)
