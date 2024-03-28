import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './../../components/header/header';
import Footer from './../../components/footer/footer';
import FrontPage from './../../pages/front-page/front-page';
import ErrorPage from './../../pages/error-page/error-page';
import About from './../../components/about/about';
import Skills from './../../components/skills/skills';
import Project from './../../components/project/project';
import Contact from './../../components/contact/contact';
import ProjectPage from './../../pages/project-page/project-page';


const RouterConfig = () => (
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<FrontPage/>}/>
      {/* <Route path="/Projet/:id" element={<ProjectPage />} />  */}
      <Route path="/ProjetPage" element={<ProjectPage />} />
      <Route path="*" element={<ErrorPage/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Project} />
      <Route path="/contact" component={Contact} />
    </Routes>
    <Footer/>
  </Router>
);

export default RouterConfig;