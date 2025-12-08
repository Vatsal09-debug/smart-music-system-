from fastapi import APIRouter, Depends 
from sqlalchemy.orm import Session 
from app import models 
from app.database import SessionLocal 
from pydantic import BaseModel 


router = APIRouter(prefix= "/rooms", tags= ["Rooms"])
class RoomCreate(BaseModel):
    code: str

# ✅ Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ✅ POST /rooms → Create a room
@router.post("/")
def create_room(room: RoomCreate, db: Session = Depends(get_db)):
    new_room = models.Room(code=room.code)
    db.add(new_room)
    db.commit()
    db.refresh(new_room)
    return new_room


# ✅ GET /rooms → List all rooms
@router.get("/")
def get_rooms(db: Session = Depends(get_db)):
    return db.query(models.Room).all()