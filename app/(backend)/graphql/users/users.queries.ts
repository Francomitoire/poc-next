import { ResolverFn, User } from "@/generated/graphql";
import prisma from "../../lib/prisma";
import { Context } from "../route";
import { isAuth } from "../auth/auth.utils";

export const listUsers: ResolverFn<User[], {}, Context, {}> = async (
  _,
  __,
  context
) => {
  isAuth(context);
  return prisma.user.findMany();
};
