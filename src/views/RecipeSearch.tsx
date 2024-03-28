import React from 'react'
import Banner from '../components/Banner'
import Button from '../components/Button'
import Categories from '../components/Categories'


const RecipeSearch = () => {
  return (
    <>
        <Banner
            title='Find new recipes'
            desc='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
        >
            <input type="search" name="search" id="" />
        </Banner>
    </>
  )
}

export default RecipeSearch