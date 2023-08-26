import { redirect } from "next/navigation";
export const graphqlClientFetch = (query: String, variables?: any) =>
  fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookies: document.cookie,
    },
    body: JSON.stringify({ query, variables }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.errors) {
        console.log(res.errors);
        const unauthorized = res.errors.find(
          (error: any) => error.message === "Unauthorized"
        );
        if (unauthorized) {
          redirect("/account/logout");
        }
        throw new Error(JSON.stringify(res.errors));
      }
      return res.data;
    });
