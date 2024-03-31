import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/categories/';

const getMealsByCategory = (category:string) => {
    const request = axios.get(baseUrl + category);
    return request.then(response => response.data);
};

const saveRecipe = async (mealName:string) => {
    const mealUrl = 'http://localhost:3001/db/myrecipes'; 
    
    console.log(mealName);
    try {
        alert('submitted')
        await axios.post(mealUrl, { 
            mealName 
        });
        
    } catch (error) {
        throw new Error('Failed to save recipe frontendside');
    }
};
  
export default { 
    getMealsByCategory: getMealsByCategory, 
    saveRecipe: saveRecipe,
};