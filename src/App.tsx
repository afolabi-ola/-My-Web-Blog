import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import Home from './pages/Home';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Faq from './pages/Faq';
import Booking from './pages/Booking';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Product />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='about' element={<About />} />
          <Route path='faq' element={<Faq />} />
          <Route path='booking' element={<Booking />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
