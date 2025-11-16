SIAG Software – Webapp Demo PRO

Full-Stack Authentication · Role System · Dashboard API · Modern React UI

This repository showcases a professional-grade demo of how SIAG Software builds full-stack web applications for clients.
It includes a FastAPI backend, a clean React interface, authentication flow, roles, protected dashboard, reusable components, and Docker support.

🚀 Features
Backend (FastAPI)

User registration & login

Secure password hashing (bcrypt)

JWT authentication

Role-based access (admin / user)

Protected routes (/dashboard/stats)

SQLite database + SQLAlchemy ORM

Modular routes, dependencies & utils

Full CORS support

.env configuration inside backend/

Frontend (React + Vite + Tailwind)

Login form (component-based)

Token persistence (per session)

Dashboard UI with business KPIs

Reusable components (ChartBox, etc.)

Clean and modern design

API layer auto-configurable

Docker Support

One-command local dev environment

Hot reload for backend and frontend

Proper container separation

🧱 Project Structure
```
webapp-demo-pro/
│
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── deps.py
│   ├── auth.py
│   ├── roles.py
│   ├── routes/
│   │   ├── auth_routes.py
│   │   ├── dashboard_routes.py
│   │   └── users_routes.py
│   ├── utils/
│   │   ├── jwt_handler.py
│   │   └── security.py
│   ├── requirements.txt
│   └── .env.example       ← ✔️ Correcto: se queda aquí
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── api.js
│   │   ├── main.jsx
│   │   ├── components/
│   │   │   ├── LoginForm.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── ChartBox.jsx
│   ├── index.html
│   ├── package.json
│   └── tailwind.config.js
│
├── docs/
│   ├── login.png
│   └── dashboard.png
│
├── docker-compose.yml
└── README.md
```

⚙️ Setup — Backend
Install requirements
pip install -r backend/requirements.txt

Create .env

Copy:

backend/.env.example → backend/.env


Fill required keys (DB, secrets, token expiry, etc).

Run
uvicorn backend.main:app --reload


Backend URL:
http://localhost:8000

🎨 Setup — Frontend
cd frontend
npm install
npm run dev


Frontend URL:
http://localhost:5173

🐳 Run with Docker
docker-compose up --build

🔐 API Routes
POST /auth/register

Register user.

POST /auth/login

Returns JWT token.

GET /dashboard/stats

Protected.

Requires:

Authorization: Bearer <token>

🖼 Screenshots
Login

docs/login.png

Dashboard

docs/dashboard.png

🧩 About SIAG Software

SIAG Software builds AI tools, automation pipelines, full-stack systems, scrapers, and production-ready solutions.

GitHub: https://github.com/SIAG-SOFTWARE

Contact: siag.software@protonmail.com
