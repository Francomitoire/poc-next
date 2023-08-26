import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { PrismaClient, User } from "@prisma/client";
import { readFileSync } from "fs";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import path from "path";
import prisma from "@/app/(backend)/lib/prisma";
import { getUser } from "./auth/auth.queries";
import {
  MutationResolvers,
  QueryResolvers,
  Resolvers,
} from "@/generated/graphql";
import { customInitApp } from "@/app/lib/firebase-admin-config";
import { listUsers } from "./users/users.queries";
import { createUser } from "./users/users.mutations";

customInitApp();

const schemaPath = path.resolve("./schema.graphql");
const typeDefs = readFileSync(schemaPath, "utf8");

export interface Context {
  transaction: PrismaClient["$transaction"];
  user: User | null;
}

const queryResolvers: QueryResolvers = {
  listUsers,
  user: () => "Asd",
};

const mutationResolvers: MutationResolvers = {
  createUser,
};

const resolvers: Resolvers = {
  Query: queryResolvers,
  Mutation: mutationResolvers,
};

const server = new ApolloServer<any>({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (): Promise<Context> => {
    const accessToken = await cookies().get("accessToken")?.value;
    return {
      transaction: await prisma.$transaction,
      user: await getUser(accessToken),
    };
  },
});

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
