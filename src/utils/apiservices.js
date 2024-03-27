import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    params: {
    maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_TOKN,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromApi = async (url) => {
    try{
      const data = await axios.get(`${BASE_URL}/${url}`, options)
      return data.data
    }catch(err){
      if(err?.response?.status === 429 ){
        options.headers['X-RapidAPI-Key'] = process.env.REACT_APP_RAPID_API_TOKN_TWO
        const data = await axios.get(`${BASE_URL}/${url}`, options)
        return data.data
      }else{
        throw err
      }
    }
   
  }