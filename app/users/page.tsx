import Link from "next/link";
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

  // make a list with first 100 users
  const users = data.entries.slice(0, 10);
  return (
    <div>
      <h1>users</h1>
    </div>
  );
}
