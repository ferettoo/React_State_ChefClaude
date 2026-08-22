import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  function addIngredients(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  const listIngredients = ingredients.map((ingredient) => {
    return (
      <li className="bg list-disc p-2" key={ingredient}>
        {ingredient}
      </li>
    );
  });

  return (
    <main className="mx-auto w-3/4">
      <form
        action={addIngredients}
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
      <section className="mx-auto flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Ingredients on hand</h2>
        <ul>{listIngredients}</ul>
      </section>
    </main>
  );
}
