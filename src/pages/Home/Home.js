import React from "react";
import Navbar from "../../componants/Navbar/Navbar";
import "./home.css";
import headerImage from "./../../images/header.svg";
import Category from "../../componants/Category/Category";
import course1 from './../../images/course1.jpg'
import course2 from './../../images/course2.jpg'
import course3 from './../../images/course3.jpg'
import course4 from './../../images/course4.jpg'
import course5 from './../../images/course5.jpg'
import course6 from './../../images/course6.jpg'
import Course from "../../componants/Course/Course";
import Faq from "../../componants/Faq/Faq";
import Testemonial from "../../componants/Testemonial/Testemonial";
import Footer from "../../componants/Footer/Footer";

const Home = () => {
    const categories = [
    {
        "id":1,
        "image":course1,
        "icon":"uil uil-bitcoin-circle",
        "name":"blockchain",
        "description":` Lorem ipsum, dolor sit amet consectetur adipisicing elit.`
    },
    {
        "id":2,
        "image":course2,
        "icon":"uil uil-bitcoin-circle",
        "name":"blockchain",
        "description":` Lorem ipsum, dolor sit amet consectetur adipisicing elit.`
    },
    {
        "id":3,
        "image":course3,
        "icon":"uil uil-bitcoin-circle",
        "name":"blockchain",
        "description":` Lorem ipsum, dolor sit amet consectetur adipisicing elit.`
    },
    {
        "id":4,
        "image":course4,
        "icon":"uil uil-bitcoin-circle",
        "name":"blockchain",
        "description":` Lorem ipsum, dolor sit amet consectetur adipisicing elit.`
    },
    {
        "id":5,
        "image":course5,
        "icon":"uil uil-bitcoin-circle",
        "name":"blockchain",
        "description":` Lorem ipsum, dolor sit amet consectetur adipisicing elit.`
    },
    {
        "id":6,
        "image":course6,
        "icon":"uil uil-bitcoin-circle",
        "name":"blockchain",
        "description":` Lorem ipsum, dolor sit amet consectetur adipisicing elit.`
    }
]

    const courses = [
      {
        "id":1,
        "name":"complete react js course",
        "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        
      },
      {
        "id":2,
        "name":"complete react js course",
        "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit."
      },
      {
        "id":3,
        "name":"complete react js course",
        "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit."
      },
      {
        "id":4,
        "name":"complete react js course",
        "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit."
      },
      {
        "id":5,
        "name":"complete react js course",
        "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit."
      },
      {
        "id":6,
        "name":"complete react js course",
        "description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit."
      },
    ] 

    const faqs = [
      {
        "id":1,
        "question":"what can i learn from this website? and why?",
        "answer":"you can learn everything what you need to know to build your carees as a software engineer you can learn everything what you need to know to build your carees as a software engineer"
      },
      {
        "id":2,
        "question":"what can i learn from this website? and why?",
        "answer":"you can learn everything what you need to know to build your carees as a software engineer you can learn everything what you need to know to build your carees as a software engineer"
      },
      {
        "id":3,
        "question":"what can i learn from this website? and why?",
        "answer":"you can learn everything what you need to know to build your carees as a software engineer you can learn everything what you need to know to build your carees as a software engineer"
      },
      {
        "id":4,
        "question":"what can i learn from this website? and why?",
        "answer":"you can learn everything what you need to know to build your carees as a software engineer you can learn everything what you need to know to build your carees as a software engineer"
      },
      {
        "id":5,
        "question":"what can i learn from this website? and why?",
        "answer":"you can learn everything what you need to know to build your carees as a software engineer you can learn everything what you need to know to build your carees as a software engineer"
      },
      {
        "id":6,
        "question":"what can i learn from this website? and why?",
        "answer":"you can learn everything what you need to know to build your carees as a software engineer you can learn everything what you need to know to build your carees as a software engineer"
      },
      {
        "id":7,
        "question":"what can i learn from this website? and why?",
        "answer":"you can learn everything what you need to know to build your carees as a software engineer you can learn everything what you need to know to build your carees as a software engineer"
      },
      {
        "id":8,
        "question":"what can i learn from this website? and why?",
        "answer":"you can learn everything what you need to know to build your carees as a software engineer you can learn everything what you need to know to build your carees as a software engineer"
      },
      {
        "id":9,
        "question":"what can i learn from this website? and why?",
        "answer":"you can learn everything what you need to know to build your carees as a software engineer you can learn everything what you need to know to build your carees as a software engineer"
      },
      {
        "id":10,
        "question":"what can i learn from this website? and why?",
        "answer":"you can learn everything what you need to know to build your carees as a software engineer you can learn everything what you need to know to build your carees as a software engineer"
      },
      {
        "id":11,
        "question":"what can i learn from this website? and why?",
        "answer":"you can learn everything what you need to know to build your carees as a software engineer you can learn everything what you need to know to build your carees as a software engineer"
      },
      {
        "id":12,
        "question":"what can i learn from this website? and why?",
        "answer":"you can learn everything what you need to know to build your carees as a software engineer you can learn everything what you need to know to build your carees as a software engineer"
      },
    ]
    const testemonials = [
      {
        "id":1,
        "name":'md mishtart hossain',
        "title":"web designer",
        "testemonial":" amar sonar bangla ami tomay valobashi chirodin tomar akash tomar batash amar prane oma amar prane bajay bashi sonar bangla ami tomay valobashi amar sonar bangla ami tomay valobashi chirodin tomar"
      },
      {
        "id":1,
        "name":'md mishtart hossain',
        "title":"web designer",
        "testemonial":" amar sonar bangla ami tomay valobashi chirodin tomar akash tomar batash amar prane oma amar prane bajay bashi sonar bangla ami tomay valobashi amar sonar bangla ami tomay valobashi chirodin tomar"
      },
      {
        "id":2,
        "name":'md mishtart hossain',
        "title":"web designer",
        "testemonial":" amar sonar bangla ami tomay valobashi chirodin tomar akash tomar batash amar prane oma amar prane bajay bashi sonar bangla ami tomay valobashi amar sonar bangla ami tomay valobashi chirodin tomar"
      },
      {
        "id":3,
        "name":'md mishtart hossain',
        "title":"web designer",
        "testemonial":" amar sonar bangla ami tomay valobashi chirodin tomar akash tomar batash amar prane oma amar prane bajay bashi sonar bangla ami tomay valobashi amar sonar bangla ami tomay valobashi chirodin tomar"
      },
      {
        "id":4,
        "name":'md mishtart hossain',
        "title":"web designer",
        "testemonial":" amar sonar bangla ami tomay valobashi chirodin tomar akash tomar batash amar prane oma amar prane bajay bashi sonar bangla ami tomay valobashi amar sonar bangla ami tomay valobashi chirodin tomar"
      },
      {
        "id":5,
        "name":'md mishtart hossain',
        "title":"web designer",
        "testemonial":" amar sonar bangla ami tomay valobashi chirodin tomar akash tomar batash amar prane oma amar prane bajay bashi sonar bangla ami tomay valobashi amar sonar bangla ami tomay valobashi chirodin tomar"
      },
    ]

  return (
    <div>
      <Navbar />

      {/* ************* header section ***************  */}

      <header>
        <div className="container header__container">
          <div className="header__left">
            <h1>Grow Your Skils To Advance Your Career Path</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In,
              corrupti! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsum, blanditiis!
            </p>
            <a href="#" className="btn btn-primary">
              {" "}
              Get Started
            </a>
          </div>
          <div className="header__right">
            <img src={headerImage} className="header__right_image"></img>
          </div>
        </div>
      </header>

      {/* ************ category section ************ */}
      <section className="category">
        <div className="container category__container">
          <div className="category__left">
            <h1>Categories</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              exercitationem excepturi deserunt accusantium blanditiis nihil
              adipisci id dolorum neque temporibus.
            </p>
            <a className="btn" href="#">Learn More</a>
          </div>
          <div className="category__right">
            {
                categories.map((category)=><Category category={category} key={category.id}></Category>)
            }
          </div>
        </div>
      </section>


      {/* *********** popular courses section **********  */}

      <section className="courses">
        <h2>Popular Courses </h2>
        <div className="container courses__container">
          {courses.map((course)=> <Course course={course} key={course.id}>{course.name}</Course> )}
        </div>
      </section>

      {/* **************** FAQ Section ***************  */}

      <section className="faqs">
        <h2>Freequently Asked Question</h2>
        <div className="container faqs__container">
            {faqs.map((faq)=><Faq faq={faq} key={faq.id}></Faq> )}
        </div>
      </section>

       {/* testemonial section  */}

      <section className="container testemonial__container ">
        <h2>Students Testemonial</h2>
        <div className="testemonials"
        >
            {testemonials.map((testemonial)=> <Testemonial testemonial={testemonial} key={testemonial.id}></Testemonial> )}
        </div>
      </section>
            <Footer/>
    </div>
  );
};

export default Home;
