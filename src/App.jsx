import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import { appsData, productsData } from './data.js';
import Home from './pages/Home/Home';
import ProductsPage from './pages/Products/ProductsPage';
import ViewProductPage from './pages/ViewProduct/ViewProductPage';
import './App.css'

export default function App() {
  const [products, setProducts] = useState(productsData);
  const [apps, setApps] = useState(appsData);

  console.log({ products, apps });

  return (
    <div className="App">
      <header>
        <h1>Apple Shop</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        {/*
         TODO: add your route for editing a product here. The
         Route should be /products/:id/edit and it should use
         the EditProduct element
         */}
        <Route path="/products/:id" element={<ViewProductPage />} />
        <Route path="/products" element={<ProductsPage products={products} />}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
