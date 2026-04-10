# T.R.I.K.S. — Trinity River International Kayak School

Professional whitewater kayaking instruction on Northern California's Trinity River. Youth camps, day clinics, and adult programs for beginner to intermediate paddlers.

## Tech Stack

- **Frontend**: Next.js (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (database + auth + storage)
- **Deployment**: Vercel

## Prerequisites

- Node.js 18+
- npm
- A [Supabase](https://supabase.com) account (free tier works)
- A [Vercel](https://vercel.com) account (for deployment)

## Local Development

1. **Clone and install**

   ```bash
   git clone <your-repo-url>
   cd triks-website
   npm install
   ```

2. **Set up environment variables**

   Copy the example env file and fill in your Supabase credentials:

   ```bash
   cp .env.local.example .env.local
   ```

   Required variables:

   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

3. **Run the dev server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the schema:
   - Paste the contents of `supabase/schema.sql` and execute
3. Run the seed data:
   - Paste the contents of `supabase/seed.sql` and execute
4. Copy your project URL and anon key from **Settings > API** into `.env.local`

## Deployment (Vercel)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com/new)
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── page.tsx      # Homepage
│   ├── about/        # About page
│   ├── contact/      # Contact page
│   ├── trips/        # Trip listing + detail pages
│   └── book/         # Booking flow
├── components/
│   ├── ui/           # Reusable UI components
│   ├── layout/       # Navbar, Footer
│   ├── home/         # Homepage sections
│   ├── trips/        # Trip-specific components
│   └── booking/      # Booking flow components
├── lib/
│   ├── supabase/     # Supabase client + queries
│   ├── fallback-data.ts  # Fallback data when Supabase is not connected
│   └── utils.ts      # Utility functions
├── types/            # TypeScript type definitions
└── public/           # Static assets
supabase/
├── schema.sql        # Database schema
└── seed.sql          # Seed data for trips
```

## Notes

- The site includes fallback data so it works without a Supabase connection
- Placeholder images from Unsplash are used until original photography is ready
- The hero video expects a file at `public/videos/hero.mp4` — add your own or it degrades gracefully to the poster image
- Payment integration is a placeholder — marked as "coming soon"
