import Database from './Database'

function deletePetition(petition){
    return new Promise((resolve, reject) => {
        Database.collection("petitions").doc(petition).delete()
            .then(() => {
              resolve();
            })
            .catch(error => {
              reject();
              console.log(`Error al borrar peticion ${petition}, Error: ${error}`)
            })
    })
    
}

export default deletePetition;