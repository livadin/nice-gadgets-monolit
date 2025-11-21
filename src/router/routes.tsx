import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../components/pages/HomePage';
import { PhonesPage } from '../components/pages/PhonesPage';
import { TabletsPage } from '../components/pages/TabletsPage';
import { AccessoriesPage } from '../components/pages/AccessoriesPage';
import { NotFoundPage } from '../components/pages/NotFoundPage';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/phones" element={<PhonesPage />} />
    <Route path="/tablets" element={<TabletsPage />} />
    <Route path="/accessories" element={<AccessoriesPage />} />

    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);