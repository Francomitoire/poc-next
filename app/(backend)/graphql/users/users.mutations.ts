import { ResolverFn, User, MutationCreateUserArgs } from "@/generated/graphql";
import prisma from "../../lib/prisma";
import { Context } from "../route";
import { isAuth } from "../auth/auth.utils";

export const createUser: ResolverFn<
  User,
  {},
  Context,
  MutationCreateUserArgs
> = async (_, args, context) => {
  isAuth(context);
  const { email, name } = args;

  return prisma.user.create({
    data: {
      email,
      name,
    },
  });
};
