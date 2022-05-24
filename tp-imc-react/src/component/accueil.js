export default function Accueil() {




    
    const IMC = JSON.parse(localStorage.getItem("user"))


    console.log(JSON.parse(localStorage.getItem("user")));






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