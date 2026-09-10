# Kapilesh Learning

Premium leadership, capability & organisational transformation consulting website.

**Frontend:** React 18 · Vite · Tailwind CSS 4 · Framer Motion · React Router · Lucide React
**Backend:** Node.js · Express · REST API · optional MongoDB (Mongoose)

```
kapilesh-learning/
├── client/          # React frontend (Vite)
│   └── src/
│       ├── components/   # Navbar, Footer, Button, Timeline, CTA, …
│       ├── sections/     # Homepage sections (Hero, Trust, Philosophy, …)
│       ├── pages/        # Home, About, Solutions, Experience, Contact
│       ├── data/         # content.js — single source of truth for all copy
│       └── lib/          # SEO manager, JSON-LD schema, motion variants
└── server/          # Express REST API
    ├── controllers/ # enquiryController.js
    ├── routes/      # enquiryRoutes.js
    ├── models/      # Enquiry.js (Mongoose)
    ├── middleware/  # errorHandler.js, rateLimit.js
    └── config/      # db.js (optional MongoDB connection)
```

## Installation

Requires Node.js 18+.

```bash
npm install
```

The root `postinstall` script installs both `client/` and `server/` dependencies automatically. To install them individually:

```bash
cd client && npm install
cd server && npm install
```

## Development

Run both apps together from the root:

```bash
npm run dev
```

- Frontend: http://localhost:5173 (proxies `/api` to the backend)
- Backend: http://localhost:5000

Or run them separately:

```bash
cd client && npm run dev
cd server && npm run dev
```

## Environment variables

Copy `server/.env.example` to `server/.env`:

| Variable | Purpose | Required |
| --- | --- | --- |
| `PORT` | API port (default `5000`) | No |
| `NODE_ENV` | `development` / `production` | No |
| `CORS_ORIGIN` | Comma-separated allowed origins | No (defaults to `http://localhost:5173`) |
| `MONGO_URI` | MongoDB connection string | No — API runs without a DB |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASSWORD` / `CONTACT_EMAIL` | Email notification placeholders | No |

Frontend (optional): set `VITE_API_URL` in `client/.env` to point at a deployed API (defaults to same-origin / dev proxy).

## MongoDB setup

The API is fully functional without MongoDB — enquiries are validated, acknowledged and logged. To persist them:

1. Create a database (local MongoDB or MongoDB Atlas).
2. Set `MONGO_URI` in `server/.env`.
3. Restart the server. Enquiries are stored in the `enquiries` collection via the Mongoose `Enquiry` model.

## API

`POST /api/enquiries`

```json
{
  "name": "…",
  "organisation": "…",
  "designation": "…",
  "email": "…",
  "phone": "…",
  "areaOfInterest": "…",
  "message": "…"
}
```

Responses: `201` `{ "success": true, "message": "Your enquiry has been received." }` · `400` validation errors · `429` rate limited · `500` server error.

`GET /api/health` — health check.

## Production build

```bash
npm run build
```

Builds the frontend to `client/dist/`. Serve it from any static host (Netlify, Vercel, nginx) and deploy `server/` to a Node host (Render, Railway, a VPS with pm2). Set `CORS_ORIGIN` to the deployed frontend URL and `VITE_API_URL` (client env) to the deployed API URL. Because the app uses client-side routing, configure the static host to rewrite all paths to `index.html`.

Run the API in production:

```bash
cd server && npm start
```

## Lint

```bash
npm run lint
```

## Editable content

All copy — brand, navigation, stats, philosophy, solutions, process, programs, industries, career history, expertise, organisations, credentials, contact details — lives in [`client/src/data/content.js`](client/src/data/content.js). Edit it there; every page reads from it.
# learning-sho
