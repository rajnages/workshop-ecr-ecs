from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class User(BaseModel):
    id: int
    name: str
    email: str

users = []

@app.get("/users")
async def get_users():
    return users

@app.post("/users")
async def create_user(user: User):
    users.append(user)
    return user

@app.get("/health")
async def health_check():
    return {"status": "healthy"}