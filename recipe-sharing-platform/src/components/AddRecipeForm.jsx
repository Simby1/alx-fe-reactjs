import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!title) newErrors.title = "Title is required";
    if (!ingredients) newErrors.ingredients = "Ingredients are required";
    // Check if ingredients has at least two items (split by newline or comma)
    else if (ingredients.split(',').length < 2) newErrors.ingredients = "Please include at least two ingredients.";
    if (!steps) newErrors.steps = "Preparation steps are required";
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Logic to "submit" the form
      console.log({ title, ingredients, steps });
      // Reset form
      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({});
      alert("Recipe Added Successfully!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            className={`w-full p-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Ingredients (comma separated)</label>
          <textarea
            className={`w-full p-2 border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`}
            rows="4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="e.g., Pasta, Eggs, Cheese"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Preparation Steps</label>
          <textarea
            className={`w-full p-2 border ${errors.steps ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`}
            rows="4"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Describe the steps..."
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 md:w-auto"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;