import React, {useEffect, useState} from 'react';

import getCourses from '../util/getCourses';
import '../components/Loader';

import './styles/InstitutoMain.css'
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';

function InstitutoMain(){
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCourses()
            .then(query => {
                let nextCourses = [];
                query.map(doc => {
                    nextCourses.push({
                        id: doc.id,
                        name: doc.data().name,
                        desc: doc.data().desc,
                        imageUrl: doc.data().imageUrl
                    });
                })
                setCourses(nextCourses);
                setLoading(false);
            })
    }, []);

    const handleClick = (course, e) => {

    }

    return(
        <main className="main">
            <h2 className="institute-title">Instituto Bíblico</h2>
            <div className="institute-courses-container">
                {!loading ? courses.map(course => {
                    return(
                        <Link to={`/instituto/${course.name}`}>
                            <div onClick={e => handleClick(course.name, e)} key={course.id} style={{backgroundImage: `url(${course.imageUrl})`}} className="institute-course">
                                <div className="institute-course__background">
                                    <div className="institute-course__text-container">
                                        <h4 className="institute-course__name">{course.name}</h4>
                                        <p className="institute-course__desc">{course.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
                : <div className="loader-container"><Loader /></div>
            }
            </div>
        </main>
    )
}

export default InstitutoMain;