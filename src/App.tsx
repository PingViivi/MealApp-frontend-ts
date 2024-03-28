import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './views/Home'
import RecipeSearch from './views/RecipeSearch';
import Navigation from './components/Navigation';
import MyRecipes from './views/MyRecipes';
import MealPlan from './views/MealPlan';
import Profile from './views/Profile';
import Login from './views/Login';

const App: React.FC = () => {
  return (
    <>
      <div className="wrap">
        <Router>
              <Navigation/>
              <Routes>
                {/* Navigation routes */}
                <Route path="/"  Component={Home} />
                <Route path="/search-recipes"  Component={RecipeSearch} />
                <Route path="/myrecipes"  Component={MyRecipes} />
                <Route path="/mealplan"  Component={MealPlan} />

                {/* Other routes */}
                <Route path="/profile"  Component={Profile} />
                <Route path="/login"  Component={Login} />
              </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
