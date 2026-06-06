import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Profile() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const fetchProfile = async () => {
    try {
      const { data } = await API.get("/users/profile");

      setForm({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
      });
    } catch (error) {
      alert("Failed to load profile");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put("/users/profile", {
        fullName: form.fullName,
        phone: form.phone,
      });

      alert("Profile Updated Successfully");
    } catch (error) {
      alert("Update Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-4">
            My Profile
          </h2>

          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border p-2 mb-3 rounded"
          />

          <input
            type="email"
            value={form.email}
            disabled
            className="w-full border p-2 mb-3 rounded bg-gray-100"
          />

          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border p-2 mb-3 rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Update Profile
          </button>
        </form>
      </div>
    </>
  );
}

export default Profile;