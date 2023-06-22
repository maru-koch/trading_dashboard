
import axios from 'axios'

const api_backend = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/",
  });

export const auth ={
signUp: async (formData)=>{
    try{
        const res = await api_backend.post('signup', formData)
        return res.data
    }catch(err){
        console.log(err)
    }
},

signin: (formData)=>{
    const res = api_backend.post('signin', formData)
    return res
},

getAllUsers: ()=>{
    const res = api_backend.post('users')
    return res.data
},

generateData: (formData)=>{
    const res = api_backend.post('generate-trades', formData)
    return res.data
},
}

export default auth