import { QRCodeCanvas } from "qrcode.react";
import { motion } from "framer-motion";

export default function Payment() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl mb-6">
        Complete Payment
      </motion.h2>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="bg-white p-5 rounded-2xl"
      >
        <QRCodeCanvas
          value="upi://pay?pa=yourupi@upi&pn=GN Palace&am=350&cu=INR"
          size={220}
        />
      </motion.div>

      <p className="mt-6 text-gray-400">Show payment proof at reception</p>
    </div>
  );
}