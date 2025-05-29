This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

In this tutorial series we will be building an e-commerence app to showcase the features of NextJS.

Each tutorial will **have a branch** associated with it, i.e. the first tutorial will be on the brach `tutorial_1` and so forth.

There will be a **Pull Request** between the branches of each tutorial, so that it's very easy for you to see what has been added/changed in each lesson.

Happy coding!

## Getting Started

To get started, you can run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run the database - from the root of the project run (you will need to have **docker compose** installed):

```bash
cd mongo
docker compose up -d
```
After this step has been completed - you will be able to visit [http://localhost:9093](http://localhost:9093) to use **Mongo Express** where you can browse the database.

You can log in with the username **admin** and the password **pass** to browse the db.

For Auth - you will need to have the following key in your `.env` file:

```bash
AUTH_SECRET=<YOUR AUTH SECRET>
```

The auth secret can be generated with the mac command: `openssl rand -base64 32`
or visit [https://generate-secret.vercel.app/32](https://generate-secret.vercel.app/32) if you're on Windows.

the Database has been seeded with some intial items and with the user **johndoe** - you can login at [http://localhost:3000/login](http://localhost:3000/login) with the password **pass**
