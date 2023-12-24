"use server";
import db from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  revalidatePath(`/snippets/${id}`);
  revalidatePath("/");
  redirect(`/`);
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  // check to make sure user inputs are valid
  const title = formData.get("title");
  const code = formData.get("code");

  if (typeof title !== "string" || title.length < 3) {
    return {
      message: "title must be at least 3 characters long",
    };
  }
  if (typeof code !== "string" || code.length < 10) {
    return {
      message: "code must be at least 10 characters long",
    };
  }

  // create a new record in the database
  try {
    await db.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (e) {
    return {
      message: e instanceof Error ? e.message : "???",
    };
  }

  // redirect user back to home route
  revalidatePath("/");
  redirect("/");
}
