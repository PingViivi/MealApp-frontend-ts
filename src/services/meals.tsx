import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/categories/' 

const getMealsByCategory = (category:string) => {
    const request = axios.get(baseUrl + category)
    return request.then(response => response.data)
}
  
export default { 
    getMealsByCategory: getMealsByCategory, 
}