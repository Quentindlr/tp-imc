import axios from "axios"

let users 
let id

export const addUser =(user) =>{
    return axios.post("http://localhost/inscription",{...user})
}

export function login(user){
    axios.get("http://localhost/Connection/"+user.Nom+"/"+user.Mdp).then(res =>{
        users = res.data.connection[0].TalbeIMC
        id = res.data.connection[0].idClient
    })
    
    return axios.get("http://localhost/Connection/"+user.Nom+"/"+user.Mdp)
}

export function afficheIMC(){
     return users
}

export function afficheId(){
    return id
}

export function newImc(imc,id){
    console.log(imc);
    return axios.post("http://localhost/NouveauImc/"+id,{...imc})
}