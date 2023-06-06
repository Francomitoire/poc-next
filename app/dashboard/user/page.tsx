// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
async function getData() {
  const res = await fetch("https://api.publicapis.org/entries");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Page() {
  const data = await getData();
  // this will console log on the server
  console.log(data);
  // make a list with first 100 users
  const users = data.entries.slice(0, 100);
  return (
    <div>
      <h1>Public APIs</h1>
      <ul>
        {users.map((user) => (
          <li key={user.API}>{user.API}</li>
        ))}
      </ul>
    </div>
  );
}
