import React from 'react';
import firebase from 'firebase';
import DeletePetitionModal from '../DeletePetitionModal';
import Loader from '../Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './styles/PeticionesList.css'

function PeticionesList(){
    const [state, setState] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [isOpen, setIsOpen] = React.useState(false);
    const [modalElement, setModalElement] = React.useState({});
    var petitions = [];
    const db = firebase.firestore();

    React.useEffect(() => {
        getData();
    },[])

    const getData = ()=> {
        db.collection("petitions").get()
        .then(query => {
            petitions = [];
            query.forEach(query => {
                let newPetition = {
                    id: query.id,
                    name: query.data().name,
                    petition: query.data().petition
                }
                petitions.push(newPetition);
            })
            setState(petitions);
            setLoading(false);
            // setTimeout(() => {
            //     console.log("TIMEOUT")
            //     getData();
            // }, 10000)
        })
    }

    function deletePetition(petition){
        return db.collection("petitions").doc(petition).delete()
            .then(() => {
              console.log(`Peticion con id ${petition} borrada correctamente`)  
            })
            .catch(error => {
              console.log(`Error al borrar peticion ${petition}, Error: ${error}`)
            })
    }

    function handleClick(element, e) {
        const boton = e.currentTarget.className;
        switch(boton){
            case "button__copy":
                copyToClipboard(`${element.name} => ${element.petition}`);
                break;
            case "button__delete":
                setIsOpen(true);
                setModalElement(element);
                break;
            case "modal-delete__delete-button":
                setLoading(true);
                deletePetition(element.id)
                .then(() => {
                    getData();
                })
                .catch(err => {
                    console.log(`Error en handleclick: ${err}`)
                })
                break;
            case "modal-delete__cancel-button":
                setIsOpen(false);
                break;
            case "modal__close-button":
                setIsOpen(false); 
                break;
            default:
                console.log('difol')
        }
    }

    const copyToClipboard = str => {
        const el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      };


    return(
        <>
            {loading ?
                <div className="loader-container">
                    <Loader />
                </div>
                :
                <>
                    {state.map(element => {
                        return(
                            <div key={element.id} className="petition-container">
                                <div className="petition-data">
                                    <div className="petition__name"><span>Nombre: </span>{element.name}</div>
                                    <div className="petition__text"><span>Petición: </span>{element.petition}</div>
                                </div>
                                <div className="petition-controls">
                                        <div onClick={e => handleClick(element, e)} className="button__copy"><FontAwesomeIcon className="test" icon={faCopy} /></div>
                                        <div onClick={e => handleClick(element, e)} className="button__delete"><FontAwesomeIcon icon={faTimes} /></div>
                                        <DeletePetitionModal 
                                            isOpen={isOpen}
                                            petitionName={element.name}
                                            petitionText={element.petition}
                                            handleClick={e => handleClick(element, e)}
                                            onClose={e => handleClick(null, e)}
                                            element={modalElement}
                                        />
                                </div>
                            </div>
                        )
                    })}
                </>
                
            }
        </>
    );
}

export default PeticionesList;