"use client";

import Link from "next/link";
import { clearCache, clearCacheWithTag } from "../server-action";

export default function FormPage() {
  return (
    <div>
      <form action={clearCache}>
        <button type="submit">Action with revalidatePath</button>
      </form>
      <form action={clearCacheWithTag}>
        <button type="submit">Action with revalidateTag</button>
      </form>
      <Link href="/">Back</Link>
    </div>
  );
}
