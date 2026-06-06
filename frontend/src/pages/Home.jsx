import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const { data } = await API.get("/products");
      setProducts(data);
    } catch (error) {
      alert("Failed to fetch products");
    }
  };
  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this product?"
  );

  if (!confirmDelete) return;

  try {
    await API.delete(`/products/${id}`);

    alert("Product deleted");

    // UI refresh
    setProducts(products.filter((p) => p._id !== id));
  } catch (error) {
    alert("Delete failed");
  }
};

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">
          Product List
        </h1>

        <button
          onClick={() => navigate("/add-product")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          + Add Product
        </button>
      </div>

        


      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <div
            key={p._id}
            className="bg-white p-4 rounded shadow"
          >
            <img
              src={p.image}
              alt={p.name}
              className="h-40 w-full object-cover"
            />

            <h2 className="text-lg font-bold mt-2">
              {p.name}
            </h2>

            <p className="text-gray-600">
              ₹ {p.price}
            </p>

            <p className="text-sm text-gray-500">
              {p.description}
            </p>

            <button
              onClick={() =>
                navigate(`/product/${p._id}`)
              }
              className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
            >
              View Details
            </button>
        
        <button
            onClick={() => navigate(`/edit-product/${p._id}`)}
            className="mt-2 bg-yellow-500 text-white px-3 py-1 rounded ml-2"
        >
        Edit
        </button>
        <button
            onClick={() => handleDelete(p._id)}
            className="mt-2 bg-red-500 text-white px-3 py-1 rounded ml-2"
        >
        Delete
        </button>

        </div>
        ))}
      </div>
    </div>
  );
}

export default Home;