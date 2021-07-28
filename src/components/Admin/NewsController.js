import React from 'react';
import Loader from '../Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';

import CreateNew from './CreateNew';
import EditNew from './EditNew';

import getNews from '../../util/getNews';
import deleteNew from '../../util/deleteNew';

import './styles/NewsController.css';
import DeleteNewModal from '../DeleteNewModal';

function NewsController(){
    const [loading, setLoading] = React.useState(true);
    const [news, setNews] = React.useState([]);
    const [createNew, setCreateNew] = React.useState(false);
    const [editNew, setEditNew] = React.useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);

    const [currentNewIndex, setCurrentNewIndex] = React.useState(0);

    React.useEffect(() => {
        setLoading(true);
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
            setNews(nextNews);
            setLoading(false);
        })
        .catch(error => {
            console.log(`Error al obtener noticias: ${error}`)
        })
    }, []);

    function handleClick(index, e){
        console.log(e.currentTarget.className)
        switch(e.currentTarget.className){
            case 'createnew-button':
                setCreateNew(true);
                break;
            case 'button__edit':
                setCurrentNewIndex(index);
                setEditNew(true);
                break;
            case 'button__delete':
                setCurrentNewIndex(index);
                setDeleteModalOpen(true);
                break;
            case 'modal-delete__cancel-button':
                setDeleteModalOpen(false);
                break;
            case 'modal__close-button':
                setDeleteModalOpen(false);
                break;
            case 'modal-delete__delete-button':
                setLoading(true);
                deleteNew(currentNewIndex, news)
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
                            setNews(nextNews);
                            setLoading(false);
                        })
                        .catch(error => {
                            console.log(`Error al obtener noticias: ${error}`)
                        })
                    })
                setDeleteModalOpen(false);
                break;
            default:
                console.log('Error: not found');
        }
    }

    return(
        <>
            {loading ?
                <div className="loader-container">
                    <Loader />
                </div>
                :
                <> 
                    {!createNew && !editNew &&
                        <div className="createnew-button-container">
                            <button onClick={e => handleClick(null, e)} className="createnew-button">Crear noticia</button>
                        </div>
                    } 
                    {!createNew && !editNew && news.length !== 0 ? 
                    
                    news.map((element, index) => {
                        return(
                            
                            <div key={element.id} className="news-controller__new">
                                {!(element.imageLink === 'none') &&
                                    <div className="new__image-container"><img className="new__image-container__image" src={element.imageLink} alt="Img" /></div>
                                }   
                                <div className="new__text-container">
                                    <h3 className="new__title">{element.title}</h3>
                                    <p className="new__text">{element.text}</p>
                                </div>
                                <div className="new__controls-container">
                                    <div onClick={e => handleClick(index, e)} className="button__edit"><FontAwesomeIcon className="test" icon={faPen} /></div>
                                    <div onClick={e => handleClick(index, e)} className="button__delete"><FontAwesomeIcon icon={faTimes} /></div>
                                </div>
                            </div>
                        
                        )   
                    }
                    ) 
                    
                    : createNew ?
                        <CreateNew setNews={setNews} setCreateNew={setCreateNew}/>
                    : editNew ?
                        <EditNew setNews={setNews} newId={news[currentNewIndex].id} newTitle={news[currentNewIndex].title} newText={news[currentNewIndex].text} newImage={news[currentNewIndex].imageLink} newImageName={news[currentNewIndex].imageName} setEditNew={setEditNew} />
                    :
                    <div className="no-news">
                            <h3 className="no-news__text">No hay noticias por el momento.</h3>
                        </div>
                    }
                    {!(news.length === 0) && deleteModalOpen &&
                        <DeleteNewModal isOpen={deleteModalOpen} onClose={e => handleClick(null, e)} newTitle={news[currentNewIndex].title} handleClick={handleClick} />
                    }
                </>
                
            }
        </>
    )
}

export default NewsController;