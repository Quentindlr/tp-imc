import { Link } from "react-router-dom";
import React, { useState } from "react";
import Modal from "react-modal"
import { newImc } from "../../service/serviceUser";
import { afficheId } from "../../service/serviceUser";

export default function NavBar() {
    const [showModal, setShowmodal] = useState(false)
    const [poid, setPoid] = useState()

    let id = afficheId()
    console.log(id);

    function openModal() {
        setShowmodal(true);
    }

    function fieldsOnChange(e) {
        const tmpUser = poid
        tmpUser[e.target.getAttribute("name")] = e.target.value
        setPoid(...tmpUser)
    }

    function confirm(e) {
        e.preventDefault()
        newImc({...poid},id)
            .then(res => { 
            setShowmodal(false);
        })

    }

    return (

        <>

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
                    <button type="button" onClick={openModal}  >Saisir Poids</button><br />
                    <Modal isOpen={showModal}
                        ariaHideApp={false}>
                        <h4>Saisir nouveau poid</h4>
                        <form onSubmit={confirm}>
                            <input type="text" name="poid" onChange={fieldsOnChange}  placeholder="Nouveau poid" />
                            <button type="submit">Entrer</button>
                        </form>
                    </Modal>


                </div>


                <button type="button" >Déconnexion</button>



            </nav><br />

        </>
    )
} 