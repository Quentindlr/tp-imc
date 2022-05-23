import { useEffect, useState } from "react";
import { afficheIMC, login } from "../service/serviceUser";

export default function Accueil() {



    const IMC = afficheIMC() 




    return (

        <>
            <div>
                {IMC.map((p, i) => {

                    return (
                        <>
                            <div key={i}>
                                <div>{p.imc}</div>
                                <div>{p.dateID}</div>
                            </div><br />
                        </>

                    )


                })}


            </div>
        </>

    )

}