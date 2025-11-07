* **Next.js (App Router)**
* **OpenRouter API Key (for AI responses)**
* **Supabase (Auth + Database + Storage)**

---
### README.md (copy–paste into your repo)

```
# AI Mock Interview Platform  
AI Voice-based Interview + Real-time Evaluation + Auto Analysis

A Next.js based AI Interview Platform where users can:
- Practice mock interviews (Voice or Text-based)
- Get real-time feedback & score evaluation
- View past interview results stored in Supabase

---
## Tech Stack

| Component         | Technology Used |
|------------------|------------------|
| Frontend UI      | Next.js (App Router) |
| Styling          | TailwindCSS |
| Authentication   | Supabase Auth |
| Database         | Supabase PostgreSQL |
| AI Responses     | OpenRouter API (GPT models / LLaMA / etc.) |
| State Mgmt       | React Context API |
| Deployment       | Vercel |

---
## Features

**AI-driven mock interview (voice / text)**  
**Question difficulty adapts based on user response**  
**Smart evaluation (fluency, clarity, confidence, relevance)**  
**Stores results & progress in Supabase**  
**Minimal UI, clean, fast, responsive**

---
## Environment Variables

Create a `.env.local` file in root and add:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# OpenRouter API (Use GPT or LLaMA models)
OPENROUTER_API_KEY=your_openrouter_api_key
````
---

## Running the project locally

```sh
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```
App launches at:
[http://localhost:3000/](http://localhost:3000/)

---
## API Usage Example (OpenRouter)

```ts
export async function generateAIResponse(prompt: string) {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    })
  });

  return response.json();
}
```
---
## Supabase Setup

1. Go to [https://supabase.com](https://supabase.com)
2. Create new project
3. Copy Supabase URL & anon key → put into `.env.local`
4. Create a table:

```sql
create table interviews (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid,
  question text,
  answer text,
  score jsonb,
  created_at timestamp default now()
);
```
---
## Deployment (Vercel)
```sh
vercel deploy
```

Add same env vars in Vercel project settings.

---


