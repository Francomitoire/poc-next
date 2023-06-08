import Link from "next/link";
import { GET } from "@/app/api/users/route";
// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
async function getData() {
  try {
    const res = await GET();
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
  console.log("DATA ON PAGE", data);
  // make a list with first 100 users
  return (
    <div>
      <h1>users</h1>
    </div>
  );
}
