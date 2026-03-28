import { motion } from "framer-motion";
import { QRCodeCanvas } from "qrcode.react";

const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL;

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide">
          GN Palace
        </h1>
        <p className="text-gray-400 mb-6">Luxury Stay Experience</p>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white p-5 rounded-3xl shadow-2xl"
      >
        <QRCodeCanvas value={`${FRONTEND_URL}/offer`} size={220} />
      </motion.div>

      <p className="mt-6 text-gray-400">Scan to unlock exclusive offer</p>
    </div>
  );
}