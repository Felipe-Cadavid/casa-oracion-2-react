import Database from './Database'

function getNews(){
    return new Promise((resolve, reject) => {
        Database.collection('news').orderBy('date', 'desc').get()
            .then(query => {
               resolve(query);
            })
    });
}

export default getNews;