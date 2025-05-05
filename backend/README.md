# Apollo Physician Clone - Backend

This is the backend API for the Apollo Physician Clone project. It is built with **Node.js**, **Express**, and **MongoDB**.

## Features

- Add new doctors
- List doctors with filters and pagination
- MongoDB database integration

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB (running locally or provide a connection string)

### Installation

```bash
cd backend
npm install
```

### Environment Variables

Create a `.env` file in the `backend` directory:

```
MONGODB_URI=mongodb://localhost:27017/apollo-physicians
PORT=5000
```

### Running the Server

```bash
node server.js
# or with nodemon for development
npx nodemon server.js
```

The backend will run on [http://localhost:5000](http://localhost:5000).

### API Endpoints

- `POST /api/add-doctor` — Add a new doctor
- `GET /api/list-doctors` — List doctors with filters and pagination

## Project Structure

- `controllers/` — API logic
- `models/` — Mongoose schemas
- `routes/` — Express routes
- `app.js` — Express app setup
- `server.js` — Server entry point

---