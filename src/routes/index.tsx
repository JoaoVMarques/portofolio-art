import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage';
import GaleryPage from '../pages/galeryPage';

function Router() {
  return (
    <Routes>
      <Route path='/Galery' element={<GaleryPage />} />
      <Route path='/' element={<HomePage />} />
    </Routes>
  );
}

export default Router;
