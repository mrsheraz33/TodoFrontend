# Full Stack Todo App

A complete Todo application built with **MERN stack** (MongoDB, Express, React, Node.js) with **Redux Toolkit** for state management.  
Frontend is built with **React + Tailwind CSS** and communicates with a **Node.js + Express backend**.

---

## 🚀 Features

- ✅ Full CRUD operations (Create, Read, Update, Delete)  
- ✅ Toggle todo completion  
- ✅ Real-time updates  
- ✅ Loading states  
- ✅ Error handling  
- ✅ Responsive design with Tailwind CSS  
- ✅ Redux Toolkit state management  
- ✅ RESTful API backend  

---

## 📋 Prerequisites

- Node.js (v14 or higher)  
- MongoDB (local installation or MongoDB Atlas account)  
- npm or yarn package manager  

---

## 🔧 Installation

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Update .env with your MongoDB URI
npm run dev
```

Server will run at:

```
http://localhost:5000
```

### Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env
# Update .env with your backend URL
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

> If you are using Vercel for both frontend and backend, set `.env` like:

```
VITE_API_URL=https://todo-backend-phi-two.vercel.app/api/todos
```

---

## 🌐 API Endpoints (Backend)

### Get all todos
```http
GET /api/todos
```

### Get single todo
```http
GET /api/todos/:id
```

### Create new todo
```http
POST /api/todos
```

Example request body:

```json
{
  "title": "Learn Redux Toolkit",
  "description": "Practice async thunks and slices"
}
```

### Update todo
```http
PUT /api/todos/:id
```

Example request body:

```json
{
  "title": "Updated Todo Title",
  "description": "Updated description",
  "completed": true
}
```

### Delete todo
```http
DELETE /api/todos/:id
```

---

## 🌎 Deployment Notes

### Backend (Vercel)

- Convert Express app to **serverless function**  
- Remove `app.listen()`  
- Use **MongoDB Atlas** for production  
- Enable **CORS** with frontend URL  

Example CORS:

```js
app.use(cors({
  origin: 'https://todo-frontend-beige-rho.vercel.app',
  methods: ['GET','POST','PUT','DELETE'],
}));
```

### Frontend (Vercel)

- Update `.env` with deployed backend URL:  
  ```
  VITE_API_URL=https://todo-backend-phi-two.vercel.app/api/todos
  ```
- Deploy normally via Vercel dashboard or CLI  

---

## 🧪 Testing

- Use **Postman**, **Thunder Client**, or browser DevTools network tab  
- Ensure backend is running and API URL is correct  

---



