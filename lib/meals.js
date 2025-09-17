import sql from "better-sqlite3"
const db = sql("meals.db")

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  //   throw new Error("Fetch meals failed!")
  return db.prepare("SELECT * FROM meals").all()
}

export function getMeal(slug) {
  //   throw new Error("Fetch meal failed!")
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug)
}
