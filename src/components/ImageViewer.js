import React from 'react';

import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles/ImageViewer.css';

function ImageViewer({image, setViewingResource}){

    const handleClick = () => {
        setViewingResource(false);
    }

    return(
        <>
            <div onClick={handleClick} className="imageViewer-back"><FontAwesomeIcon icon={faArrowCircleLeft}/> Volver</div>
            <div className="imageViewer-container">
                <img className="imageViewer-image" src={image} alt="Recurso" />
            </div>
        </>
    )
}

export default ImageViewer;