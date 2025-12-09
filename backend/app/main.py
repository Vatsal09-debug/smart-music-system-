from fastapi import FastAPI
from app.database import engine
from app import models
from app.routes import room
from app.routes.auth.auth import router as auth_router

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(room.router)
app.include_router(auth_router)

@app.get("/")
def root():
   return {"message": "Smart Music System Backend is Running 🚀"}