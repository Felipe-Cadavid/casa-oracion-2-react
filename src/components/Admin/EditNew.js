import React from 'react';
import firebase from 'firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

import getNews from '../../util/getNews';

import './styles/EditNew.css';
import Loader from '../Loader';

function EditNew(props){
    const [previewImage, setPreviewImage] = React.useState(props.newImage);
    const [previewTitle, setPreviewTitle] = React.useState(props.newTitle);
    const [previewText, setPreviewText] = React.useState(props.newText);

    const [newImageName, setNewImageName] = React.useState(props.newImageName);
    const [newImageURL, setNewImageURL] = React.useState(previewImage);
    const [isUploadingImage, setIsUploadingImage] = React.useState(false);
    const [uploadPercent, setUploadPercent] = React.useState(0);
    const [loading, setLoading] = React.useState(false);


    function handleChange(e){
        switch (e.target.id){
            case 'title-input':
                setPreviewTitle(e.target.value);
                break;
            case 'text-input':
                setPreviewText(e.target.value);
                break;
            case 'image-input':
                try{
                    setPreviewImage(URL.createObjectURL(e.target.files[0]));
                    uploadNewImage(e.target.files[0]);
                } catch {
                    
                }
                break;
            default:
                console.log('Error en handlechange');
        }
    }
 
    const db = firebase.firestore();

    

    function handleClick(e){
        if(e.currentTarget.className === 'editNew__back-button') {
            props.setEditNew(false)
        } else
        if(!(previewTitle && previewText)){
            return;
        } else
        if(previewTitle[0] === ' ') {
            e.preventDefault();
            alert('Por favor borra el espacio al principio del título y vuelve a intentarlo');
        } else
        if(previewText[0] === ' '){
            e.preventDefault();
            alert('Por favor borra el espacio al principio del texto y vuelve a intentarlo');
        } else {
            e.preventDefault();
            editNew(previewTitle, previewText, newImageURL, newImageName);
        }

        
    }

    function editNew(title, text, image, imageName){
        setLoading(true);
        return db.collection("news").doc(props.newId).update({
            title: title,
            text: text,
            imageLink: image,
            imageName: imageName
        })
        .then(() => {
            getNews()
                .then(query => {
                    let nextNews = [];
                    query.forEach(doc => {
                        nextNews.push({
                            "id": doc.id,
                            "title": doc.data().title,
                            "text": doc.data().text,
                            "date": doc.data().date,
                            "imageLink": doc.data().imageLink,
                            "imageName": doc.data().imageName
                        })                        
                    })
                    alert("Noticia editada correctamente")
                    props.setNews(nextNews);
                    props.setEditNew(false);
                })
                .catch(error => {
                    console.log(`Error al obtener noticias: ${error}`)
                    props.setEditNew(false);
                })
        })
        .catch(error => {
            console.error(`Error al editar noticia: ${error}`)
        })
    }


    function uploadNewImage(file){
        const d = new Date();
        const imageReference = `${file.name}${d.getTime()}`

        const refStorage = firebase.storage().ref(`news-images/${imageReference}`);
        const task = refStorage.put(file);
        setIsUploadingImage(true);

        if(newImageName !== 'none'){
            const imageRef = firebase.storage().ref(`news-images/${newImageName}`);
            imageRef.delete()
                .then(() => {
                    console.log('IMAGEN BORRADA CON EXITO')
                })
                .catch(error => {
                    console.log('ERROR BORRANDO LA IMAGEN: ', error);
                })
        }

        task.on('state_changed',
            snapshot => {
                const porcentaje = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                setUploadPercent(Math.floor(porcentaje));
            },
            err => {
                console.log(`Error subiendo el archivo ${err}`)
            }, () => {
                task.snapshot.ref.getDownloadURL()
                    .then(url => {
                        console.log('imagen URL: ', url);
                        setNewImageURL(url);
                        setNewImageName(imageReference)
                        setIsUploadingImage(false);
                    })
                    .catch(error => {
                        console.log('Error obteniendo la URL: ', error);
                        setIsUploadingImage(false);
                    })
            }
        )
    }

    

    return(
        <div className="editNew-container">
            <div onClick={handleClick} className="editNew__back-button"><FontAwesomeIcon icon={faArrowCircleLeft}/> Volver</div>
            <h2 className="editNew__title">Editar Noticia</h2>
            <div className="editNew__main-container">
            {!loading ?
            <>
            <div className="editNew__preview">
                {!(previewImage === 'none') &&
                    <img className="preview__image" src={previewImage} alt="" />
                }
                <div className="preview__text-container">
                    <h3 className="preview__title">{previewTitle && !(previewTitle[0] === ' ') ? previewTitle : 'Título'}</h3>
                    <p className="preview__text">{previewText && !(previewText[0] === ' ') ? previewText : 'Texto de la noticia'}</p>
                </div>
            </div>
            <div className="editNew__form-container">
                <form className="editNew__form">
                    <fieldset>
                        <label htmlFor="title-input">Título</label>
                        <input onChange={handleChange} className="editNew__title-input" id="title-input" type="text" placeholder="Título de la noticia" defaultValue={previewTitle} required/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="text-input">Texto</label>
                        <textarea onChange={handleChange} className="editNew__text-input" id="text-input" cols="30" rows="10" placeholder="Noticia" defaultValue={previewText} required/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="image-input">Imagen</label>
                        <input onInputCapture={handleChange} className="editNew__image-input" type="file" id="image-input" accept="image/*" size="60"/>
                        {isUploadingImage &&
                        <>
                            <div className="bar-loader-container">
                                <div className="loading-bar-container">
                                    <div style={{width: (uploadPercent * 2)}} className="loading-bar"></div>
                                </div>
                                <span className="loading-bar-percent">{`${uploadPercent}%`}</span>
                            </div>
                        </>
                        }
                    </fieldset>
                    <button onClick={handleClick} className="editNew__submit-button" type="submit">Editar noticia</button>
                </form>
            </div>
            </>
            :
            <div className="loader-container">
                <Loader />
            </div>
            }
            
            </div>
        </div>
        
    )
}

export default EditNew;