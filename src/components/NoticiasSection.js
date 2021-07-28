import React from 'react';

import getNews from '../util/getNews';

import './styles/NoticiasSection.css'

function NoticiasSection(){
    const [news, setNews] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        getNews()
        .then(query => {
            let nextNews = [];
            query.forEach(doc => {
                nextNews.push({
                    "id": doc.id,
                    "title": doc.data().title,
                    "text": doc.data().text,
                    "date": doc.data().date,
                    "imageLink": doc.data().imageLink
                })                        
            })
            setNews(nextNews);
            setLoading(false);
        })
        .catch(error => {
            console.log(`Error al obtener noticias: ${error}`)
        })
    }, [])

    return(
        <>
            <h2 className="news-title">Noticias</h2>
            {!loading && news.map(element => {
                return(
                    <article data-testid="new" key={element.id} className="new">
                        {!(element.imageLink === 'none') &&
                        <img className="new-image" src={element.imageLink} alt="Imagen de la noticia" />
                        }
                        <div className="new-text-container">
                            <h3 className="new-title">{element.title}</h3>
                            <div className="new-text">
                                <p className="new-text__paragraph">{element.text}</p>
                            </div>
                            <div className="new-date">
                                <span className="new-date__date">{element.date}</span>
                            </div>
                        </div>
                    </article>
                )
            })}
        </>
    )
}

export default NoticiasSection;