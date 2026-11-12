# Configuration

- `app-config.js`: public product/app defaults. Never place secrets here.
- `feature-flags.js`: client feature visibility only; not an authorization mechanism.
- `supabase-config.js`: Supabase URL and publishable/anon key only. RLS is mandatory.
- AI provider secrets belong in Supabase Edge Function secrets, never in this folder.
