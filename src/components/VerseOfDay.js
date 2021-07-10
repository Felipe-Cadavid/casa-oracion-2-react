import React from 'react';
import firebase from 'firebase';
import Loader from './Loader';

function VerseOfDay(){
    const [verseTitle, setVerseTitle] = React.useState("")
    const [verseText, setVerseText] = React.useState("")
    const [verseId, setVerseId] = React.useState();
    const [loading, setLoading] = React.useState(true);

    function generateRandomVerseId(numberOfVerses) {
        const dt = new Date();
        const seed = dt.getFullYear() + dt.getMonth() + dt.getDate();
        const holdrand = ((seed * 214013 + 2531011) >> 16) & 0x7fff; 
        const holdrand2 = ((holdrand * 214013 + 2531011) >> 16) & 0x7fff;
        const holdrand3 = Math.sin(holdrand2 + 1) * 1000;
        return Math.floor((holdrand3 - Math.floor(holdrand3)) * (numberOfVerses));
    }
    
    const db = firebase.firestore();
    db.collection('verses').get()
    .then(query => {
        setTimeout(()=> {
            setVerseId(generateRandomVerseId(query.size - 1));
        }, 500)
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    })

    if(verseId != null){
        db.collection('verses').doc(verseId.toString()).get()
    .then(query => {
        setVerseTitle(query.data().verse);
        setVerseText(query.data().text);
        setLoading(false);
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    })
    }
    

    return(
        <section className="main__verseofday">
            <h3 className="verseofday__title">Versículo del día</h3>
            {loading ?
                <Loader />
                :
                <>
                 <p className="verseofday__verse-title">{verseTitle}</p>
                 <p className="verseofday__verse-text">{verseText}</p>
                </>
            }
        </section>
    );
}

export default VerseOfDay;