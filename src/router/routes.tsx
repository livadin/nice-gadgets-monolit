import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../components/pages/HomePage';
import { PhonesPage } from '../components/pages/PhonesPage';
import { TabletsPage } from '../components/pages/TabletsPage';
import { AccessoriesPage } from '../components/pages/AccessoriesPage';
import { NotFoundPage } from '../components/pages/NotFoundPage';
import { HomeLayout } from '../components/layouts/HomeLayout';
import { MainLayout } from '../components/layouts/MainLayout';
import { FavouritePage } from '../components/pages/FavouritesPage';
import { CartPage } from '../components/pages/CartPage';

export const AppRoutes = () => (
  <Routes>
    <Route element={<HomeLayout />}>
      <Route path="/" element={<HomePage />} />
    </Route>

    <Route element={<MainLayout />}>
      <Route path="/phones" element={<PhonesPage />}></Route>
      <Route path='/phones/:productSlug' element={<PhonesPage />}></Route>
      <Route path="/tablets" element={<TabletsPage />} />
      <Route path='/tablets/:productSlug' element={<TabletsPage />}></Route>
      <Route path="/accessories" element={<AccessoriesPage />} />
      <Route path='/accessories/:productSlug' element={<AccessoriesPage />}></Route>
      <Route path="/favourites" element={<FavouritePage />} />
      <Route path="/cart" element={<CartPage />} />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
    <Route path="/home" element={<Navigate to="/" replace />} />
</Routes>
);