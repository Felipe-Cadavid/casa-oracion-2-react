import React from 'react';
import Modal from './Modal';

import './styles/DeletePetitionModal.css'

function DeletePetitionModal(props){
    return <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <div className="modal-delete-container">
            <h1 className="modal-delete__title">Eliminar petición</h1>
            <p>¿Estás seguro de que deseas eliminar la petición de {props.element.name}?</p>
            <p>"{props.element.petition}"</p>
            <p className="red">Esta acción no puede deshacerse</p>
            <div className="modal-delete__buttons-container">
                <button onClick={props.handleClick} type="button" className="modal-delete__delete-button">Eliminar petición</button>
                <button onClick={props.handleClick} type="button" className="modal-delete__cancel-button">Cancelar</button>
            </div>
        </div>
    </Modal>
}

export default DeletePetitionModal;