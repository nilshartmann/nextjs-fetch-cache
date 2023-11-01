"use server";

import { revalidatePath } from "next/cache";

export default async function clearCacheWithRevalidatePath(formData: FormData) {
  console.log("Trigger revalidatePath('/') and return");
  return revalidatePath("/");
}
