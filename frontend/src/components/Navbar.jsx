import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-[#0B0F19]/85 backdrop-blur-md border-b border-slate-800/80 text-slate-100 shadow-lg shadow-black/10">
      
      {/* Brand Logo & Name */}
      <div
        className="flex items-center gap-2.5 cursor-pointer group"
        onClick={() => navigate("/home")}
      >
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>
        </div>
        <h1 className="font-extrabold text-xl tracking-tight text-white group-hover:text-indigo-400 transition duration-200">
          Product Manager
        </h1>
      </div>

      {/* Nav Actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => navigate("/home")}
          className="text-sm font-medium text-slate-300 hover:text-white px-3.5 py-1.5 rounded-lg hover:bg-slate-800/50 transition duration-150 cursor-pointer"
        >
          Home
        </button>

        <button
          onClick={() => navigate("/add-product")}
          className="text-sm font-medium text-slate-300 hover:text-white px-3.5 py-1.5 rounded-lg hover:bg-slate-800/50 transition duration-150 cursor-pointer"
        >
          Add Product
        </button>

        <button
          onClick={() => navigate("/profile")}
          className="text-sm font-medium text-slate-300 hover:text-white px-3.5 py-1.5 rounded-lg hover:bg-slate-800/50 transition duration-150 cursor-pointer"
        >
          Profile
        </button>

        <button
          onClick={handleLogout}
          className="text-sm font-semibold text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 px-3.5 py-1.5 rounded-lg border border-rose-500/20 transition-all duration-200 transform active:scale-95 cursor-pointer ml-1"
        >
          Logout
        </button>
      </div>

    </div>
  );
}

export default Navbar;