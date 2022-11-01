import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { HomePage } from './Components/HomePage/HomePage';

export function App() {
  return (
    <>
      <nav>
        <Link to="/">Home page</Link>
        <Link to="/phones">Phones</Link>
        <Link to="/tablets">Tablets</Link>
        <Link to="/accessories">Accessories</Link>
      </nav>
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
    </>  
  );
}
