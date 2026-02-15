import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <div className="text-center mt-10">Loading recipe...</div>;

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <button 
        onClick={() => navigate('/')}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Back to Home
      </button>
      
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-md mb-6" />
        <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-700 text-lg mb-6">{recipe.summary}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold mb-3 border-b-2 border-blue-200">Ingredients</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Ingredient 1 (Mock data)</li>
              <li>Ingredient 2 (Mock data)</li>
              <li>Ingredient 3 (Mock data)</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold mb-3 border-b-2 border-green-200">Instructions</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Step 1: Prep the ingredients.</li>
              <li>Step 2: Cook according to the recipe.</li>
              <li>Step 3: Serve and enjoy!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;