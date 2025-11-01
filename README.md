# ⚡ AI SaaS Frontend

A modern **AI SaaS web application** built with **Next.js**, **React Query**, and **Clerk**.  
This platform empowers users to generate AI content and images, remove image backgrounds or objects, and review resumes — all within an elegant, subscription-based interface.

---

## 🌟 Key Features

### 🧠 AI Services

- ✍️ **Text Generation** — Create AI-powered articles, blog posts, or titles.
- 🖼️ **Image Generation** — Turn text prompts into stunning visuals.
- 🪄 **Image Editing Tools**
  - Upload and **remove backgrounds**.
  - Upload and **remove unwanted objects**.
- 📄 **Resume Review** — Upload a resume and receive AI-generated improvement suggestions.

### 🔐 Authentication & Access Control

- Integrated with **Clerk** for secure authentication.
- Supports **Free** and **Premium** user plans.
- Role-based access to features based on plan type.

### 💾 Data & State Management

- Uses **React Query** for API caching, synchronization, and seamless UI updates.
- User creations and usage limits are fetched from the **backend API** (Neon + Clerk).

### ☁️ Cloud Integration

- **Cloudinary** for image uploads and optimization.
- Connects to the backend API for image processing and AI operations.

---

## 🧩 Tech Stack

| Category              | Technology                                |
| --------------------- | ----------------------------------------- |
| Framework             | **Next.js (App Router)**                  |
| Language              | **TypeScript**                            |
| State / Data Fetching | **React Query (TanStack Query)**          |
| Authentication        | **Clerk**                                 |
| Styling               | **Tailwind CSS + shadcn/ui**              |
| AI Backend            | Custom API (Express / Next.js API Routes) |
| Deployment            | Vercel                                    |

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Ehabzakout/quick-ai.git
cd  quick0ai
```

### 2️⃣ Install Dependencies

```bash
npm install

npm run dev
```

### 3️⃣ Configure Environment Variables

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = your key
CLERK_SECRET_KEY = your key
API  = your key
```
