import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  function handleAddIngredient(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    // ingredients.push(ingredient);

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  const listIngredients = ingredients.map((ingredient) => {
    return (
      <li className="list-disc" key={ingredient}>
        {ingredient}
      </li>
    );
  });

  return (
    <main className="mx-auto w-3/4">
      <form
        onSubmit={handleAddIngredient}
        className="flex items-center justify-center gap-4 p-20"
      >
        <input
          type="text"
          name="ingredient"
          placeholder="Add Ingredient"
          className="w-2/4 rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm shadow-sm transition duration-300 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
        />
        <button className="rounded-lg bg-black px-5 py-3 text-sm text-white hover:bg-gray-800 focus:outline-none md:px-10">
          + Add Ingredient
        </button>
      </form>
      <ul>{listIngredients}</ul>
    </main>
  );
}
