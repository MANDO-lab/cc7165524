import { useNavigate } from "react-router-dom";

function ProductCard({ product, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="card-hover glass border border-gray-300 rounded-xl p-5 shadow-md text-white fade-scale transition-all duration-500">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain rounded-md mb-3 bg-white"
      />
      <h2 className="text-lg font-semibold text-lime-400">{product.name}</h2>
      <p className="text-gray-300">₹{product.price}</p>
      <p className="text-sm text-gray-400">Rating: {product.rating} / 5</p>
      <p className="text-sm text-gray-500 mb-3">{product.description}</p>
      <div className="flex gap-3">
        <button
          onClick={() => navigate(`/edit/${product._id}`)}
          className="bg-yellow-400 text-black px-4 py-2 rounded button-glow"
        >
          ✏️ Edit
        </button>
        <button
          onClick={() => onDelete(product._id)}
          className="bg-red-500 text-white px-4 py-2 rounded button-glow"
        >
          ❌ Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
