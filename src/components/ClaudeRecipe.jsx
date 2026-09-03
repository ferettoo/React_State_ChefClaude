import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { getRecipeFromIngredients } from "../ai";

export default function ClaudeRecipe({ ingredients }) {
  const [recipe, setRecipe] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGetRecipe() {
    setIsLoading(true);
    setError("");

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
        <article className="mb-10 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Your Recipe</h2>
          <div className="text-sm leading-relaxed text-slate-700 [&_h1]:mb-3 [&_h1]:text-xl [&_h1]:font-bold [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-semibold [&_h3]:mb-2 [&_h3]:text-base [&_h3]:font-semibold [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-5 [&_p]:mb-3 [&_strong]:font-semibold [&_ul]:my-3 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
            <ReactMarkdown>{recipe}</ReactMarkdown>
          </div>
        </article>
      )}
    </section>
  );
}
