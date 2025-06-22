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
    if (!form.name || !form.price) {
      return alert("Name and Price are required");
    }
    onAdd(form);
    if (!initialData) {
      setForm({ name: "", price: "", rating: "", description: "", image: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass text-white p-8 rounded-xl shadow-xl max-w-md mx-auto fade-scale space-y-4">
      <h2 className="text-2xl font-bold text-center text-lime-400 mb-2">
        {initialData ? "Edit Product" : "Add New Product"}
      </h2>

      <input
        className="w-full p-2 rounded"
        type="text"
        name="name"
        placeholder="Product Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        className="w-full p-2 rounded"
        type="number"
        name="price"
        placeholder="Price (₹)"
        value={form.price}
        onChange={handleChange}
        required
      />
      <input
        className="w-full p-2 rounded"
        type="number"
        step="0.1"
        max="5"
        name="rating"
        placeholder="Rating (0 - 5)"
        value={form.rating}
        onChange={handleChange}
      />
      <input
        className="w-full p-2 rounded"
        type="text"
        name="description"
        placeholder="Short Description"
        value={form.description}
        onChange={handleChange}
      />
      <input
        className="w-full p-2 rounded"
        type="url"
        name="image"
        placeholder="Image URL"
        value={form.image}
        onChange={handleChange}
      />

      <button type="submit" className="button-glow w-full">
        {initialData ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
}

export default ProductForm;
