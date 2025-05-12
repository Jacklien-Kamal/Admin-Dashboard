import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function ProductList() {
  const { t } = useTranslation();
  const [products, setProducts] = useState([
    { id: 1, name: 'iPhone 14', price: 999 },
    { id: 2, name: 'Samsung S22', price: 899 },
  ]);

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{t('products')}</h2>
        <Link to="/products/create" className="bg-blue-600 text-white px-4 py-2 rounded">
          {t('addProduct')}
        </Link>
      </div>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">{t('id')}</th>
            <th className="p-2">{t('name')}</th>
            <th className="p-2">{t('price')}</th>
            <th className="p-2">{t('actions')}</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="text-center border-b">
              <td className="p-2">{p.id}</td>
              <td className="p-2">{p.name}</td>
              <td className="p-2">${p.price}</td>
              <td className="p-2">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => deleteProduct(p.id)}
                >
                  {t('delete')}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
