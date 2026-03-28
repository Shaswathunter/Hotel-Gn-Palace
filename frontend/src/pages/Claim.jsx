import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const BACKEND_URL = "http://localhost:5000";

export default function Claim() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    checkin: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.phone) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);
      await axios.post(`${BACKEND_URL}/api/claim`, form);
      navigate("/payment");
    } catch (err) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center text-white px-4">

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl w-full max-w-md"
      >
        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-6 text-center">
          🏨 Book Your Stay
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="text-sm text-gray-300">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full mt-1 p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="text-sm text-gray-300">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter phone number"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
            className="w-full mt-1 p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Check-in Date */}
        <div className="mb-6">
          <label className="text-sm text-gray-300">Check-in Date</label>
          <input
            type="date"
            value={form.checkin}
            onChange={(e) =>
              setForm({ ...form, checkin: e.target.value })
            }
            className="w-full mt-1 p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 py-3 rounded-xl font-semibold shadow-lg"
        >
          {loading ? "Processing..." : "Confirm Booking"}
        </motion.button>
      </motion.div>
    </div>
  );
}