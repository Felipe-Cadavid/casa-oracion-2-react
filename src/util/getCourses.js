import Database from "./Database";

function getCourses(){
    return new Promise((resolve, reject) => {
        Database.collection('courses').get()
            .then(query => {
                resolve(query.docs);
            })
            .catch(error => {
                reject(error);
            })
    })
}

export default getCourses;