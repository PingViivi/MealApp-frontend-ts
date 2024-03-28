import axios from 'axios'
const baseUrl = 'http://localhost:3001/db/myrecipes/' 

const getMyRecipes = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
  
export default { 
    getMyRecipes: getMyRecipes, 
}