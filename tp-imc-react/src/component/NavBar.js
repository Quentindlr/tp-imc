import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        // <div className="bg-white" id="sidebar">
        //     <div className="py-4 px-3 mb-4 bg-light">
        //         <div className="media d-flex align-items-center">
        //             <div className="media-body">
        //                 <h2 className="m-0">React Imc</h2>
        //                 <div className="card p-2" style={{width:"100px"}}>Vincent</div>
        //                 <p className="m-0">Periode des saisies</p>
        //                 <Link to="/connexion">Semaine</Link> <br/>
        //                 <Link to="/connexion">Mois</Link> <br/>
        //                 <Link to="/connexion">Trimestre</Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
            <h2 className="navbar-brand">React Imc</h2>
            <div className="navbar">Vincent</div>
            <p>Periode des saisie</p>

        </nav>
    )
} 