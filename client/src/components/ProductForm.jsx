import { useState, useEffect } from 'react';

function ProductForm({ onAdd, initialData }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    rating: "",
    description: "",
    image: ""
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price) return alert("Name and Price are required");
    onAdd(form);
    if (!initialData) {
      setForm({ name: "", price: "", rating: "", description: "", image: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass p-8 shadow-xl rounded-2xl max-w-md mx-auto fade-scale">
      <h2 className="text-xl font-bold mb-4 text-lime-300">{initialData ? "Edit Product" : "Add New Product"}</h2>
      <input className="w-full p-2 border mb-3 rounded bg-white text-black" type="text" name="name" placeholder="Product Name" value={form.name} onChange={handleChange} required />
      <input className="w-full p-2 border mb-3 rounded bg-white text-black" type="number" name="price" placeholder="Price (₹)" value={form.price} onChange={handleChange} required />
      <input className="w-full p-2 border mb-3 rounded bg-white text-black" type="number" step="0.1" max="5" name="rating" placeholder="Rating (0 - 5)" value={form.rating} onChange={handleChange} />
      <input className="w-full p-2 border mb-3 rounded bg-white text-black" type="text" name="description" placeholder="Short Description" value={form.description} onChange={handleChange} />
      <input className="w-full p-2 border mb-3 rounded bg-white text-black" type="url" name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-xl button-glow w-full mt-4">
        {initialData ? "💾 Update Product" : "➕ Add Product"}
      </button>
    </form>
  );
}

export default ProductForm;
