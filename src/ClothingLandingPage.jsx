import { useState } from "react";
import { motion } from "framer-motion";

export default function ClothingLandingPage() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`${darkMode ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white" : "bg-gradient-to-br from-cream via-white to-gray-100 text-black"} min-h-screen transition-all duration-500`}
      style={{ backgroundAttachment: "fixed" }}
    >
      <header className="flex justify-between items-center p-8 shadow-md backdrop-blur-sm bg-opacity-50 bg-white/20">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          NxtLvl
        </motion.h1>
        <nav className="flex gap-6 text-lg">
          <a href="#shop" className="hover:underline">Shop</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <button onClick={toggleDarkMode} className="border px-3 py-1 rounded">
            {darkMode ? "Light" : "Dark"} Mode
          </button>
        </nav>
      </header>

      <motion.section
        className="text-center py-28 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1500&q=80')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-5xl font-bold mb-4 text-white drop-shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Streetwear That Inspires
        </motion.h2>
        <p className="text-xl italic mb-10 text-white drop-shadow-md">
          Wear your mindset. Move different.
        </p>
        <motion.a
          href="#shop"
          className="bg-white text-black px-6 py-3 rounded-full text-xl inline-block shadow-md hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
        >
          Shop Now
        </motion.a>
      </motion.section>

      <section id="shop" className="p-12 bg-white text-black">
        <h3 className="text-4xl mb-8 text-center">Featured Products</h3>
        <motion.div
          className="flex gap-8 overflow-x-auto pb-4"
          whileHover={{ cursor: "grab" }}
        >
          {["Hustle Hoodie", "Grind Tee", "Focus Sweatpants", "Limitless Cap"].map((product, i) => (
            <motion.div
              key={i}
              className="shadow-xl rounded-2xl p-4 min-w-[250px] bg-gradient-to-br from-gray-100 to-white hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={`https://via.placeholder.com/300?text=${product.replace(/ /g, "+")}`}
                alt={product}
                className="mb-4 rounded-xl w-full h-48 object-cover"
              />
              <h4 className="text-xl font-semibold mb-2">{product}</h4>
              <p>$ {20 + i * 15}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <motion.section
        id="about"
        className="py-16 px-8 text-center bg-gradient-to-r from-white to-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-4xl mb-6">About NxtLvl</h3>
        <p className="text-xl max-w-3xl mx-auto">
          We’re not just clothing — we’re a movement. Every piece is crafted to remind you to level up, stay focused, and make your mark.
        </p>
      </motion.section>

      <motion.section
        id="contact"
        className="py-16 px-8 bg-gray-100 text-black text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-4xl mb-6">Contact Us</h3>
        <p className="text-xl">
          Have questions or want to collab? Reach out at
          <a href="mailto:support@nxtlvl.com" className="underline">
            support@nxtlvl.com
          </a>
        </p>
      </motion.section>

      <footer className="py-6 text-center text-sm bg-black text-white">
        © 2025 NxtLvl. All rights reserved.
      </footer>
    </div>
  );
}
