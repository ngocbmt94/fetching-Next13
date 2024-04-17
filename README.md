## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Description Rendering

Next.js is a React framework that supports pre-rendering. Instead of having the browser render everything from scratch, Next.js can serve pre-rendered HTML in two different ways.

With Server-side Rendering (SSR), Next.js pre-renders the page into HTML on the server on every request. TTFB (Time to first byte) is slower, but your data is always up-to-date.

With Static Generation (SSG), Next.js pre-renders the page into HTML on the server ahead of each request, such as at build time. The HTML can be globally cached by a CDN and served instantly.
