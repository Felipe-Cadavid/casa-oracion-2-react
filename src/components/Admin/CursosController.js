import React from 'react';

import Loader from '../../components/Loader';

import getCourses from '../../util/getCourses';

function CursosController(){
    const [courses, setCourses] = React.useState();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        getCourses()
            .then(courses => {
                let nextCourses = [];
                courses.forEach(course => {
                    nextCourses.push({
                        "id": course.id,
                        "name": course.data().name,
                        "desc": course.data().desc
                    })
                })
                setCourses(nextCourses);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al obtener cursos: ', error);
            })
    }, []);

    return(
        <>
            {loading ? 
                <div className="loader-container">
                    <Loader />
                </div>
                :
                courses.map(course => {
                    return(
                        <section key={course.id} className="admin__course-container">
                            <h3 className="admin__course-title">{course.name}</h3>
                            <p className="admin__course-desc">{course.desc}</p>
                        </section>
                    )
                })
            }
        </>
    )
}

export default CursosController;