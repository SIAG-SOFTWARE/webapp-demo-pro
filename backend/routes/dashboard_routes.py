from fastapi import APIRouter, Depends
from ..deps import get_current_user

router = APIRouter(prefix="/dashboard", tags=["dashboard"])

@router.get("/stats")
def stats(user = Depends(get_current_user)):
    return {
        "user": user["username"],
        "role": user["role"],
        "mrr": 1200,
        "active_customers": 33,
        "job_queue": 7,
        "conversion_rate": "27%"
    }
