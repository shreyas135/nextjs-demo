# Next.js Examples Collection

This repository contains a set of practical **Next.js projects** demonstrating different features and integrations. Each example is self‑contained and focuses on a specific use case.

---

## 📂 Examples

### 1. Supabase Signup / Login and Todos
- Implements **authentication** using Supabase (signup & login).
- Demonstrates **CRUD operations** for a Todo list stored in Supabase.
- Covers:
  - User registration and login flows
  - Protected routes with proxy.ts (a middleware)
  - Database integration with Supabase

---

### 2. eKart (Redux Example)
- A simple **e‑commerce demo** with product listing and cart functionality.
- Uses **Redux** for global state management.
- Features:
  - Product list fetched from API
  - Add to cart / remove from cart
  - Cart count displayed in header

---

### 3. Posts (REST API + Lazy Loading)
- Demonstrates fetching data from a **REST API**.
- Implements **lazy loading** with React Suspense.
- Includes:
  - Posts list page (`app/posts/page.tsx`)
  - Single post page (`app/posts/[id]/page.tsx`)
  - Route‑level loader (`loading.tsx`) for smooth UX

---

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/shreyas135/nextjs-demo.git
   cd nextjs-demo
2. npm install
3. npm run dev
4. npm run build  (Build the project for production)
5. Open http://localhost:3000 in your browser.