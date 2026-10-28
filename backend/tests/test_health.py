from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_health_check():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "healthy"


def test_thirteen_components():
    response = client.get("/api/components")
    assert response.status_code == 200
    assert len(response.json()["components"]) == 13
