import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Catalog } from './Components/Catalog';
import { HomePage } from './Components/HomePage/HomePage';

export function App() {
  return (
      <Routes>
        <Route 
          path="/" 
          element={<HomePage />}
        />

        <Route 
          path="/phones" 
          element={<Catalog />}
        />

        <Route 
          path="*" 
          element={<p>Page not found</p>}
        />
      </Routes>
  );
}
