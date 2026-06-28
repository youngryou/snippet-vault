import { createRoutesFromElements, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { Home } from './pages/Home';

export const router = createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route index element={<Home />} />
  </Route>
);
