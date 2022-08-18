import React from 'react';
import Footer from '../../componants/Footer/Footer';
import Navbar from '../../componants/Navbar/Navbar';
import './about.css'
import achievmentImg from './../../images/about achievements.svg'

const About = () => {
    return (
        <div>
            <Navbar/>
            <section>
                <div className="container acheivement__container">
                    <div className="acheivement__container__left">
                        <img src={achievmentImg} alt="" />
                    </div>
                    <div className="achievement__container__right">
                        <h1>Achievements</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, tempora.</p>
                    </div>
                    <div className="achievement__cards">
                        
                    </div>
                </div>
            </section>
            <Footer/>
            
        </div>
    );
};

export default About;