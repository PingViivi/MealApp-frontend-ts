import React from 'react'
import Banner from '../components/Banner'
import Button from '../components/Button'
import Navigation from '../components/Navigation'

const MyRecipes = () => {
  return (
    <>
        <Banner
            title='My Recipes'
            desc='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
        >
            <Button>Add new</Button>
        </Banner>
    </>
  )
}

export default MyRecipes