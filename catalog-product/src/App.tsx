import { Route, Routes } from 'react-router-dom';
import './App.css';
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
          element={<h1>Phone page</h1>}
        />
        <Route 
          path="/tablets" 
          element={<h1>Tablets page</h1>}
        />
        <Route 
          path="/accessories" 
          element={<h1>Accessories page</h1>}
        />
        <Route 
          path="*" 
          element={<p>Page not found</p>}
        />
      </Routes>
  );
}
