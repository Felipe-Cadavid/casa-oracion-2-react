import Database from "./Database";

function getResources(){
    return new Promise((resolve, reject) => {
        Database.collection("resources").orderBy('date', 'desc').get()
            .then(query => {
                resolve(query.docs);
            })
            .catch(error => {
                reject(error);
            })
    })
}

export default getResources;