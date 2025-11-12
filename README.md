# AI Mock Interview Platform

A modern, AI-powered mock interview platform that helps users practice and improve their interview skills through voice and text-based interviews with real-time feedback and performance analysis.

## Features

### Core Functionality
- AI-driven Mock Interviews - Voice or text-based interview sessions
- Real-time Evaluation - Instant feedback on responses
- Adaptive Questioning - Difficulty adjusts based on user performance
- Performance Analytics - Track progress over time
- Session Storage - Save and review past interviews

### Evaluation Metrics
- Fluency - Speech flow and coherence
- Clarity - Response structure and organization
- Confidence - Delivery and conviction
- Relevance - Answer quality and appropriateness

## Tech Stack

| Component | Technology |
|-----------|------------|
| Frontend Framework | Next.js 14 (App Router) |
| Styling | TailwindCSS |
| Authentication | Supabase Auth |
| Database | Supabase PostgreSQL |
| File Storage | Supabase Storage |
| AI Service | OpenRouter API (GPT-4, LLaMA, etc.) |
| State Management | React Context API |
| Deployment | Vercel |

## Prerequisites

Before you begin, ensure you have:
- Node.js 18+ installed
- A Supabase account
- An OpenRouter API key

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ai-mock-interview-platform.git
cd ai-mock-interview-platform
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
OPENROUTER_API_KEY=your_openrouter_api_key
```

### 4. Supabase Setup

Create a new project at Supabase and run the following SQL in the SQL editor:

```sql
create table interviews (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade,
  question text not null,
  answer text,
  score jsonb,
  duration integer,
  interview_type text default 'voice',
  created_at timestamp with time zone default timezone('utc'::text, now())
);

create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  avatar_url text,
  interview_count integer default 0,
  average_score decimal default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

alter table interviews enable row level security;
alter table profiles enable row level security;

create policy "Users can view own interviews" on interviews
  for all using (auth.uid() = user_id);

create policy "Users can update own profile" on profiles
  for all using (auth.uid() = id);
```

## Usage

### Starting Development Server

```bash
npm run dev
```

The application will be available at http://localhost:3000

### API Integration

The platform uses OpenRouter API for AI responses. Example implementation:

```typescript
export async function generateAIResponse(prompt: string) {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    })
  });
  return response.json();
}
```

## Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel deploy
```

Add the same environment variables in your Vercel project settings.

## Project Structure

```
/app
  /auth - Authentication pages
  /dashboard - User dashboard
  /interview - Interview session pages
  /api - API routes
/lib
  /supabase - Database client and utilities
  /openrouter - AI integration
  /context - React context providers
/components
  /ui - Reusable UI components
  /interview - Interview-specific components
```

## Support

For support and questions, please open an issue in the GitHub repository or contact the development team.

## License

This project is licensed under the MIT License.
