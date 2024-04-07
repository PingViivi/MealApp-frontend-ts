import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Logo from '../../images/recipeapp-logo.svg'
import './Navigation.scss'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
import User from './User';

const Navigation: React.FC = () => {
  const location = useLocation().pathname
  
  const currentPage = (url: string) => {
    const pathname = location;
    
    if (url === '/') {
      return pathname === '/'; // Only return true if the pathname is exactly '/'
    } else if (url === '/search-recipes' && (pathname.startsWith('/search-recipes') || pathname.startsWith('/categories'))) {
      return true; // Search recipes page or categories page
    } else {
      return pathname.startsWith(url); // Any other page
    }
  };

  return (
    <header className='nav-container flex'>
      <Link to="/" className="flex-item fifth image logo-container">
        <img className='logo' src={Logo} alt="RecipeApp logo" />
      </Link>
      <nav className='primary-nav flex-item six'>
        <ul>
          <li className={currentPage('/') ? 'current' : ''}>
            <Link to="/">
              <span className="icon">
                <HomeRoundedIcon/>
              </span>
              <span className='text'>Home</span>
            </Link>
          </li>

          <li className={currentPage('/search-recipes') ? 'current' : ''}>
            <Link to="/search-recipes">
              <span className="icon">
                <ManageSearchRoundedIcon/>
              </span>
              <span className="text">Search recipes</span>
            </Link>
          </li>

          <li className={currentPage('/myrecipes') ? 'current' : ''}>
            <Link to="/myrecipes">
              <span className="icon">
                <FavoriteRoundedIcon/>
              </span>
              <span className="text">My Recipes</span>
            </Link>
          </li>

          <li className={currentPage('/mealplan') ? 'current' : ''}>
            <Link to="/mealplan">
              <span className="icon">
                <EditCalendarRoundedIcon/>  
              </span>
              <span className="text">Meal plan</span>
            </Link>
          </li>
        </ul>
      </nav>
      <User/>
    </header>
  );

};

export default Navigation;
