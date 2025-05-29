import axios from 'axios'


const API = axios.create ({
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
})

export const loginUser = (data: {email:string ,password:string})=>{
    API.post("/auth/login",data)
}

export const registerUser = (data: {name:string,email:string ,password:string})=>{
    API.post("/auth/register",data)
}
