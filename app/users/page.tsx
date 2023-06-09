import { Suspense } from "react";
import UsersList from "@/app/components/UsersList.component";

async function getData() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/users`, {
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
export default async function Page() {
  const data = await getData();
  const users = data?.users ?? [];
  return (
    <div>
      <h1>Users</h1>
      <UsersList users={users} />
    </div>
  );
}
