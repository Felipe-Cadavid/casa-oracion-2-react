import React from 'react';
import firebase from 'firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

import Loader from '../Loader';
import getNews from '../../util/getNews';

import './styles/CreateNew.css';

function CreateNew({setNews, setCreateNew}){
    const [previewImage, setPreviewImage] = React.useState('none');
    const [previewTitle, setPreviewTitle] = React.useState();
    const [previewText, setPreviewText] = React.useState();

    const [newImageName, setNewImageName] = React.useState('none');
    const [newImageURL, setNewImageURL] = React.useState('none');
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
        if(e.currentTarget.className === 'createNew__back-button') setCreateNew(false)
        else
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
            if(isUploadingImage){
                e.preventDefault();
                alert('Por favor espere a que la imagen termine de subirse')
            } else {
                e.preventDefault();
                createNew(previewTitle, previewText, newImageURL, newImageName);
            }
        }

        
    }

    function createNew(title, text, image, imageName){
        setLoading(true);
        const d = new Date();
        return db.collection("news").add({
            title: title,
            text: text,
            imageLink: image,
            imageName: imageName,
            date: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`,
            time: d.getTime()
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
                    alert("Noticia creada correctamente")
                    setNews(nextNews);
                    setCreateNew(false);
                })
                .catch(error => {
                    console.log(`Error al obtener noticias: ${error}`)
                    setCreateNew(false);
                })
        })
        .catch(error => {
            console.error(`Error al agregar noticia: ${error}`)
        })
    }

    function uploadNewImage(file){
        const d = new Date();
        const imageReference = `${file.name}${d.getTime()}`
        const refStorage = firebase.storage().ref(`news-images/${imageReference}`);
        const task = refStorage.put(file);
        setIsUploadingImage(true);
        
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
                        setNewImageName(imageReference);
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
        <div className="createNew-container">
            <div onClick={handleClick} className="createNew__back-button"><FontAwesomeIcon icon={faArrowCircleLeft}/> Volver</div>
            <h2 className="createNew__title">Crear Noticia</h2>
            <div className="createNew__main-container">
                {!loading ?
                <>
                <div className="createNew__preview">
                    {!(previewImage === 'none') &&
                        <img className="preview__image" src={previewImage} alt="Imagen de la noticia" />
                    }
                    <div className="preview__text-container">
                        <h3 className="preview__title">{previewTitle && !(previewTitle[0] === ' ') ? previewTitle : 'Título'}</h3>
                        <p className="preview__text">{previewText && !(previewText[0] === ' ') ? previewText : 'Texto de la noticia'}</p>
                    </div>
                </div>
                <div className="createNew__form-container">
                    <form className="createNew__form">
                        <fieldset>
                            <label htmlFor="title-input">Título</label>
                            <input onChange={handleChange} className="createNew__title-input" id="title-input" type="text" placeholder="Título de la noticia" required/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="text-input">Texto</label>
                            <textarea onChange={handleChange} className="createNew__text-input" id="text-input" cols="30" rows="10" placeholder="Noticia" required/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="image-input">Imagen</label>
                            <input onInputCapture={handleChange} className="createNew__image-input" type="file" id="image-input" accept="image/*" size="60"/>
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
                        <button onClick={handleClick} className="createNew__submit-button" type="submit">Crear noticia</button>
                        
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

export default CreateNew;