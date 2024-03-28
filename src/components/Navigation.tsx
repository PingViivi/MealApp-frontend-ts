import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className='primary-nav'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search-recipes">Search recipes</Link>
        </li>
        <li>
          <Link to="/myrecipes">My Recipes</Link>
        </li>
        <li>
          <Link to="/mealplan">Meal plan</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
