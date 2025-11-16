from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import models, schemas
from ..utils.security import hash_password, verify_password
from ..utils.jwt_handler import create_token
from ..deps import get_db

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/register", response_model=schemas.Token)
def register(payload: schemas.UserCreate, db: Session = Depends(get_db)):
    existing = db.query(models.User).filter(models.User.username == payload.username).first()
    if existing:
        raise HTTPException(400, "User already exists")

    user = models.User(
        username=payload.username,
        hashed_password=hash_password(payload.password),
        role="admin" if payload.username == "admin" else "user"
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    token = create_token({"id": user.id, "username": user.username, "role": user.role})
    return {"access_token": token}

@router.post("/login", response_model=schemas.Token)
def login(payload: schemas.UserCreate, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.username == payload.username).first()
    if not user or not verify_password(payload.password, user.hashed_password):
        raise HTTPException(401, "Invalid credentials")

    token = create_token({"id": user.id, "username": user.username, "role": user.role})
    return {"access_token": token}
