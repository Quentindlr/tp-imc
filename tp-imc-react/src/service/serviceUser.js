import axios from "axios"



export const addUser =(user) =>{
    return axios.post("http://localhost/inscription",{...user})
}

export function login(user){
    axios.get("http://localhost/Connection/"+user.Nom+"/"+user.Mdp).then(res =>{
        localStorage.setItem("user",JSON.stringify(res.data.connection.table))
        localStorage.setItem("id",res.data.connection.idClient)
    })
    
    return axios.get("http://localhost/Connection/"+user.Nom+"/"+user.Mdp)
}

export function afficheIMC(){
    const id = localStorage.getItem("id")
    
    axios.get("http://localhost/Acceuil/"+id).then(res =>{
        console.log("slt");
        localStorage.setItem("user",JSON.stringify(res.data.retourimc.table))
    })
}

export function newImc(imc,id){
    return axios.post("http://localhost/NouveauImc/"+id,{...imc})
}

