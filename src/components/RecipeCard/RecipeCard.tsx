import React from 'react'
import { Link } from 'react-router-dom';
import { IRecipe } from '../Recipe/Recipe';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import './RecipeCard.scss';

interface RecipeCardProps {
    like?: (id: string) => void;
    meal: IRecipe;
    category?: string;
    isLiked?: boolean; // Assuming you pass the isLiked prop to indicate whether the recipe is liked
    heart?: boolean;
    path: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ like, meal, category, isLiked, heart = true, path }) => {
  const path1 = `/categories/${category}`
  const path2 = `/myrecipes/`
  
  return (
    <>
        <div className="flex-item three RecipeContainer">
          <div className='RecipeCard'>
              <div className="image">
                <img src={meal.image} alt="" />
              </div>
              <div className="information">
                {/* <Link to={`/categories/${category}/${meal.id}`}> */}
                <Link to={`${path}/${meal.id}`}>
                  <h3>
                    {meal.name}
                  </h3>
                </Link>
                <div className="flex details">
                  <span>30 - 60 min </span>
                  <span>4 dishes</span>
                </div>
              </div>
          </div>
          { heart &&
            <button className='like' onClick={() => like(meal.id)}> {isLiked ? <FavoriteRoundedIcon/> : <FavoriteBorderRoundedIcon/>}</button>
          }
        </div>
    </>
  )
}

export default RecipeCard
