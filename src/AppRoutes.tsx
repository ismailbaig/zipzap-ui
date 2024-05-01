import './AppRoutes.css';
import { Route, Routes } from 'react-router-dom';
import NoPage from './features/NoPage/NoPage';
import Home from './features/Home/Home';
import DrawerAppBar from './features/Drawer';
import Contact from './features/Contact';
import About from './features/About/About';
import LoginForm from './features/LoginForm/LoginForm'

function AppRoutes() {
  return (
   <>
    <Routes>
        <Route path="/" element={<DrawerAppBar />}>
          <Route index element={<LoginForm />} />
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
