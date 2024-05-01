import React from 'react';
import logo from './logo.svg';
import './AppRoutes.css';
import { Route, Routes } from 'react-router-dom';
import NoPage from './NoPage/NoPage';
import Home from './Home/Home';
import DrawerAppBar from './Drawer';
import Contact from './Contact/Contact';
import About from './About/About';

function AppRoutes() {
  return (
   <>
    <Routes>
        <Route path="/" element={<DrawerAppBar />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
   </>
  );
}

export default AppRoutes;
