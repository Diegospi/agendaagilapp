import { useState } from "react"

export function Formulario() {

    const[verCedula,modificarCedula]=useState("")
    const[verContraseña,modificarContraseña]=useState("")

    function procesarFormulario(){}

    return (
        <>
            <section className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-6">
                        <img src="../../src/assets/logo.png" alt="" className="img-fluid" />
                        <form className="border rounded p-4">
                            <h2>Controla tu salud</h2>

                            <div class="input-group mb-3 mt-4">
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-vcard"></i></span>
                                <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Numero cedula"
                                id="identificacion"
                                />
                            </div>
                            <div class="input-group mb-3 mt-4">
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-file-lock2"></i></span>
                                <input 
                                type="password" 
                                class="form-control" 
                                placeholder="Contraseña"
                                id="contraseña"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">Ingresar</button>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}