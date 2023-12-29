from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from strawberry.fastapi import GraphQLRouter
from api.schema import schema

graphql_app = GraphQLRouter(schema)

app = FastAPI()
origins = [
    # "*",
    "http://localhost:5173/"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    max_age=3600
)

app.include_router(graphql_app, prefix="/graphql")
