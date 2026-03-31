from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Column, String, DateTime
from sqlalchemy.orm import sessionmaker, declarative_base
from pydantic import BaseModel
from typing import List
import os
import logging
import uuid
from datetime import datetime, timezone
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

DATABASE_URL = os.getenv('DATABASE_URL')
if not DATABASE_URL:
    raise ValueError('DATABASE_URL must be set in environment variables')

engine = create_engine(DATABASE_URL, echo=False, future=True)
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)
Base = declarative_base()

class StatusCheckDB(Base):
    __tablename__ = 'status_checks'

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    client_name = Column(String, nullable=False)
    timestamp = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False)

class StatusCheck(BaseModel):
    id: str
    client_name: str
    timestamp: datetime

    class Config:
        orm_mode = True

class StatusCheckCreate(BaseModel):
    client_name: str

app = FastAPI()

@app.on_event('startup')
def startup_event():
    Base.metadata.create_all(bind=engine)

@app.get('/api')
def root():
    return {'message': 'Hello World'}

@app.post('/api/status', response_model=StatusCheck)
def create_status_check(input: StatusCheckCreate):
    status = StatusCheckDB(client_name=input.client_name)
    with SessionLocal() as session:
        session.add(status)
        session.commit()
        session.refresh(status)
        return status

@app.get('/api/status', response_model=List[StatusCheck])
def get_status_checks():
    with SessionLocal() as session:
        checks = session.query(StatusCheckDB).all()
        return checks

app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv('CORS_ORIGINS', '*').split(','),
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)