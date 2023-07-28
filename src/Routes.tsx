import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { CompleteOrderPage } from './pages/home/CompleteOrder';
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/completeOrder" element={<CompleteOrderPage />} />
      </Route>
    </Routes>
  );
}
