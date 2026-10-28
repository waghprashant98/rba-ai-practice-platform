# Architecture plan

Fixed requirements:
- 13 practice components, 10 questions per component.
- Returning student identified by a persistent student ID, with secure parent access.
- Load prior history and performance before choosing the first question on return.
- Adapt each next question using recent responses and history.
- Generate fresh question text, illustration, and audio dynamically; persist progress/history rather than a static question bank.
- Child UI must not show marks, percentages, or leaderboards.
- React + TypeScript + Vite, Python + FastAPI, LangChain + LangGraph, OpenAI API, Supabase PostgreSQL.
- Local development first; no AWS deployment yet.

Planned graph: load history -> choose component/difficulty -> generate structured question -> validate answer key/content -> generate image -> generate speech -> present -> evaluate response -> update state -> persist progress -> loop until 10 questions are completed.

Use deterministic checks where possible. Proposed 13 practice areas are not official RBA component names; validate curriculum against current England guidance before launch.
