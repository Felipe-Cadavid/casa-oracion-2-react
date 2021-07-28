import Database from './Database'
import Storage from './Storage'

function deleteNew(index, news){
    return new Promise((resolve, reject) => {
        if(news[index].imageName !== 'none'){
            const imageRef = Storage.ref(`news-images/${news[index].imageName}`);
            imageRef.delete()
        }
        const newId = news[index].id;
        Database.collection('news').doc(newId).delete()
            .then(() => {
                console.log('solvo')
                resolve();
            })
            .catch(error => {
                console.error(`Error al borrar noticia ${newId}, Error: ${error}`);
                reject();
            })
    })
    
}

export default deleteNew;