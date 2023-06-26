
import axios from 'axios'

const api_backend = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/",
  });

  
export const auth ={
setAuthorization:(token)=>{
    api_backend.defaults.headers.Authorization = `Bearer ${token}`;
},

// getAuthorization:()=>{
//     api_backend.defaults.headers.Authorization?.replace('Bearer ', '');
// },

// removeAuthorization:()=>{
//     api_backend.defaults.headers.Authorization;
// },

signUp: (formData)=>{
    try{
        const res =api_backend.post('signup', formData)
        return res
    }catch(err){
        console.log(err)
    }
},

signin: (formData)=>{
    const res = api_backend.post('signin', formData)
    return res
},

getTrader:(trader_id)=>{
    const res = api_backend.get(`trader/${trader_id}`)
    return res.data
}
,
getAllTraders: ()=>{
    const res = api_backend.get('traders')
    return res
},

generateData: (formData)=>{
    const res = api_backend.post('generate-trades', formData)
    return res.data
},
}

export default auth