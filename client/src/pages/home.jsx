import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/products`);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`, {
      method: 'DELETE',
    });
    fetchProducts();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-6xl mx-auto fade-scale">
      {products.length === 0 ? (
        <p className="text-center col-span-full text-lime-400">No products added yet.</p>
      ) : (
        products.map((product) => (
          <div key={product._id} className="h-full">
            <ProductCard product={product} onDelete={handleDelete} />
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
