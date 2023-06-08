import { Suspense } from "react";
import UsersList from "../(components)/UsersList.component";

async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/users", {
      cache: "no-cache",
    });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
export default async function Page() {
  const data = await getData();
  const { users } = data;
  return (
    <div>
      <h1>Users</h1>
      <Suspense fallback={<p>Loading users..</p>}>
        <UsersList users={users} />
      </Suspense>
    </div>
  );
}
