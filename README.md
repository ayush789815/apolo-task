# Apollo Physician Clone

A full-stack web application inspired by Apollo247's General Physician page.  
This project includes a **Next.js frontend** and a **Node.js/Express/MongoDB backend**.

---

## Project Structure

```
backend/   # Node.js + Express + MongoDB API
frontend/  # Next.js + React frontend
```

---

## Features

- Doctor listing with filters (city, gender, experience)
- Pagination and sorting
- Add new doctor (admin)
- SEO optimized (title, meta, canonical, structured data)
- Responsive UI

---

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/ayush789815/apolo-task.git
cd apolo-task
```

### 2. Setup Backend

```sh
cd backend
npm install
# Configure your MongoDB URI in .env
npm start
```
- The backend runs on [http://localhost:5000](http://localhost:5000)

### 3. Setup Frontend

```sh
cd frontend
npm install
npm run dev
```
- The frontend runs on [http://localhost:3000](http://localhost:3000)

---

## Folder Details

- **backend/**: Express API, MongoDB models, controllers, routes
- **frontend/**: Next.js app, React components, API integration, styles

---

## Useful Scripts

### Backend

- `npm start` — Start backend server
- `npx nodemon server.js` — Start backend with auto-reload

### Frontend

- `npm run dev` — Start frontend in development mode
- `npm run build` — Build frontend for production
- `npm start` — Start frontend in production mode

---

## Environment Variables

- **backend/.env**:  
  ```
  MONGODB_URI=mongodb://localhost:27017/apollo-physicians
  PORT=5000
  ```

---

## License

MIT

---

## Author

[ayush789815](https://github.com/ayush789815)
