export default async function MealsDetailsPage({ params }) {
  const { mealSlug } = await params
  return (
    <div>
      <h1>MealsDetails Page</h1>
      <span>{mealSlug}</span>
    </div>
  )
}
