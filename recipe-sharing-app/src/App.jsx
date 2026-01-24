import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', display: 'flex', gap: '40px' }}>
        <div style={{ flex: 2 }}>
          <h1>Recipe Sharing Application</h1>
          <Routes>
            <Route path="/" element={<><AddRecipeForm /><hr /><SearchBar /><RecipeList /></>} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </div>
        
        <div style={{ flex: 1, backgroundColor: '#f9f9f9', padding: '15px' }}>
          <FavoritesList />
          <hr />
          <RecommendationsList />
        </div>
      </div>
    </Router>
  );
}

export default App;