import Database from './Database';

function getVerses(){
    return new Promise((resolve, reject) => {
        Database.collection('verses').get()
            .then(query => {
               resolve(query);
            })
    });
}

export default getVerses;