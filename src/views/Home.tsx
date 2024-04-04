import React from 'react';
import Banner from '../components/Banner';
import Button from '../components/Button/Button';

const Home: React.FC = () => {
    return (
        <>
            <Banner
                title='Lorem ipsum dolor sit amet'
                desc='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
            >
                <ul>
                    <li>
                        Search recipes for your personal recipe library by liking them.
                    </li>
                    <li>
                        You can view your recipes, edit them and use them for your cookings.
                    </li>
                    <li>
                        You can generate a meal plan for your week.
                    </li>
                </ul>
                <br />
                <Button>Get started</Button>
            </Banner>
        </>
    )
};

export default Home;