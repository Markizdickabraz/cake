import { Routes, Route } from "react-router-dom";

import Start from './pages/Start/Start';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Business from './pages/Business/Business';
import Error from './pages/Error/Error';
import Contacts from './pages/Contacts/Contacts';
import Header from './components/header/header';
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/business' element={<Business />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
