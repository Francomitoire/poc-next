# Project Name: POC Next

A proof-of-concept (POC) project built using Next.js and various complementary technologies. This project demonstrates how to create a modern web application with features such as server-side rendering, GraphQL integration, Chakra UI for styling, and Firebase + Google Authentication.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and Yarn: Make sure you have Node.js (version XX or higher) and Yarn (version XX or higher) installed on your machine.
- Firebase Project: You must have a Firebase project with Google Authentication set up. Obtain the necessary Firebase configuration values for both the backend and frontend.

## Getting Started

To get the project up and running, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the project directory:**

   ```bash
   cd poc-next
   ```

3. **Install dependencies:**

   ```bash
   yarn
   ```

4. **Set up environment variables:**

   Copy the `.env.local.example` file and rename it to `.env.local`. Replace the placeholder values with your actual environment configuration. Make sure to fill in the Firebase configuration variables:

   ```env
   # firebase admin (backend)
   NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-project-id"
   NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL="your-client-email"
   NEXT_PUBLIC_FIREBASE_PRIVATE_KEY="your-private-key"

   # firebase client (frontend)
   NEXT_PUBLIC_FIREBASE_API_KEY="your-api-key"
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-auth-domain"
   NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-project-id"
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your-storage-bucket"
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your-messaging-sender-id"
   NEXT_PUBLIC_FIREBASE_APP_ID="your-app-id"
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="your-measurement-id"
   ```

5. **Start the PostgreSQL container:**

   If you are using Docker Compose to manage your database, you can start the PostgreSQL container using the following command:

   ```bash
   yarn start-db
   ```

6. **Migrate and seed the database:**

   - Run the following command to reset the Prisma database schema:

     ```bash
     yarn prisma-reset-database
     ```

   - After resetting the schema, you can seed the database with your user information by following the steps mentioned earlier.

     ```bash
     yarn seed-database
     ```

7. **Start the development server:**

   ```bash
   yarn dev
   ```

   This will start the Next.js development server and make your application accessible at `http://localhost:3000`.

## Available Scripts

In the project directory, you can run the following scripts:

- `yarn dev`: Start the development server.
- `yarn build`: Build the production-ready application.
- `yarn start`: Start the production server.
- `yarn lint`: Run linting checks.
- `yarn start-db`: Start the local PostgreSQL database container.
- `yarn prisma-reset-database`: Reset the Prisma database.
- `yarn seed-database`: Seed the database using TypeScript.
- `yarn prisma-generate`: Generate Prisma client.
- `yarn prisma-migrate`: Run Prisma database migrations.
- `yarn prisma-studio`: Open Prisma Studio for visual database management.
- `yarn graphql-generate`: Generate TypeScript types for GraphQL queries and mutations.

## Technologies Used

- Next.js: A React framework for server-side rendering and static site generation.
- Apollo Server: For building a GraphQL API.
- Chakra UI: A component library for building accessible and customizable UI.
- Firebase: Integration for authentication, database, and other services.
- Prisma: Database toolkit and ORM.
- TypeScript: Superset of JavaScript that adds static types.
- ESLint: Tool for identifying and fixing code problems.
- GraphQL Codegen: Generate TypeScript types for GraphQL operations.
- Docker Compose: Tool for defining and running multi-container Docker applications.

## Contributing

Contributions are welcome! If you have any improvements or suggestions, feel free to create issues or pull requests in this repository.
