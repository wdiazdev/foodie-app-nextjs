import fs from "node:fs"
import sql from "better-sqlite3"
const db = sql("meals.db")
import slugify from "slugify"
import xss from "xss"

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  //   throw new Error("Fetch meals failed!")
  return db.prepare("SELECT * FROM meals").all()
}

export const getMeal = (slug) => {
  //   throw new Error("Fetch meal failed!")
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug)
}

export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true })
  meal.instructions = xss(meal.instructions)

  const extension = meal.image.name.split(".").pop()
  const fileName = `${meal.slug}.${extension}`
  const stream = fs.createWriteStream(`public/images/${fileName}`)
  const bufferedImage = await meal.image.arrayBuffer()

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!")
    }
  })

  meal.image = `/images/${fileName}`
  db.prepare(
    `INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug )
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug)
    `,
  ).run(meal)
}
