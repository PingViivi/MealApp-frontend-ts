import axios from 'axios'

const getAllCategories = () => {
    const baseUrl = 'http://localhost:3001/api/categories'
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

  
export default { 
    getAllCategories: getAllCategories, 
}