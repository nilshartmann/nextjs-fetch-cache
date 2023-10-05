import Link from "next/link";
import { fetchDate } from "./fetch-date";

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  const datetime = await fetchDate();
  return (
    <div>
      <h1>Date: {datetime}</h1>
      <Link href="/form">Form</Link>
    </div>
  );
}
