import { useNavigate } from "react-router-dom";

function ProductCard({ product, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="card-hover h-full flex flex-col justify-between p-5 text-white fade-scale">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain rounded-md mb-3 bg-white"
      />
      <h2 className="text-lg font-semibold text-lime-400">{product.name}</h2>
      <p className="text-white">₹{product.price}</p>
      <p className="text-sm text-gray-300">Rating: {product.rating} / 5</p>
      <p className="text-sm text-gray-400 mb-3">{product.description}</p>
      <div className="flex gap-3 mt-auto">
        <button onClick={() => navigate(`/edit/${product._id}`)} className="button-glow">✏️ Edit</button>
        <button onClick={() => onDelete(product._id)} className="button-glow bg-red-500 hover:bg-red-400">❌ Delete</button>
      </div>
    </div>
  );
}

export default ProductCard;
