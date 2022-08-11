import React from 'react';
import './category.css'

const Category = ({category}) => {
    return (
        <article className='category__item'>
            <span className='category__icon'><i className={category.icon}></i></span>
            <h5> {category.name} </h5>
            <p>{category.description}</p>
        </article>
    );
};

export default Category;