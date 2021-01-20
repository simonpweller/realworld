This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
It implements a frontend for the [RealWorld app / Conduit](https://github.com/gothinkster/realworld/tree/master/spec)

## Local set up

Run the development server with
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key technologies used
- TypeScript
- Next.js
- swr for fetching and caching data
- Mirage JS for mocking the backend
- Cypress for testing

## Demo
- the current state of main is deployed to [Vercel](https://realworld-roan.vercel.app/)
- note 
  - the deployed version (production mode) will send requests to the public demo api [https://conduit.productionready.io/api](https://conduit.productionready.io/api)
  - running locally (development mode), requests will be intercepted by Mirage JS and mocked 
