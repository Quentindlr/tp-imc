import { Component } from "react";
import { Link } from "react-router-dom";
import { addUser } from "../service/serviceUser";
import { withNavigate } from "../tools/navigate";

class FormInsc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{ 
                nom : undefined,
                mdp : undefined,
                age : undefined,
                taille : undefined,
                poids : undefined
            },
        }
    }

    fieldsOnChange = (e) => {
        const tmpUser = this.state.user
        tmpUser[e.target.getAttribute("name")] = e.target.value
        this.setState({user:{...tmpUser}})
    }

    confirm = (e) => {
        e.preventDefault()
        addUser({...this.state.user})
        .then(res => {
            if(res.data.error == false) {
                this.props.navigate("/login")
            }else{
                alert("donnée manquante")
            }
        })
    }

    state = {  }
    render() { 
        return ( 
            <form onSubmit={this.confirm}>
                <div>
                    <label>Name : </label>
                    <input type="text" name="nom" onChange={this.fieldsOnChange} placeholder="Name"/>
                </div>
                <div>
                    <label>Password : </label>
                    <input type="password" name="mdp" onChange={this.fieldsOnChange} placeholder="Password"/>
                </div>
                <div>
                    <label>Age : </label>
                    <input type="text" name="age" onChange={this.fieldsOnChange} placeholder="Age"/>
                </div>
                <div>
                    <label>Taille : </label>
                    <input type="text" name="taille" onChange={this.fieldsOnChange} placeholder="Taille"/>
                </div>
                <div>
                    <label>Poids : </label>
                    <input type="text" name="poids" onChange={this.fieldsOnChange} placeholder="Poids"/>
                </div>
                <div>
                    <button type="submit">
                        validation
                    </button>
                </div>
                <div>
                si vous disposez d'un compte?
            </div>
            <Link to="/connexion">
                <div>connexion</div>
            </Link>
            </form>
         );
    }
}
 
export default FormInsc;