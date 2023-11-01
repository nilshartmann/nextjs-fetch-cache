"use server";

import { revalidatePath } from "next/cache";

export default async function clearCacheWithRevalidatePath() {
  console.log("Trigger revalidatePath('/') and return");
  revalidatePath("/");
}
