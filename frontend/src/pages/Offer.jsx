import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export default function Offer() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(true);

  // 🔊 Sound function
  const playSound = () => {
    const audio = new Audio("/success.mp3");
    audio.volume = 1;
    audio.play().catch(() => {});
  };

useEffect(() => {
  const playSound = () => {
    const audio = new Audio("/success.mp3");
    audio.play().catch(() => {});
    
    // ek baar hi chale
    window.removeEventListener("touchstart", playSound);
    window.removeEventListener("click", playSound);
  };

  // mobile + desktop dono cover
  window.addEventListener("touchstart", playSound);
  window.addEventListener("click", playSound);

}, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center relative overflow-hidden">

      {/* 🎉 Popup */}
      {showPopup && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-10 bg-gradient-to-r from-green-400 to-green-600 px-6 py-3 rounded-xl shadow-2xl text-black font-bold z-50"
        >
          🎉 Congratulations! Offer Unlocked
        </motion.div>
      )}

      {/* 🔊 Manual sound button (backup UX) */}
      <button
        onClick={playSound}
        className="absolute bottom-6 text-xs underline text-gray-400"
      >
        🔊 Tap for Sound
      </button>

      {/* 🎁 Main Card */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-3xl shadow-2xl text-center border border-gray-700"
      >
        <h2 className="text-3xl font-bold mb-4">🎉 Exclusive Offer</h2>
        <p className="text-gray-400 mb-2">Luxury Room - GN Palace</p>

        <p className="line-through text-red-400 text-xl">₹800</p>
        <p className="text-green-400 text-4xl font-bold mb-6">₹350</p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/claim")}
          className="bg-green-500 px-6 py-3 rounded-xl text-lg shadow-lg hover:bg-green-600"
        >
          Claim Now
        </motion.button>
      </motion.div>
    </div>
  );
}