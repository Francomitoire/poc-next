import UsersList from "./(components)/UsersList.component";

async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/users");
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
  return <UsersList users={users} />;
}
