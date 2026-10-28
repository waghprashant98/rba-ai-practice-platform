# RBA Practice Platform — Local Starter

Editable starter for a UK early-years practice platform. It is a scaffold, not a complete production assessment product.

## Current features
- React + TypeScript + Vite frontend
- Python + FastAPI backend
- 13 proposed practice areas, 10 questions planned per area
- Student ID entry UI (not yet backed by authentication or persistence)
- Architecture notes for LangChain, LangGraph, OpenAI and Supabase

## Run locally
Requirements: Node.js, Python 3.11+, VS Code.

### Backend (terminal 1)
```powershell
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
Copy-Item .env.example .env
uvicorn app.main:app --reload
```
Open http://127.0.0.1:8000/docs

### Frontend (terminal 2)
```powershell
cd frontend
npm install
Copy-Item .env.example .env
npm run dev
```
Open the Vite URL printed in the terminal.

## Important
AI question/image/audio generation, Supabase persistence, student authentication, parent dashboard and adaptive difficulty are not wired up yet. API keys must stay on the backend. Use synthetic test data only until privacy and security controls are implemented. This is for practice, not a replacement for the statutory RBA.
