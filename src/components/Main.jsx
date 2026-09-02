import { useState } from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  function addIngredients(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

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
      <IngredientsList ingredients={ingredients} />
      {ingredients.length > 3 && <ClaudeRecipe ingredients={ingredients} />}
    </main>
  );
}
