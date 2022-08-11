import React from 'react';
import './course.css'
import course1 from './../../images/course1.jpg'

const Course = ({course}) => {
    return (
        <article className='course'>
            <div className="course__image">
                <img src={course1}/>
            </div>
            <div className="course__content">
                <h4>{course.name}</h4>
                <p>{course.description} </p>
                <a href="#" className="btn btn-primary">See Details</a>
            </div>
            
        </article>
    );
};

export default Course;