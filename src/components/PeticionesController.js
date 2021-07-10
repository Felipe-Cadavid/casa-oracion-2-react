import React from 'react';
import Peticiones from '../pages/Peticiones';
import firebase from 'firebase';

function PeticionesController(){
    const [name, setName] = React.useState("");
    const [petition, setPetition] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [petitionSent, setPetitionSent] = React.useState(false);

    const handleChange = e =>{
        if(e.target.className === "form__input"){
            setName(e.target.value);
        } else {
            setPetition(e.target.value);
        }
    }

    const handleClick = e =>{
        if(name != "" && petition != ""){
            e.preventDefault();
            setLoading(true);
            crearPeticion(name, petition)
            .then(() => {
                setLoading(false);
                setPetitionSent(true);
            })
            .catch(error => {
                setLoading(false);
                console.log("ERROR");
            })
        }
    }

    const db = firebase.firestore();

    const crearPeticion = (name, petition) => {
        return db.collection("petitions").add({
            name: name,
            petition: petition
        })
        .then(refDoc => {
            console.log("Peticion creada correctamente");
        })
        .catch(error => {
            console.error(`Error al agregar petición: ${error}`)
        })
    }

    const restart = () => {
        setName("");
        setPetition("");
        setLoading(false);
        setPetitionSent(false);
    }

    return(
        <Peticiones 
            loading={loading}
            setLoading={setLoading}
            name={name}
            setName={setName}
            petition={petition}
            setPetition={setPetition}
            petitionSent={petitionSent}
            setPetitionSent={setPetitionSent}
            restart={restart} 
            crearPeticion={crearPeticion}
            handleClick={handleClick}
            handleChange={handleChange}
        />
    )
}

export default PeticionesController;