"use server";

import { revalidateTag } from "next/cache";

export default async function clearCacheWithRevalidateTag() {
  console.log("Trigger revalidateTag('datetime')");
  revalidateTag("datetime");
}
