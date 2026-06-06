// import { useNavigate } from "react-router-dom";

// function Navbar() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <div className="flex justify-between p-4 bg-black text-white">

//       <h1 className="font-bold">Product App</h1>

//       <div className="space-x-3">

//         <button onClick={() => navigate("/home")}>
//           Home
//         </button>

//         <button onClick={() => navigate("/add-product")}>
//           Add Product
//         </button>

//         <button onClick={() => navigate("/profile")}>
//           Profile
//         </button>

//         <button
//           onClick={handleLogout}
//           className="bg-red-500 px-2 py-1 rounded"
//         >
//           Logout
//         </button>

//       </div>
//     </div>
//   );
// }

// export default Navbar;

import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center p-4 bg-black text-white">

      <h1
        className="font-bold text-xl cursor-pointer"
        onClick={() => navigate("/home")}
      >
        Product Manager
      </h1>

      <div className="flex gap-3">

        <button
          onClick={() => navigate("/home")}
          className="hover:underline"
        >
          Home
        </button>

        <button
          onClick={() => navigate("/add-product")}
          className="hover:underline"
        >
          Add Product
        </button>

        <button
          onClick={() => navigate("/profile")}
          className="hover:underline"
        >
          Profile
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-3 py-1 rounded"
        >
          Logout
        </button>

      </div>
    </div>
  );
}

export default Navbar;