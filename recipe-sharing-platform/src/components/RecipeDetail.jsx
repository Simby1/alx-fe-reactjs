import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4 shadow-lg rounded-lg bg-white">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4 rounded" />
      <div className="p-4">
        <p className="text-lg mb-4">{recipe.summary}</p>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Ingredients</h2>
          <p className="mb-4">Ingredients list goes here (shadowing mock data).</p>
          <h2 className="text-xl font-semibold">Cooking instructions</h2>
          <p className="text-gray-700">
            Follow these instructions to prepare the dish: {recipe.instructions || "Mix ingredients and cook over medium heat."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;