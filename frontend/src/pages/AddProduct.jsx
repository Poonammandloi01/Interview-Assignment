import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
    category: "",
    stock: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/products", form);

      alert("Product added successfully");
      navigate("/home");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to add product");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        
        <h2 className="text-2xl font-bold mb-4 text-center">
          Add Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            name="name"
            placeholder="Product Name"
            onChange={handleChange}
            className="w-full border p-2"
          />

          <input
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
            className="w-full border p-2"
          />

          <input
            name="price"
            type="number"
            placeholder="Price"
            onChange={handleChange}
            className="w-full border p-2"
          />

          <input
            name="category"
            placeholder="Category"
            onChange={handleChange}
            className="w-full border p-2"
          />

          <input
            name="stock"
            type="number"
            placeholder="Stock"
            onChange={handleChange}
            className="w-full border p-2"
          />

          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="w-full border p-2"
          />

          <button className="w-full bg-blue-500 text-white p-2">
            Add Product
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddProduct;