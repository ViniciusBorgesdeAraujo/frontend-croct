import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../components/Home/Home';
import AvatarUpload from '../components/Avatar/AvatarUpload';

const AppRoutes: React.FC = () => {
  const handleImageUpload = (image: File) => {

  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/avatar" element={<AvatarUpload onImageUpload={handleImageUpload} />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
