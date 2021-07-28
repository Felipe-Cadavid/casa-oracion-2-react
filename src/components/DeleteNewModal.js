import React from 'react';
import Modal from './Modal';

import './styles/DeleteNewModal.css'

function DeleteNewModal(props){
    return <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <div className="modal-delete-container">
            <h1 className="modal-delete__title">Eliminar noticia</h1>
            <p>¿Estás seguro de que deseas eliminar la noticia "{props.newTitle}"?</p>
            <p className="red">Esta acción no puede deshacerse</p>
            <div className="modal-delete__buttons-container">
                <button onClick={e => props.handleClick(props.element, e)} type="button" className="modal-delete__delete-button">Eliminar noticia</button>
                <button onClick={e => props.handleClick(null, e)} type="button" className="modal-delete__cancel-button">Cancelar</button>
            </div>
        </div>
    </Modal>
}

export default DeleteNewModal;