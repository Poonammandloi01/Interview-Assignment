// import { useEffect, useState } from "react";
// import API from "../services/api";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import ProductCard from "../components/ProductCard";

// function Home() {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();
//   const [search, setSearch] = useState("");
//   const fetchProducts = async () => {
//     try {
//       const { data } = await API.get("/products");
//       setProducts(data);
//     } catch (error) {
//       alert("Failed to fetch products");
//     }
//   };
//   const handleDelete = async (id) => {
//   const confirmDelete = window.confirm(
//     "Are you sure you want to delete this product?"
//   );

//   if (!confirmDelete) return;

//   try {
//     await API.delete(`/products/${id}`);

//     alert("Product deleted");

//     // UI refresh
//     setProducts(products.filter((p) => p._id !== id));
//   } catch (error) {
//     alert("Delete failed");
//   }
// };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const filteredProducts = products.filter(
//   (product) =>
//     product.name.toLowerCase().includes(search.toLowerCase()) ||
//     product.category.toLowerCase().includes(search.toLowerCase())
// );

// return (
//   <>
//     <Navbar />


// <div className="min-h-screen bg-gray-100 p-5">

//   <div className="flex justify-between items-center mb-5">
//     <h1 className="text-2xl font-bold">
//       Product List
//     </h1>
//   <div className="mb-5">
//   <input
//     type="text"
//     placeholder="Search products..."
//     value={search}
//     onChange={(e) => setSearch(e.target.value)}
//     className="w-full md:w-96 border border-gray-300 p-2 rounded"
//   />
// </div>
//     <button
//       onClick={() => navigate("/add-product")}
//       className="bg-blue-500 text-white px-4 py-2 rounded"
//     >
//       + Add Product
//     </button>
//   </div>

//   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//     {
//     filteredProducts.map((p) => (
//       <ProductCard
//         key={p._id}
//         product={p}
//         onDelete={handleDelete}
//       />
//     ))}
//   </div>

// </div>
//     </>
//   );
  
// }

// export default Home;
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

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#0B0F19] text-slate-100 p-6 sm:p-8 relative overflow-hidden">
        {/* Decorative Background Mesh Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

        {/* Dashboard Control Panel */}
        <div className="relative max-w-7xl mx-auto space-y-6">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-800/80 pb-6">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                Product Inventory
              </h1>
              <p className="text-sm text-slate-400 mt-1">
                Manage, search, and monitor your catalog inventory
              </p>
            </div>

            {/* Action Bar (Search & Create) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Search Bar */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-slate-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search by name or category..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full sm:w-64 md:w-80 bg-[#131B2E]/60 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition duration-200 text-sm"
                />
              </div>

              {/* Add Product Button */}
              <button
                onClick={() => navigate("/add-product")}
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/25 transition-all duration-200 transform active:scale-[0.98] cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add Product
              </button>
            </div>
          </div>

          {/* Product Catalog Grid / Empty State */}
          {filteredProducts.length === 0 ? (
            <div className="relative flex flex-col items-center justify-center p-12 bg-[#131B2E]/30 border border-dashed border-slate-800 rounded-2xl text-center min-h-[300px]">
              <div className="p-4 rounded-full bg-slate-900/80 border border-slate-800 text-slate-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-300">No products found</h3>
              <p className="text-sm text-slate-500 mt-1 max-w-sm">
                {products.length === 0
                  ? "Get started by adding your first product to the catalog inventory."
                  : "Try adjusting your search keywords or categories to find the item."}
              </p>
              {products.length === 0 && (
                <button
                  onClick={() => navigate("/add-product")}
                  className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold rounded-lg border border-slate-700 transition duration-150 cursor-pointer"
                >
                  Create Product
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((p) => (
                <ProductCard
                  key={p._id}
                  product={p}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default Home;