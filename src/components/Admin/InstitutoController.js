import React, {useState, useRef} from 'react';

import './styles/InstitutoController.css'

import InstitutoControllerResources from './InstitutoControllerResources';

function InstitutoController(){
    const resourcesButton = useRef();
    const otherButton = useRef();

    const asideButtons = [resourcesButton, otherButton]

    const [selectedTab, setSelectedTab] = useState('start');

    const handleclick = e => {
        asideButtons.forEach(button => {
            button.current.style.backgroundColor = '#8a0200'
        })
        e.target.style.backgroundColor = '#700201';
        setSelectedTab(e.target.outerText);
    }

    return(
        <div className="AdminInstitutoContainer">
            <aside className="AdminInstitutoAside">
                <div ref={resourcesButton} onClick={handleclick} className="ResourcesButton">Recursos</div>
                <div ref={otherButton} onClick={handleclick} className="ResourcesButton">Cursos</div>
            </aside>
            <div className="AdminInstitutoMain">
                {selectedTab === "start" ?
                    <div>Panel de control del instituto Bíblico</div>
                
                :
                
                selectedTab === "Recursos" &&
                    <InstitutoControllerResources />
                }
            </div>
        </div>
    )
}

export default InstitutoController;