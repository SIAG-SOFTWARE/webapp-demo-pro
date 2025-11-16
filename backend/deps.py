from fastapi import Depends, HTTPException, Header
from sqlalchemy.orm import Session
from .database import SessionLocal
from .utils.jwt_handler import decode_token

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def get_current_user(authorization: str = Header(None)):
    if not authorization:
        raise HTTPException(401, "Missing Authorization header")

    scheme, token = authorization.split()
    if scheme.lower() != "bearer":
        raise HTTPException(401, "Invalid auth scheme")

    user_data = decode_token(token)
    if not user_data:
        raise HTTPException(401, "Invalid or expired token")

    return user_data
