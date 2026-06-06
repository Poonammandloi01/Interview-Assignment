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
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#0B0F19] text-slate-300 space-y-4">
        {/* Loading Spinner */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-slate-800" />
          <div className="absolute inset-0 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin" />
        </div>
        <span className="text-sm font-semibold tracking-wider uppercase text-slate-500">
          Loading Details...
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 p-6 sm:p-8 relative overflow-hidden">
      {/* Decorative Background Mesh Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto">
        
        {/* Back Button */}
        <button
          onClick={() => navigate("/home")}
          className="flex items-center gap-2 px-4 py-2 mb-6 bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-sm font-semibold rounded-xl border border-slate-700 transition duration-150 transform active:scale-[0.98] cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Catalog
        </button>

        {/* Product Card */}
        <div className="bg-[#131B2E]/70 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl shadow-black/40 space-y-6">
          
          {/* Product Image */}
          <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-[#0B0F19]/40">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover hover:scale-105 transition duration-500"
            />
            {/* Category tag bubble on top of image */}
            <span className="absolute top-3 right-3 px-3 py-1 bg-slate-900/90 backdrop-blur text-indigo-400 text-xs font-semibold uppercase tracking-wider rounded-lg border border-slate-800">
              {product.category}
            </span>
          </div>

          {/* Name & Title */}
          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              {product.name}
            </h1>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {product.description}
            </p>
          </div>

          {/* Key Specs Dashboard Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/60">
            
            {/* Price block */}
            <div className="bg-[#0B0F19]/50 border border-slate-800/60 rounded-xl p-4 flex flex-col space-y-1">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Price
              </span>
              <span className="text-2xl font-bold text-emerald-400">
                ₹{product.price}
              </span>
            </div>

            {/* Category block */}
            <div className="bg-[#0B0F19]/50 border border-slate-800/60 rounded-xl p-4 flex flex-col space-y-1">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Category
              </span>
              <span className="text-lg font-semibold text-indigo-400 capitalize">
                {product.category}
              </span>
            </div>

            {/* Stock block */}
            <div className="bg-[#0B0F19]/50 border border-slate-800/60 rounded-xl p-4 flex flex-col space-y-1">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Stock Status
              </span>
              <div className="flex items-center gap-2 pt-0.5">
                <span className={`w-2.5 h-2.5 rounded-full ${Number(product.stock) > 0 ? "bg-emerald-500 animate-pulse" : "bg-rose-500"}`} />
                <span className="text-lg font-semibold text-slate-200">
                  {product.stock} units
                </span>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetails;