import Link from "next/link";
import { Login } from "./auth/Login";

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <>
      <h1>Hello, Home page!</h1>
      <Login />
    </>
  );
}
