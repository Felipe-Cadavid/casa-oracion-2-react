import Database from './Database'

function getPetitions(){
    return new Promise((resolve, reject) => {
        Database.collection('petitions').get()
            .then(query => {
               resolve(query);
            })
    });
}

export default getPetitions;