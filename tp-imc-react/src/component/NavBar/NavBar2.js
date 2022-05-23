import { Component } from "react";
import { Link } from "react-router-dom";
import { afficheId, newImc } from "../../service/serviceUser";
import Modal from "react-modal"

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imc: {
                poids: undefined,
                taille: undefined
            },
            showModal:false,
        }
            
    }

    openModal = () =>{
        this.setState({showModal:true})
    }

    fieldsOnChange = (e) => {
        const tmpImc = this.state.imc
        tmpImc[e.target.getAttribute("name")] = e.target.value
        this.setState({ imc: { ...tmpImc } })
    }

    confirm = (e) => {
        e.preventDefault()
        let id = afficheId()
        newImc({ ...this.state.imc },id)
            .then(res => {
                
                this.setState({showModal:false})
                
            })
    }

    render() { 
        return ( <>

            <div className="bg-white" id="sidebar">

                <div className="py-4 px-3 mb-4 bg-light">

                    <div className="media d-flex align-items-center">

                        <div className="media-body">

                            <h2 className="m-0">React Imc</h2>

                            <div className="card p-2" style={{ width: "100px" }}>Vincent</div>

                            <p className="m-0">Periode des saisies</p>

                            <Link to="/connexion">Semaine</Link> <br />

                            <Link to="/connexion">Mois</Link> <br />

                            <Link to="/connexion">Trimestre</Link>

                        </div>

                    </div>

                </div>

            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="sidebar">


                <div>
                    <button type="button" onClick={this.openModal}  >Saisir Poids</button><br />
                    <Modal isOpen={this.state.showModal}
                        ariaHideApp={false}>
                        <h4>Saisir nouveau poid</h4>
                        <form onSubmit={this.confirm}>
                            <input type="text" name="poids" onChange={this.fieldsOnChange}  placeholder="Nouveau poid" />
                            <input type="text" name="taille" onChange={this.fieldsOnChange}  placeholder="Nouveau poid" />
                            <button type="submit">Entrer</button>
                        </form>
                    </Modal>


                </div>


                <button type="button" >Déconnexion</button>



            </nav><br />

        </> );
    }
}
 
export default NavBar;