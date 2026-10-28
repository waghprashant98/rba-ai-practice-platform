from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="RBA Practice Platform API",
    description="Local starter API for a UK preschool practice platform.",
    version="0.1.0",
)

# Local development only. Restrict origins before deployment.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health_check():
    return {"status": "healthy", "project": "RBA Practice Platform"}


@app.get("/api/components")
def get_components():
    """Thirteen proposed practice areas; these are not official RBA component names."""
    items = [
        ("M1", "Counting Objects", "mathematics"),
        ("M2", "Recognizing Numerals", "mathematics"),
        ("M3", "Number Ordering", "mathematics"),
        ("M4", "Number Stories", "mathematics"),
        ("M5", "Early Addition", "mathematics"),
        ("M6", "Early Subtraction", "mathematics"),
        ("M7", "Patterns and Shapes", "mathematics"),
        ("M8", "Size and Measurement", "mathematics"),
        ("L1", "Vocabulary and Picture Identification", "literacy_language"),
        ("L2", "Listening and Sentence Understanding", "literacy_language"),
        ("L3", "Initial Sounds", "literacy_language"),
        ("L4", "Phonological Awareness", "literacy_language"),
        ("L5", "Story Comprehension", "literacy_language"),
    ]
    return {"components": [{"id": i, "name": n, "area": a} for i, n, a in items]}
