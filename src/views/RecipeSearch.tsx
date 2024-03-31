import React from 'react'
import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Category, { ICategory } from '../components/Category/Category'
import CategoriesService from '../services/categories'
import { useParams } from 'react-router-dom'
import Recipes from '../components/Recipes/Recipes'


const RecipeSearch: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  // console.log(categories)
  useEffect(() => {
    CategoriesService.getAllCategories()
      .then(initialCategories => {
        setCategories(initialCategories);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const category = useParams().category

  return (
    <>
        <Banner
            title='Find new recipes'
            desc='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
        >
            {/* <input type="search" name="search" id="" /> */}
        </Banner>

      <section className='Categories'>
        <nav>
          <ul>
            {categories?.map((category) => (
              <Category strCategory={category.strCategory} idCategory={category.idCategory} />
            ))}
          </ul>
        </nav>
      </section>
      
      {category ? <Recipes category={category}/> : null}
    </>
  )
}

export default RecipeSearch