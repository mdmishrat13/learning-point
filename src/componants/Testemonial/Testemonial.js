import React from 'react';
import './testemonial.css'
import avatar from './../../images/avatar1.jpg'
import { SwiperSlide } from 'swiper/react';

const Testemonial = ({testemonial}) => {
    return (
        <article className="testemonial swiper-slide">
            <div className="testemonial__image">
                <img src={avatar} alt="" />
            </div>
            <div className="testemonial__info">
                <h5> {testemonial.name}</h5>
                <small>{testemonial.title}</small>
            </div>
            <div className="testemonial__body">
                <p>{testemonial.testemonial}</p>
            </div>
        </article>
    );
};

export default Testemonial;