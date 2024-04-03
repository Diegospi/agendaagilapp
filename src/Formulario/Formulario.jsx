import { useState } from "react"
import { useNavigate } from "react-router-dom"

import basedatosusuarios from "../utils/basedatosusuarios.json"

import Swal from 'sweetalert2'


export function Formulario() {

    const[verCedula,guardarCedula]=useState("")
    const[verContraseña,guardarContraseña]=useState("")

    //para navegar entre componentes debo declarar una variable que almacene el hook
    let enrutador=useNavigate()


    function procesarFormulario(evento){
        //Que hago si le hacen clic al boton del formulario?
        evento.preventDefault()        
        //console.log("Le hicieron clic al boton del formulario")

        //buscamos coincidencias entre  lo que escribe el usuario en el formulario y el json de la BD
        let busqueda=basedatosusuarios.find(function(usuario){
            return(usuario.documento==verCedula)
        })
        if (busqueda==undefined) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });

        } else {
        //voy a enrutar otro componente (¿Como lanzo un componente desde otro?)
        enrutador("/home")
        }

        //voy a enrutar otro componente (¿Como lanzo un componente desde otro?)
        //enrutador("/home")
    }

    return (
        <>
            <section className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-6">
                        <img src="../../src/assets/logo.png" alt="" className="img-fluid" />
                        <form className="border rounded p-4" onSubmit={procesarFormulario}>
                            <h2>Controla tu salud</h2>

                            <div class="input-group mb-3 mt-4">
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-vcard"></i></span>
                                <input 
                                type="text" 
                                class="form-control" 
                                placeholder="Numero cedula"
                                id="identificacion"
                                onChange={function(evento){guardarCedula(evento.target.value)}}
                                />
                            </div>
                            <div class="input-group mb-3 mt-4">
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-file-lock2"></i></span>
                                <input 
                                type="password" 
                                class="form-control" 
                                placeholder="Contraseña"
                                id="contraseña"
                                onChange={function(evento){guardarContraseña(evento.target.value)}}
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