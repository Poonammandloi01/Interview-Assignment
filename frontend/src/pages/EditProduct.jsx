import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
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

  // Load product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await API.get(`/products/${id}`);
        setForm(data);
      } catch (error) {
        alert("Failed to load product");
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/products/${id}`, form);

      alert("Product updated successfully");
      navigate("/home");
    } catch (error) {
      alert("Update failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">

        <h2 className="text-2xl font-bold mb-4 text-center">
          Edit Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2"
          />

          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            className="w-full border p-2"
          />

          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            className="w-full border p-2"
          />

          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border p-2"
          />

          <input
            name="stock"
            value={form.stock}
            onChange={handleChange}
            className="w-full border p-2"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border p-2"
          />

          <button className="w-full bg-green-500 text-white p-2">
            Update Product
          </button>

        </form>
      </div>
    </div>
  );
}

export default EditProduct;