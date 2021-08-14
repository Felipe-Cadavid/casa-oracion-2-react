import React from 'react';

import getResources from '../util/getResources';
import ImageViewer from './ImageViewer';
import Loader from './Loader';
import PdfViewer from './PdfViewer';

import './styles/InstitutoRecursos.css';

function InstitutoRecursos(){
    const [resources, setResources] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [viewingResource, setViewingResource] = React.useState(false);
    const [resourceUrl, setResourceUrl] = React.useState('');
    const [resourceType, setResourceType] = React.useState('');

    React.useEffect(() => {
        getResources()
            .then(docs => {
                let nextResources = [];
                docs.forEach(doc => {
                    nextResources.push({
                        "id": doc.id,
                        "course": doc.data().course,
                        "name": doc.data().name,
                        "desc": doc.data().desc,
                        "date": doc.data().date,
                        "type": doc.data().type,
                        "url": doc.data().url
                    })
                });
                setResources(nextResources);
                setLoading(false);
            })
            .catch(error => {
                console.error(`Error al obtener recursos: ${error}`)
            })
    }, []);

    function handleClick(resourceUrl, resourceType, e){
        if (e.target.outerText === 'Ver') {
            setResourceUrl(resourceUrl);
            setResourceType(resourceType);
            setViewingResource(true);
        }
    }

    return(
        <>
            {loading ?
                <div className="loader-container">
                    <Loader />
                </div>
                :
                !viewingResource ?
                resources.map(resource => {
                    return(
                        <section key={resource.id} className="institute__resource-section">
                            <div className="institute__resource-desc-container">
                                <h3 className="institute__resource-name">{resource.name}</h3>
                                <p className="institute__resource-desc">{resource.desc}</p>
                                <div className="institute__resource-meta-container">
                                    <span className="institute__resource-type">Archivo: {resource.type}</span>
                                    <span className="institute__resource-date">Fecha: {resource.date}</span>
                                </div>
                            </div>
                            <div className="institute__resource-buttons-container">
                                <button onClick={e => handleClick(resource.url, resource.type, e)} type="button" className="institute__resource-view-button">Ver</button>
                            </div>
                            
                        </section>
                    )
                })
                : resourceType === 'pdf' ?
                    <PdfViewer pdf={resourceUrl} setViewingResource={setViewingResource} />
                :   <ImageViewer image={resourceUrl} setViewingResource={setViewingResource} />
            }
        </>
    )
}

export default InstitutoRecursos;