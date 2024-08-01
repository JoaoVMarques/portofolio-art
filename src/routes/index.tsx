import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage';
import GaleryPage from '../pages/galeryPage';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/Home' element={<HomePage />} />
      <Route path='/Galery' element={<GaleryPage />} />
    </Routes>
  );
}

export default Router;
