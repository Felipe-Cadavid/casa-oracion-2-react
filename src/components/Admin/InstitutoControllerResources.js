import React, {useState, useEffect} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';

import getResources from '../../util/getResources';

import Loader from '../Loader'

import './styles/InstitutoControllerResources.css'

function InstitutoControllerResources(){
    const [loading, setLoading] = useState(true);
    const [resources, setResources] = useState([]);
    
    useEffect(() => {
        getResources()
            .then(query => {
                let nextResources = []
                query.forEach(doc => {
                    nextResources.push({
                        id: doc.id,
                        course: doc.data().course,
                        name: doc.data().name,
                        desc: doc.data().desc,
                        date: doc.data().date,
                        type: doc.data().type,
                        url: doc.data().url
                    })
                });
                setResources(nextResources);
                setLoading(false)
            })
    }, []);


    return(
        <>
            {loading ?
                <div className="loader-container">
                    <Loader />
                </div>
            :
                <>
                    <div className="admin-resource-create">Nuevo recurso</div>

                    {resources.map(resource => {
                        return(
                            <div key={resource.id} className="admin-resource-container">
                                <div className="admin-resource-text-container">
                                    <h3 className="admin-resource-title">{resource.name} - {resource.course}</h3>
                                    <h4 className="admin-resource-desc">{resource.desc}</h4>
                                    <h5 className="admin-resource-date">{resource.date}</h5>
                                </div>
                                <div className="admin-resource-controls-container">
                                    <div className="admin-resource-controls-container-update">
                                        <div className="button__edit"><FontAwesomeIcon className="test" icon={faPen} /></div>
                                        <div className="button__delete"><FontAwesomeIcon icon={faTimes} /></div>
                                    </div>
                                    <button className="admin-resource-viewButton">Ver</button>
                                </div>
                                

                            </div>
                        )
                    })}
                </>
            }
        </>
    )
}

export default InstitutoControllerResources;