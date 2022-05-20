import axios from "axios"

const users =[]

export const addUser =(user) =>{
    return axios.post("http://localhost/inscription",{...user})
    // users.push(user)
}

export const log=(user) =>{
    return axios.post("http://localhost/login",{...user})
}

export const afficheAccueil = () =>{
    return axios.get("http://localhost/Connection")
}