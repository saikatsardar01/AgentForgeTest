@REM @echo off
@REM echo 🚀 Starting Hybrid AI Agent Platform...

@REM echo.
@REM echo [1/2] Starting Python AI Engine (Port 5001)...
@REM start "AI Engine (Flask+Agno)" cmd /k "cd backend\ai_engine && python app.py"

@REM echo.
@REM echo [2/2] Starting Node.js Backend (Port 5000)...
@REM start "Node.js Backend" cmd /k "cd backend && npm run dev"

@REM echo.
@REM echo ✅ Services starting...
@REM echo    - AI Engine: http://localhost:5001
@REM echo    - Main API:  http://localhost:5000
@REM echo.
@REM echo Don't forget to set GEMINI_API_KEY in backend\ai_engine\.env !
