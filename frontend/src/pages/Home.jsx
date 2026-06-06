import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
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
  <>
    <Navbar />


<div className="min-h-screen bg-gray-100 p-5">

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

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {products.map((p) => (
      <ProductCard
        key={p._id}
        product={p}
        onDelete={handleDelete}
      />
    ))}
  </div>

</div>
    </>
  );
  
}

export default Home;