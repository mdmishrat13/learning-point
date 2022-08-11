import React from 'react';
import { useState } from 'react';
import './faq.css'

const Faq = ({faq}) => {
    const [isOpen, setIsOpen]= useState(false);
    const handleOpen = ()=> setIsOpen(!isOpen)
    return (
        <div onClick={handleOpen} className={isOpen?'faq open':'faq'}>
            <div className="faq__icon"><i class={isOpen?"uil uil-minus":'uil uil-plus'}></i></div> 
            {/* <button className="faq__minus-icon"><i class="uil uil-minus"></i></button> */}
            <div className="faq__question-answer">
            <h4>{faq.question}</h4>
            <p className=''>{faq.answer}</p>
            </div>
           
        </div>
    );
};

export default Faq;