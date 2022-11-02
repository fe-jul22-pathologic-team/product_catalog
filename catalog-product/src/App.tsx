import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { CartItem } from './Components/CartItem';
import { Catalog } from './Components/Catalog';
import { Footer } from './Components/HomePage/Footer';
import { Header } from './Components/HomePage/Header';
import { HomePage } from './Components/HomePage/HomePage';

export function App() {
  return (
    <>
      <Routes>
        <Route 
          path="/" 
          element={<HomePage />}
        />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route 
          path="/phones" 
          element={<Catalog />}
        />
        <Route 
          path="/tablets" 
          element={
          <>
            <Header />
            <h1>Tablets page</h1>
            <Footer />
          </>
        }
        />
        <Route 
          path="/accessories" 
          element={
          <>
            <Header />
            <h1>Accessories page</h1>
            <Footer />
          </>}
        />

        <Route
          path='/test'
          element={<CartItem />} 
        />
        <Route 
          path="*" 
          element={
          <>
            <Header />
            <p>Page not found</p>
            <Footer />
          </>}
        />
      </Routes>
    </>
  );
}
