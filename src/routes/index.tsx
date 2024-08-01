import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage';
import GaleryPage from '../pages/galeryPage';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/Galery' element={<GaleryPage />} />
      <Route path='/Home' element={<HomePage />} />
    </Routes>
  );
}

export default Router;
