import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function CreateProduct() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [product, setProduct] = useState({ name: '', price: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product created:', product);
    navigate('/products');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">{t('addProduct')}</h2>
      <label className="block mb-2">
        {t('name')}
        <input
          type="text"
          className="w-full border px-3 py-2 mt-1 rounded"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          required
        />
      </label>
      <label className="block mb-4">
        {t('price')}
        <input
          type="number"
          className="w-full border px-3 py-2 mt-1 rounded"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          required
        />
      </label>
      <button className="bg-green-600 text-white px-4 py-2 rounded" type="submit">
        {t('save')}
      </button>
    </form>
  );
}
