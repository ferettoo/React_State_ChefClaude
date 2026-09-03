# Chef Claude

App de React para practicar **estado**, **componentes**, **props** y **llamadas asíncronas**. El usuario añade ingredientes y, a partir de 3 o más, puede pedir una receta generada por IA.

Stack: React 19 + Vite + Tailwind CSS 4. La receta se obtiene vía Hugging Face Inference API y se renderiza con `react-markdown`.

## Qué aprendimos

### 1. Componentes y composición

Separación en piezas con una sola responsabilidad:

- `Header` — marca e icono
- `Main` — estado de ingredientes y formulario
- `IngredientsList` — lista a partir de props
- `ClaudeRecipe` — botón, loading, error y receta

### 2. Estado con `useState`

En `Main`, los ingredientes viven en estado local:

```js
const [ingredients, setIngredients] = useState([]);
```

Al añadir uno, se actualiza de forma inmutable:

```js
setIngredients((prev) => [...prev, newIngredient]);
```

En `ClaudeRecipe` hay más estado: `recipe`, `isLoading` y `error` para la UX de la petición.

### 3. Formularios en React

El formulario usa `action={addIngredients}` (Form Actions). `FormData` lee el input por `name="ingredient"`.

### 4. Props y renderizado condicional

- `IngredientsList` recibe `ingredients` y hace `.map()` con `key`.
- La sección de receta solo aparece con 3 o más ingredientes:

```jsx
{
  ingredients.length >= 3 && <ClaudeRecipe ingredients={ingredients} />;
}
```

### 5. Async / await y manejo de errores

`getRecipeFromIngredients` en `src/ai.js` hace `fetch` a Hugging Face. En el componente se usa `try/catch/finally` para loading y errores.

### 6. Markdown en la UI

La respuesta de la IA viene en markdown y se muestra con `ReactMarkdown`.

### 7. Variables de entorno en Vite

La API key va en `.env` como `VITE_HF_API_KEY` y se lee con `import.meta.env.VITE_HF_API_KEY`.

## Cómo correr el proyecto

1. Instala dependencias: `npm install`
2. Crea un `.env` en la raíz:

```env
VITE_HF_API_KEY=tu_token_de_huggingface
```

3. Arranca el servidor de desarrollo:

```bash
npm run dev
```

Otros scripts:

```bash
npm run build
npm run preview
```

## Flujo de la app

1. Escribes un ingrediente y pulsas **Add Ingredient**.
2. Se muestra en **Ingredients on hand**.
3. Con 3+ ingredientes aparece **Ready for Recipe?**.
4. **Get Recipe** llama a la API y muestra la receta en markdown.
