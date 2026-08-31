export default function ClaudeRecipe({ ingredients }) {
  if (ingredients.length <= 3) {
    return null;
  }

  return (
    <section className="mx-auto mt-10 flex flex-col">
      <div className="flex rounded-lg bg-gray-200 p-5">
        <div className="flex w-3/4 flex-col gap-3 p-5">
          <h1 className="text-xl font-medium">Ready for Recipe?</h1>
          <p className="text-sm text-gray-500">
            Generate a recipe based on your ingredients.
          </p>
        </div>
        <button className="mx-auto w-40 self-center rounded-lg bg-amber-600 px-5 py-2 text-base font-medium text-white">
          Get Recipe
        </button>
      </div>
    </section>
  );
}
