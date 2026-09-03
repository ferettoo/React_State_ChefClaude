export default function IngredientsList(props) {
  const listIngredients = props.ingredients.map((ingredient) => {
    return (
      <li className="bg list-disc p-2" key={ingredient}>
        {ingredient}
      </li>
    );
  });

  return (
    <section>
      <h2 className="text-xl font-bold">Ingredients on hand</h2>
      <ul className="mx-10">{listIngredients}</ul>
    </section>
  );
}
