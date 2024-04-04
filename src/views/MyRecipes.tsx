import React from 'react'
import { useEffect, useState } from 'react'
import MyRecipesService from '../services/myrecipes'
import Banner from '../components/Banner'
import Button from '../components/Button/Button'
import Navigation from '../components/Navigation/Navigation'
import RecipeCard from '../components/RecipeCard/RecipeCard'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CreateRecipe from '../components/CreateRecipe/CreateRecipe'


const MyRecipes = () => {
  const [recipes, setRecipes] = useState([]) 
  useEffect(()=> {
    MyRecipesService
    .getMyRecipes()
    .then(initialRecipes => {
      setRecipes(initialRecipes)
    })
  }, [])

  const [openModule, setOpenModule] = useState<boolean>(false);
  const openCreateModule = () => {
    setOpenModule(true)
  }

  return (
    <>
        { openModule && <CreateRecipe closeModule={() => setOpenModule(false)}/> }
        
        <Banner
            title='My Recipes'
            desc='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
        >
          <br />
          <Button onClick={() => openCreateModule()} iconAfter={<AddRoundedIcon/>}>Add new</Button>
        </Banner>
        <section className="Recipes">
            <div className="flex recipe-list">
                {
                  recipes?.map((recipe, i) => (
                    <RecipeCard path={`/myrecipes`} heart={false} meal={recipe} key={i}/>
                  ))
                }  
            </div>
        </section>
    </>
  )
}

export default MyRecipes