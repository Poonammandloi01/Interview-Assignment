import { useNavigate } from "react-router-dom";

function ProductCard({ product, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 rounded shadow">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded"
      />

      <h2 className="text-lg font-bold mt-2">
        {product.name}
      </h2>

      <p className="text-gray-600">
        ₹ {product.price}
      </p>

      <p className="text-sm text-gray-500">
        {product.description?.slice(0, 60)}...
      </p>

      <div className="flex gap-2 mt-3 flex-wrap">

        <button
          onClick={() => navigate(`/product/${product._id}`)}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          View
        </button>

        <button
          onClick={() => navigate(`/edit-product/${product._id}`)}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(product._id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>

      </div>
    </div>
  );
}

export default ProductCard;