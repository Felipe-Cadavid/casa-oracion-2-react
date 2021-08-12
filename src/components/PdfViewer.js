import React from 'react';

import './styles/PdfViewer.css'

function PdfViewer(pdf){
    console.log('Este es el pdf ' + pdf.pdf);
    return(
        <div className="pdfFrameContainer">
            <iframe className='pdfFrame' src={pdf.pdf} frameBorder="0"></iframe>
        </div>
    )
}

export default PdfViewer;