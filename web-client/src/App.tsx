import { BrowserRouter } from 'react-router-dom';
import MainLayout from 'components/MainLayout';
import AppRoutes from 'routes/index';

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}