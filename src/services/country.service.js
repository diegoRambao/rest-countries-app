import axios from 'axios'
const END_POINT = 'https://restcountries.eu/rest/v2'

export const getAll = async () => {
   const response = await axios.get(`${END_POINT}/all`)
   return response.data
}
