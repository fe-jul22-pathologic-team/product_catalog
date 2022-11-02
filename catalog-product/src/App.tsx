import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getProducts } from './api/products';
import './App.css';
import { Cart } from './Components/Cart';
import { Catalog } from './Components/Catalog';
import { Footer } from './Components/HomePage/Footer';
import { Header } from './Components/HomePage/Header';
import { HomePage } from './Components/HomePage/HomePage';
import { Product } from './types/Product';

export function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const loadData = async () => {
    const data = await getProducts();

    setProducts(data);
  };

  useEffect(() => {
    loadData();

  }, []);

  console.log(products);
  
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
          path='/cart'
          element={<Cart />}
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
