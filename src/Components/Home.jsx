import React from 'react'
import Nav from './Nav'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Section from '../Section';
import Footer from '../Footer';

export default function Home() {
  return (
          <div className="home-section">
      <div className="home-flex">
        <div className="home-content">
          <h1>Improve Your Professional<br/> Journey with Industry-Ready Skills</h1>
          <p>
            Discover top-notch learning experiences tailored to help you grow. Whether you're starting out or leveling up, NLITE has you covered.
          </p>
          <button>Enroll Now</button>
        </div>
        <div className="home-banner">
          <img src="https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg?ga=GA1.1.609540410.1737607046&semt=ais_hybrid&w=740" alt="Learning banner" />
        </div>
      </div>
      <Section/>
      <Footer/>
    </div>
  )
}
