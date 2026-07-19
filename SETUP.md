# Setup Instructions

## Prerequisites

- Node.js (v18+)
- PostgreSQL (v14+)
- Docker & Docker Compose (optional, for containerized setup)
- Git

## Quick Start with Docker

```bash
# Clone the repository
git clone https://github.com/kavyadarji0708-art/The-Kavya-Journal.git
cd The-Kavya-Journal

# Start services
docker-compose up

# In another terminal, run migrations
docker-compose exec backend npm run migrate

# Application will be available at:
# Frontend: http://localhost:3000
# Backend: http://localhost:5000
```

## Manual Setup

### Backend Setup

```bash
cd backend
npm install

# Create .env file
cp .env.example .env
# Edit .env with your database credentials

# Run migrations
npm run migrate

# Start development server
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install

# Start development server
npm start
```

### Database Setup

```bash
# Create database
psql -U postgres -c "CREATE DATABASE kavya_journal;"

# Run migrations from backend directory
npm run migrate
```

## Environment Variables

See `.env.example` files in both `backend/` and `frontend/` directories.

## Development Workflow

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make changes
3. Test locally
4. Submit a pull request

## Testing

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```
