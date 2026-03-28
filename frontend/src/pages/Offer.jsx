import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Offer() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-3xl shadow-2xl text-center"
      >
        <h2 className="text-3xl font-bold mb-4">🎉 Exclusive Offer</h2>
        <p className="text-gray-400 mb-2">Luxury Room</p>

        <p className="line-through text-red-400 text-xl">₹800</p>
        <p className="text-green-400 text-4xl font-bold mb-6">₹350</p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/claim")}
          className="bg-green-500 px-6 py-3 rounded-xl text-lg"
        >
          Claim Now
        </motion.button>
      </motion.div>
    </div>
  );
}
