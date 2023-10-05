"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export async function clearCache() {
  console.log("Trigger revalidatePath('/')");
  revalidatePath("/");
}

export async function clearCacheWithTag() {
  console.log("Trigger revalidateTag('datetime')");
  revalidateTag("datetime");
}
