// import { useNavigate } from "react-router-dom";

// function ProductCard({ product, onDelete }) {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-white p-4 rounded shadow">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="h-40 w-full object-cover rounded"
//       />

//       <h2 className="text-lg font-bold mt-2">
//         {product.name}
//       </h2>

//       <p className="text-gray-600">
//         ₹ {product.price}
//       </p>

//       <p className="text-sm text-gray-500">
//         {product.description?.slice(0, 60)}...
//       </p>

//       <div className="flex gap-2 mt-3 flex-wrap">

//         <button
//           onClick={() => navigate(`/product/${product._id}`)}
//           className="bg-green-500 text-white px-3 py-1 rounded"
//         >
//           View
//         </button>

//         <button
//           onClick={() => navigate(`/edit-product/${product._id}`)}
//           className="bg-yellow-500 text-white px-3 py-1 rounded"
//         >
//           Edit
//         </button>

//         <button
//           onClick={() => onDelete(product._id)}
//           className="bg-red-500 text-white px-3 py-1 rounded"
//         >
//           Delete
//         </button>

//       </div>
//     </div>
//   );
// }

// export default ProductCard;

import { useNavigate } from "react-router-dom";

function ProductCard({ product, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100">

      {/* Image */}
      <div className="h-44 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">

        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {product.name}
        </h2>

        <p className="text-green-600 font-bold mt-1">
          ₹ {product.price}
        </p>

        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {product.description?.slice(0, 80)}...
        </p>

        {/* Buttons */}
        <div className="flex gap-2 mt-4 flex-wrap">

          <button
            onClick={() => navigate(`/product/${product._id}`)}
            className="px-3 py-1.5 rounded-lg bg-green-500 hover:bg-green-600 text-white text-sm transition"
          >
            View
          </button>

          <button
            onClick={() => navigate(`/edit-product/${product._id}`)}
            className="px-3 py-1.5 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white text-sm transition"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(product._id)}
            className="px-3 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm transition"
          >
            Delete
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductCard;