import { useEffect, useState } from "react";
import API from "../services/api";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await API.get(`/products/${id}`);
        setProduct(data);
      } catch (error) {
        alert("Failed to load product");
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <button
        onClick={() => navigate("/home")}
        className="mb-4 bg-gray-500 text-white px-3 py-1 rounded"
      >
        Back
      </button>

      <div className="bg-white p-6 rounded shadow max-w-2xl mx-auto">

        <img
          src={product.image}
          className="w-full h-60 object-cover rounded"
        />

        <h1 className="text-2xl font-bold mt-4">
          {product.name}
        </h1>

        <p className="text-gray-600 mt-2">
          {product.description}
        </p>

        <p className="mt-2">
          <b>Price:</b> ₹{product.price}
        </p>

        <p>
          <b>Category:</b> {product.category}
        </p>

        <p>
          <b>Stock:</b> {product.stock}
        </p>

      </div>
    </div>
  );
}

export default ProductDetails;