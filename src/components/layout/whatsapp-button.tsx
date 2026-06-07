"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <motion.a
      href={COMPANY.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50"
      aria-label="Chat on WhatsApp"
    >
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <MessageCircle className="h-7 w-7 fill-white" />
      </motion.div>
    </motion.a>
  );
}
