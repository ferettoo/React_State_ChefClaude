import { useState } from "react";
import { getRecipeFromIngredients } from "../ai";

export default function ClaudeRecipe({ ingredients }) {
  const [recipe, setRecipe] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGetRecipe() {
    setIsLoading(true);
    setError("");
    setRecipe("");

    try {
      const generatedRecipe = await getRecipeFromIngredients(ingredients);
      setRecipe(generatedRecipe);
    } catch (err) {
      setError(err.message || "Failed to generate recipe. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="mx-auto mt-10 flex flex-col gap-6">
      <div className="flex rounded-lg bg-gray-200 p-5">
        <div className="flex w-3/4 flex-col gap-3 p-5">
          <h1 className="text-xl font-medium">Ready for Recipe?</h1>
          <p className="text-sm text-gray-500">
            Generate a recipe based on your ingredients.
          </p>
        </div>
        <button
          onClick={handleGetRecipe}
          disabled={isLoading}
          className="mx-auto w-40 self-center rounded-lg bg-amber-600 px-5 py-2 text-base font-medium text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Loading..." : "Get Recipe"}
        </button>
      </div>

      {error && (
        <p className="rounded-lg bg-red-50 p-4 text-sm text-red-600">{error}</p>
      )}

      {recipe && (
        <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Your Recipe</h2>
          <div className="text-sm leading-relaxed whitespace-pre-wrap text-slate-700">
            {recipe}
          </div>
        </article>
      )}
    </section>
  );
}
