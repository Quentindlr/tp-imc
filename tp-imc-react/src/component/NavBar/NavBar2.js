import { Component } from "react";
import { Link } from "react-router-dom";
import { afficheIMC, newImc } from "../../service/serviceUser";
import Modal from "react-modal"
import { withNavigate } from "../../tools/navigate";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imc: {
                poids: undefined,
                taille: undefined
            },
            showModal: false,
        }

    }

    openModal = () => {
        this.setState({ showModal: true })
    }

    closeModal = () => {
        this.setState({ showModal: false })
    }

    fieldsOnChange = (e) => {
        const tmpImc = this.state.imc
        tmpImc[e.target.getAttribute("name")] = e.target.value
        this.setState({ imc: { ...tmpImc } })
    }

    confirm = (e) => {
        // e.preventDefault()
        let id = localStorage.getItem("id")
        newImc({ ...this.state.imc }, id)
            .then(res => {
                console.log("slt");
                // this.setState({showModal:false})  
                afficheIMC()
            })
    }

    deco = (e) => {
        localStorage.clear()
        this.props.navigate("/connexion")
    }

    render() {
        return (<>

                <nav className="nav flex-column bg-dark" style={{ width: "13rem", height: "100rem" }}>
                    <h4 className="row align-self-center">React Imc</h4>
                    <div className="row align-self-center">Vincent</div>
                    <div className="row align-self-center">Periode des saisies</div>
                    <Link className="row align-self-center" to="/connexion">Semaine</Link>
                    <Link className="row align-self-center" to="/connexion">Mois</Link>
                    <Link className="row align-self-center" to="/connexion">Trimestre</Link>

                    <div className="mb-3 row align-self-center">
                        <button className="btn btn-primary" style={{ width: "125px" }} type="button" onClick={this.openModal}  >Saisir Poids</button><br />
                        <Modal isOpen={this.state.showModal} >

                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">

                                        <h4 className="modal-title">Saisir nouvelle IMC</h4>

                                        <form onSubmit={this.confirm}>
                                            <div className="mb-3">
                                                <label className="form-label">Poids : </label>
                                                <input className="form-control" type="text" name="poids" onChange={this.fieldsOnChange} placeholder="Poids" />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Taille : </label>
                                                <input className="form-control" type="text" name="taille" onChange={this.fieldsOnChange} placeholder="Taille" />
                                            </div>
                                            <button className="btn btn-secondary" type="submit" onClick={this.closeModal}>Close</button>
                                            <button className="btn btn-primary" type="submit">Entrer</button>
                                        </form>

                                    </div>
                                </div>
                            </div>

                        </Modal>

                        {/* 
                    <Modal isOpen={this.state.showModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Saisir nouvelle IMC</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            test
                        </Modal.Body>
                        <Modal.Footer>
                            <button>Close</button>
                            <button>entrer</button>
                        </Modal.Footer>

                    </Modal> */}


                    </div>

                    <div className="mb-3 row align-self-center">
                        <button className="btn btn-primary" style={{ width: "125px" }} type="button" onClick={this.deco} >Déconnexion</button>
                    </div>
                </nav>


        </>);
    }
}

export default withNavigate(NavBar);