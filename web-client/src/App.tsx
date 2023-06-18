import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import AppRoutes from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}