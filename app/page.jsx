'use client';

import { useEffect, useState } from 'react';
import { getUsers } from './actions';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getUsers();
      setProducts(data);
    }
    load();
  }, []);

  return (
    <>
      <div className="px-4 py-6">
        <p className="text-center text-sm text-black-500 font-light mb-4">
          First add fields in the <code className="text-blue-800 font-medium">/create</code> page and then check this page
        </p>

        <h1 className="text-3xl font-bold text-white text-center py-4 mb-6" style={{ backgroundColor: '#001F3F' }}>
          🛒 Welcome to Tech Mart
        </h1>

        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          🧾 Our Added Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <Card key={product.id} className="shadow-md">
              <CardHeader>
                <CardTitle>{product.item}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 mb-2">{product.information}</p>
                <p className="text-sm font-bold">₹{product.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
