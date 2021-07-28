import React from 'react';
import Loader from './Loader';
import getVerses from '../util/getVerses';


function VerseOfDay({database}){
    const [verseTitle, setVerseTitle] = React.useState("")
    const [verseText, setVerseText] = React.useState("")
    const [loading, setLoading] = React.useState(true);

    function generateRandomVerseId(numberOfVerses) {
        const dt = new Date();
        const seed = dt.getFullYear() + dt.getMonth() + dt.getDate();
        const holdrand = ((seed * 214013 + 2531011) >> 16) & 0x7fff; 
        const holdrand2 = ((holdrand * 214013 + 2531011) >> 16) & 0x7fff;
        const holdrand3 = Math.sin(holdrand2 + 1) * 1000;
        return Math.floor((holdrand3 - Math.floor(holdrand3)) * (numberOfVerses));
    }

    React.useEffect(() => {
        getVerses()
        .then(query => {
            setTimeout(()=> {
                const verseId = generateRandomVerseId(query.size - 1);
                const verse = query.docs[verseId];
                setVerseTitle(verse.data().verse);
                setVerseText(verse.data().text);
                setLoading(false);
            }, 500)
        })
        .catch(error => {
            console.error(`Error: ${error}`);
        })
    }, []);


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