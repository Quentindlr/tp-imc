import axios from "axios"

export const addUser =(user) =>{
    return axios.post("http://localhost/inscription",{...user})
}