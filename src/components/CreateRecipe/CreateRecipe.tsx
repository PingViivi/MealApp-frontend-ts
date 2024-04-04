import React from 'react'
import './CreateRecipe.scss'
import RecipeForm from './RecipeForm'
import Button from '../Button/Button'

interface CreateRecipeProps {
  closeModule: () => void;
}

const CreateRecipe: React.FC<CreateRecipeProps> = ({ closeModule }) => {

  return (
    <section className="CreateRecipe">
        <div className="wrap">
            <div className="CreateModule">
              <div className="title flex">
                <h2>
                  Create Recipe
                </h2>
              </div>
                <RecipeForm closeModule={() => closeModule()}/>
                {/* <Button onClick={() => closeModule(false)}>Close</Button> */}
            </div>
        </div>
    </section>
  )
}

export default CreateRecipe