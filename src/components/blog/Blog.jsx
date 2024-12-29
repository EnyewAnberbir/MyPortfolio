import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Blog1 from '../../assets/blog1.jpg';
import Blog2 from '../../assets/blog2.jpg';
import Blog3 from '../../assets/blog3.jpg';
import './blog.css';
import shapeOne from '../../assets/shape-1.png';

const Blog = () => {
  return (
    <section className="blog section" id="blog">
        <h2 className="section__title text-cs">Software Developer</h2>
        <p className="section__subtitle">
            Enyew's <span>Articles and Advice</span>
        </p>

        <div className="blog__container container grid">
            <div className="blog__item card card-two">
                <span className="blog__date text-cs">December 01, 2024</span>
                <h3 className="blog__title">Understanding Software Design Principles</h3>
                <p className="blog__description">Effective software design ensures scalability, maintainability, and high performance. Learn core principles to excel in your development journey.</p>

                <a href="" className="link">
                    Read more
                    <FaArrowRight className='link__icon'></FaArrowRight>
                </a>

                <img src={Blog1} alt="" className="blog__img" />
            </div>

            <div className="blog__item card card-two">
                <span className="blog__date text-cs">December 01, 2024</span>
                <h3 className="blog__title">Latest Trends in Software Development</h3>
                <p className="blog__description">Stay ahead in your career by understanding the latest technologies and methodologies transforming the software development industry.</p>

                <a href="" className="link">
                    Read more
                    <FaArrowRight className='link__icon'></FaArrowRight>
                </a>

                <img src={Blog2} alt="" className="blog__img" />
            </div>

            <div className="blog__item card card-two">
                <span className="blog__date text-cs">December 01, 2024</span>
                <h3 className="blog__title">Best Tips for Writing Clean and Readable Code</h3>
                <p className="blog__description">Writing clean, readable code is a hallmark of a professional developer. Discover tips and best practices to refine your coding style.</p>

                <a href="" className="link">
                    Read more
                    <FaArrowRight className='link__icon'></FaArrowRight>
                </a>

                <img src={Blog3} alt="" className="blog__img" />
            </div>
        </div>

        <div className="section__deco deco__right">
            <img src={shapeOne} alt="" className="shape" />
        </div>

        <div className="section__bg-wrapper">
            <span className="bg__title">Blog</span>
        </div>
    </section>
  );
};

export default Blog;
