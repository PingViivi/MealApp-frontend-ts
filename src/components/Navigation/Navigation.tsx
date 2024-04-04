import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/recipeapp-logo.svg'
import './Navigation.scss'

const Navigation: React.FC = () => {
  return (
    <header className='nav-container flex'>
      <Link to="/" className="flex-item fifth image logo-container">
        <img className='logo' src={Logo} alt="RecipeApp logo" />
      </Link>
      <nav className='primary-nav flex-item six'>
        <ul>
          <li>
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
    </header>
  );

};

export default Navigation;
