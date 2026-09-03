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
    <main className="mx-auto w-11/12 md:w-3/4">
      <form
        action={addIngredients}
        className="flex flex-col items-stretch justify-center gap-3 p-6 sm:flex-row sm:items-center sm:gap-4 sm:p-10 md:p-20"
      >
        <input
          type="text"
          name="ingredient"
          placeholder="Add Ingredient"
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm shadow-sm transition duration-300 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none sm:w-2/4"
        />
        <button className="w-full rounded-lg bg-black px-5 py-3 text-sm text-white hover:bg-gray-800 focus:outline-none sm:w-auto md:px-10">
          + Add Ingredient
        </button>
      </form>
      <IngredientsList ingredients={ingredients} />
      {ingredients.length >= 3 && <ClaudeRecipe ingredients={ingredients} />}
    </main>
  );
}
