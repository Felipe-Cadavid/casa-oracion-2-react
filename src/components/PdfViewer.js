import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './styles/PdfViewer.css'

function PdfViewer({pdf, setViewingResource}){

    const handleClick = () => {
        setViewingResource(false);
    }
    
    return(
        <>
            <div onClick={handleClick} className="pdfViewer-back"><FontAwesomeIcon icon={faArrowCircleLeft}/> Volver</div>
            <div className="pdfFrameContainer">
                <iframe className='pdfFrame' src={pdf} frameBorder="0"></iframe>
            </div>
        </>
        
    )
}

export default PdfViewer;