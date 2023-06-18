import React from 'react';
import { Route, Routes } from 'react-router-dom';

import BloodCenters from './../view/BloodCenter';
import News from './../view/News';
import Information from './../view/Information';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<BloodCenters />} />
      <Route path="/news" element={<News />} />
      <Route path="/information" element={<Information />} />
    </Routes>
  );
};

export default AppRoutes;