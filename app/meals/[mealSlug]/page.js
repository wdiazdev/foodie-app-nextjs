const MealsDetailsPage = ({ params }) => {
  return (
    <div>
      <h1>MealsDetails Page</h1>
      <span>{params.mealSlug}</span>
    </div>
  )
}

export default MealsDetailsPage
