🟩 README — SIAG Software Webapp Demo PRO
SIAG Webapp Demo PRO

Full-stack demo for modern SaaS architecture
FastAPI + JWT + React + Tailwind + Modular Architecture

🧠 Overview

Webapp Demo PRO showcases how SIAG Software builds real production-grade web applications:

Clean full-stack architecture

Real authentication with JWT

User roles (admin / user)

Dashboard with dynamic stats

Professional UI using Tailwind

API & frontend decoupled

Easy Docker support

This is the intermediate version used to demonstrate SIAG Software’s full-stack capabilities to clients.

🚀 Features
🔐 Backend (FastAPI)

JWT Authentication

User registration + login

Roles: admin, user

Modular router structure

SQLAlchemy models

Secure password hashing

CORS configured

.env driven configuration

🎨 Frontend (React + Tailwind)

Clean, modern UI

Login form

Stats dashboard

Reusable components

Responsive layout

Simple API wrapper

🧩 Architecture
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
│   └── .env.example
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
└── docker-compose.yml
└──README.md
```

⚙️ Backend Setup
1. Install dependencies
cd backend
pip install -r requirements.txt

2. Create .env

Copy .env.example → .env

DATABASE_URL=sqlite:///./siag_web_demo_pro.db
SECRET_KEY=changeme
JWT_ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=120
API_NAME="SIAG Webapp Demo PRO"

3. Run backend
uvicorn backend.main:app --reload


The backend runs at:
👉 http://localhost:8000

Open API docs:
👉 http://localhost:8000/docs

🎨 Frontend Setup
1. Install dependencies
cd frontend
npm install

2. Run dev server
npm run dev


Frontend runs at:
👉 http://localhost:5173

🧪 Test Flow
Register

POST → /auth/register
Body:

{ "username": "admin", "password": "1234" }

Login

POST → /auth/login

Response:

{ "access_token": "xxx", "token_type": "bearer" }

Access Dashboard

GET → /dashboard/stats
Headers:

Authorization: Bearer YOUR_TOKEN

📊 Dashboard Preview

🧩 Docker (Optional)

A working docker-compose.yml is already included.

Run with:

docker compose up --build

📦 License

MIT License © 2025 — SIAG Software

🌐 About SIAG Software

SIAG Software builds pragmatic, scalable tools for modern businesses:

AI chatbots

Workflow automation

Custom scrapers

Full-stack webapps

Contact: siag.software@protonmail.com
