import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";

function AddProduct() {
  const navigate = useNavigate();

  const handleAdd = async (product) => {
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    navigate("/");
  };

  return (
    <div className="fade-in">
      <ProductForm onAdd={handleAdd} />
    </div>
  );
}

export default AddProduct;
