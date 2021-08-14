import React, {useState} from 'react';

import createResource from '../../util/createResource';

import uploadResourceFile from '../../util/uploadResourceFile';

import './styles/InstitutoControllerNewResource.css'

function InstitutoControllerNewResource({setCreatingNewResource}){
    const [course, setCourse] = useState('');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState('');
    const [fileType, setFileType] = useState('');

    const [isUploadingFile, setIsUploadingFile] = useState(false);
    const [uploadPercent, setUploadPercent] = useState(0);

    const getFileType = file => {
        const array = file.type.split('/');
        if(array[1] === 'jpeg' || array[1] === 'png'){
            return 'imagen'
        } else {
            return array[1];
        }
    }

    const handleChange = e => {
        switch (e.target.id) {
            case 'cursos':
                setCourse(e.target.value);
                break;
            case 'resource-name':
                setName(e.target.value);
                break;
            case 'desc':
                setDesc(e.target.value);
                break;
            case 'resource-file':
                setFile(e.target.files[0])
                setFileType(getFileType(e.target.files[0]));
                break;
            default:
                console.log('Error');
                break;
        }
    }

    const handleClick = e => {
        if(course !== '' && name !== '' && desc !== '' && file !== ''){
            e.preventDefault();
            uploadResourceFile(file, setIsUploadingFile, setUploadPercent)
                .then(query => {
                    createResource(course, name, desc, query.fileName, query.fileUrl, fileType)
                    .then(() => {
                        setCreatingNewResource(false);
                    })
                    .catch(error => {
                        console.log(`Hubo un error :/ ${error}`)
                    })
                })
            
        } else {
            e.preventDefault();
            console.log('No entre al if')
        }
    }

    

    return(
        <div className="new-resource-container">
            <form className="new-resource-form">
                <label htmlFor="cursos">Curso*</label>
                <select onChange={handleChange} className="new-resource-input" name="cursos" id="cursos" required>
                    <option hidden value="none">Selecciona un curso</option>
                    <option value="Seminario de los salmos">Seminario de los salmos</option>
                </select>

                <label htmlFor="resource-name">Nombre del recurso*</label>
                <input onChange={handleChange} className="new-resource-input" type="text" name="resource-name" id="resource-name" placeholder="Nombre del recurso"  required/>

                <label htmlFor="desc">Descripción del recurso*</label>
                <textarea onChange={handleChange} className="new-resource-input" name="desc" id="desc" cols="30" rows="10" placeholder="Descripción..." required />

                <label htmlFor="resource-file">Recurso*</label>
                <input onInputCapture={handleChange} type="file" name="resource-file" id="resource-file" required />
                {isUploadingFile &&
                    <div className="loading-bar-container">
                        <div style={{width: (uploadPercent * 2)}} className="loading-bar"></div>
                    </div>
                }

                <button onClick={handleClick} type="submit">Crear recurso</button>
            </form>
        </div>
    )
}

export default InstitutoControllerNewResource;