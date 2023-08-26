import { User } from "@prisma/client";
import prisma from "../../lib/prisma";
import { auth } from "firebase-admin";

export async function getUser(
  accessToken: string | null | undefined
): Promise<User | null> {
  if (accessToken == null) {
    return null;
  }

  const decodedToken = await auth().verifyIdToken(accessToken);
  const email = decodedToken.email;

  if (email == null) {
    return null;
  }

  // find user ignoring case
  const user = await prisma.user.findUnique({
    where: {
      email: email?.toLowerCase(),
    },
  });

  if (user == null) {
    return null;
  }

  return user;
}
