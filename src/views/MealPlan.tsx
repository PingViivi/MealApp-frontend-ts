import React from 'react'
import Banner from '../components/Banner'
import Button from '../components/Button/Button'
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';

const MealPlan = () => {
  return (
    <>
        <Banner
            title='Generate MealPlan'
            desc='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
        >
          <br />
            <Button iconAfter={<RefreshRoundedIcon/>}>Generate</Button>
        </Banner>
    </>
  )
}

export default MealPlan