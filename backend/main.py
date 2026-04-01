from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def project_health():
    return "Up and running"