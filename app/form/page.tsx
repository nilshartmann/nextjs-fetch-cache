"use client";

import Link from "next/link";
import clearCacheWithRevalidatePath from "../server-action-revalidate-path";
import clearCacheWithRevalidateTag from "../server-action-revalidate-tag";

export default function FormPage() {
  return (
    <div>
      <form action={clearCacheWithRevalidatePath}>
        <button type="submit">Action with revalidatePath</button>
      </form>
      <form action={clearCacheWithRevalidateTag}>
        <button type="submit">Action with revalidateTag</button>
      </form>
      <Link href="/">Home</Link>
    </div>
  );
}
