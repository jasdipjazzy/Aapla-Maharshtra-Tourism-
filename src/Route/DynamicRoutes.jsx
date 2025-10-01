import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Beaches from '../Pages/Beaches';
import HillStation from '../Pages/HillStation';
import Temples from '../Pages/Temples';
import Error from '../Pages/Error';
import Gallery from '../Pages/Gallery';
import About from '../Pages/About';
import BeachesDetails from '../Pages/BeachesDetails';
import HillStationDetails from '../Pages/HillStationDetails';
import TemplesDetail from '../Pages/TemplesDetail';
import GalleryDetails from '../Pages/GalleryDetails';
import AdminLogin from '../Admin/AdminLogin';
import AdminRegisteration from '../Admin/AdminRegistration';
import DataHome from '../Admin/DataHome';
import DataRead from '../Admin/DataRead';
import DataCreate from '../Admin/DataCreate';
import DataUpdate from '../Admin/DataUpdate';
import NavbarContainer from '../components/NavbarContainer';
import Protected from '../Admin/Protected';

const DynamicRoutes = () => {
  return (
    <BrowserRouter basename="/Aapla-Maharshtra-Tourism-/">
      <NavbarContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beaches" element={<Beaches />} />
        <Route path="/hillstation" element={<HillStation />} />
        <Route path="/temples" element={<Temples />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/beachdetails/:id" element={<BeachesDetails />} />
        <Route path="/hsdetails/:id" element={<HillStationDetails />} />
        <Route path="/templedetails/:id" element={<TemplesDetail />} />
        <Route path="/gallerydetails/:id" element={<GalleryDetails />} />
        <Route path="/*" element={<Error />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminregister" element={<AdminRegisteration />} />
        <Route path="/datahome" element={<Protected Comp={DataHome} />} />
        <Route path="/dataread/:id" element={<Protected Comp={DataRead} />} />
        <Route path="/datacreate" element={<Protected Comp={DataCreate} />} />
        <Route path="/dataupdate/:id" element={<Protected Comp={DataUpdate} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default DynamicRoutes;