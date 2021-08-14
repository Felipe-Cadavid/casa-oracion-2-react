import Database from "./Database";

function createResource(course, name, desc, fileName, fileUrl, fileType){
    const d = new Date();
    return new Promise((resolve, reject) => {

        Database.collection("resources").add({
            course: course,
            name: name, 
            desc: desc,
            fileName: fileName,
            url: fileUrl,
            type: fileType,
            date: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`,
            time: d.getTime() 
        })
        .then(() => {
            resolve('Recurso subido correctamente');
        })
        .catch(error => {
            reject(error);
        })
    
    
    
    });
}

export default createResource;