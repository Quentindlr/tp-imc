import axios from "axios"

const users =[]

export const addUser =(user) =>{
    return axios.post("http://localhost/inscription",{...user})
    // users.push(user)
}

export const afficheUser = () =>{
    return users
}