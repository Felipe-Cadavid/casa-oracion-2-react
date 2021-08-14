import Storage from './Storage';

function uploadResourceFile(file, setIsUploadingFile, setUploadPercent){
    return new Promise ((resolve, reject) => {
        const d = new Date();
        const imageReference = `${file.name}${d.getTime()}`;
        const refStorage = Storage.ref(`institute-resources/${imageReference}`);
        const task = refStorage.put(file);
        setIsUploadingFile(true);
        
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
                            setIsUploadingFile(false);
                            resolve({
                                fileName: imageReference,
                                fileUrl: url
                            });
                        })
                        .catch(error => {
                            console.log('Error obteniendo la URL: ', error);
                            setIsUploadingFile(false);
                        })
                })
        
    })
    
}

export default uploadResourceFile;