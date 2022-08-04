# Project template / boilerplate with Next.js, TypeScript, Redux, Next-auth, and Prisma
This template gives me a one-day headstart for my projects. It includes:
- [Next.js](https://nextjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/) with [Redux Toolkit](https://redux-toolkit.js.org/) and typed hooks
- [Next-auth](https://next-auth.js.org/) with credentials and JWT
- [Prisma](https://www.prisma.io/)
- [CUID](https://github.com/ericelliott/cuid) for IDs
- [bcrypt.js](https://www.npmjs.com/package/bcrypt) for password hashing
- ready-made login component with email and password
![Ready-made login component](/public/loginComponent.png)

## How to use this template for your own project?
1. On this repository's Github page click "Use this template" and follow the process - [here's detailed guidelines](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)
2. In your terminal, run <code>git clone <repository-url></code> (take the URL from your own Github page)
3. Open the project folder in your terminal and run <code>npm install</code>
4. Create a new database (if you need one). It's super-easy to do in [Railway](https://railway.app/), for example. I use PostgreSQL databases.
5. Create .env file to the project's root folder.
6. Copy Postgres Connection URL from Railway to .env file like this: DATABASE_URL="add_your_postgres_connection_url_here"
7. Run <code>npm run dev</code>
8. Open the browser and go to <code>http://localhost:3000</code>
9. You should see the login and todo components.
10. Start creating your project!