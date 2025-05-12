
// App.jsx
import { Routes, Route } from 'react-router-dom';
import ProductList from './pages/Products/ProductList';
import CreateUser from './pages/Users/CreateUser';
import CreateProduct from './pages/Products/CreateProduct';
import { useLocalization } from './localization/LocalizationContext';
import UserList from './pages/users/users';
import React from 'react';
import Sidebar from './components/sidebar';
import Topbar from './components/topBar';
import Dashboard from './pages/dashboard';
export default function App() {
  const { direction } = useLocalization();
  return (
    <div dir={direction} className="flex h-screen">
      <Sidebar />
      <div className="bg-white dark:bg-primary-body dark:text-white flex-1 flex flex-col">
        <Topbar />
        <main className=" p-4 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/create" element={<CreateUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/create" element={<CreateProduct />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}







// pages/Products/ProductList.jsx (similar structure to UserList)
// pages/Products/CreateProduct.jsx (similar structure to CreateUser)
