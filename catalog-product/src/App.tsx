import { Route, Routes } from 'react-router-dom';
import './App.css';

export function App() {
  return (
    <>
      <Routes>
        <Route 
          path="/catalog-product" 
          element={<h1>Home page</h1>}
        />

        <Route 
          path="/phones" 
          element={<h1>Phone page</h1>}
        />

        <Route 
          path="*" 
          element={<p>Page not found</p>}
        />
      </Routes>
    </>
  );
}
