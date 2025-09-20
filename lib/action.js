"use server"

import { redirect } from "next/navigation"
import { saveMeal } from "./meals"
import { revalidatePath } from "next/cache"

const inputValidation = (text) => {
  return !text || text.trim() === ""
}

export const handleShareMeal = async (_, formData) => {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  }

  if (
    inputValidation(meal.title) ||
    inputValidation(meal.summary) ||
    inputValidation(meal.instructions) ||
    inputValidation(meal.creator) ||
    inputValidation(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return { message: "Invalid input." }
  }

  await saveMeal(meal)
  revalidatePath("/meals")
  redirect("/meals")
}
