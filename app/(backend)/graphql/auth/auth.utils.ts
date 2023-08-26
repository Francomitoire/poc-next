import { Context } from "../route";

export const isAuth = (context: Context) => {
  if (!context.user) throw new Error("Unauthorized");
};
