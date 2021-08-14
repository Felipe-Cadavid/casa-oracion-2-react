import React from 'react';

import InstitutoRecursos from '../components/InstitutoRecursos';

import './styles/Course.css';

function Course(props){
    const currentCourse = props.match.params.course;

    function handleClick(e){
        // setTab(e.target.outerText);
        console.log(props.match.params.course)
    }

    return(
            <main className="main">
                <h3 className="instituto__title">{currentCourse}</h3>
                <nav className="instituto__nav">
                    <ul className="instituto__nav-list">
                        <li onClick={handleClick} className="instituto__nav__recursos">Recursos</li>
                    </ul>
                </nav>
                    <InstitutoRecursos />
            </main>
    )
}

export default Course;