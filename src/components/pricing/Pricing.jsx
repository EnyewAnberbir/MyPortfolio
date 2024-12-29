import React from 'react';
import shapeTwo from '../../assets/shape-2.png';
import './pricing.css';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import shapeOne from '../../assets/shape-1.png';

const Pricing = () => {
  return (
    <section className="pricing section" id="pricing">
      <h2 className="section__title text-cs">Pricing</h2>
      <p className="section__subtitle">
        My <span>Price Board</span>
      </p>

      <div className="pricing__container container grid">
        {/* Hourly Basis */}
        <div className="pricing__item card card-one">
          <span className="pricing__subtitle text-cs">Hourly Basis</span>
          <h3 className="pricing__price">5 <span>$</span> <em>Hour</em></h3>
          <p className="pricing__description">
            Hi, I'm Enyew Anberbir, a skilled software engineer based in Ethiopia. I offer quality services at an affordable hourly rate for projects of all sizes.
          </p>
          <ul className="pricing__list">
            <li className="list__item">
              <FaCheck className="list__icon" />
              <span>Brand Design</span>
            </li>
            <li className="list__item">
              <FaCheck className="list__icon" />
              <span>Frontend Development</span>
            </li>
            <li className="list__item">
              <del>Backend Development</del>
            </li>
            <li className="list__item">
              <del>WordPress Development</del>
            </li>
          </ul>
          <a href="" className="btn pricing__btn text-cs">
            Start Project
            <FaArrowRight className="pricing__btn-icon" />
          </a>
          <img src={shapeTwo} alt="" className="shape c__shape" />
        </div>

        {/* Weekly Freelancing */}
        <div className="pricing__item-wrapper">
          <span className="pricing__label text-cs">Popular</span>
          <div className="pricing__item card card-one">
            <span className="pricing__subtitle text-cs">Freelancing</span>
            <h3 className="pricing__price">200 <span>$</span> <em>Week</em></h3>
            <p className="pricing__description">
              Ideal for weekly engagements, I bring expertise and reliability to every project.
            </p>
            <ul className="pricing__list">
              <li className="list__item">
                <FaCheck className="list__icon" />
                <span>Brand Design</span>
              </li>
              <li className="list__item">
                <FaCheck className="list__icon" />
                <span>Frontend Development</span>
              </li>
              <li className="list__item">
                <FaCheck className="list__icon" />
                <span>Backend Development</span>
              </li>
              <li className="list__item">
                <del>WordPress Development</del>
              </li>
            </ul>
            <a href="" className="btn pricing__btn text-cs">
              Start Project
              <FaArrowRight className="pricing__btn-icon" />
            </a>
            <img src={shapeTwo} alt="" className="shape c__shape" />
          </div>
        </div>

        {/* Full-Time */}
        <div className="pricing__item card card-one">
          <span className="pricing__subtitle text-cs">Full Time</span>
          <h3 className="pricing__price">800 <span>$</span> <em>Month</em></h3>
          <p className="pricing__description">
            For long-term projects, my full-time service ensures consistent results and seamless collaboration.
          </p>
          <ul className="pricing__list">
            <li className="list__item">
              <FaCheck className="list__icon" />
              <span>Brand Design</span>
            </li>
            <li className="list__item">
              <FaCheck className="list__icon" />
              <span>Frontend Development</span>
            </li>
            <li className="list__item">
              <FaCheck className="list__icon" />
              <span>Backend Development</span>
            </li>
            <li className="list__item">
              <FaCheck className="list__icon" />
              <span>WordPress Development</span>
            </li>
          </ul>
          <a href="" className="btn pricing__btn text-cs">
            Start Project
            <FaArrowRight className="pricing__btn-icon" />
          </a>
          <img src={shapeTwo} alt="" className="shape c__shape" />
        </div>
      </div>

      <div className="section__deco deco__left">
        <img src={shapeOne} alt="" className="shape" />
      </div>
      <div className="section__bg-wrapper">
        <span className="bg__title">Pricing</span>
      </div>
    </section>
  );
};

export default Pricing;
