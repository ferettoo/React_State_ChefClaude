const HF_API_URL = "https://router.huggingface.co/v1/chat/completions";
const HF_MODEL = "meta-llama/Llama-3.2-3B-Instruct";

export async function getRecipeFromIngredients(ingredients) {
  const ingredientsList = ingredients.join(", ");

  const response = await fetch(HF_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: HF_MODEL,
      messages: [
        {
          role: "user",
          content: `You are a helpful chef. I have these ingredients: ${ingredientsList}. Please suggest a recipe I can make using some or all of these ingredients. Include a recipe name, list of ingredients with quantities, and step-by-step instructions.`,
        },
      ],
      max_tokens: 800,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message || `API request failed (${response.status})`,
    );
  }

  const data = await response.json();
  return data.choices[0].message.content;
}
