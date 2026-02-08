import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import ParticleEffect from "../Animations/ParticleEffect.jsx";


import Hero from "../assets/hero.png";
import star from "../assets/star.png";


const heroVariants = {
  visible: {
    x: [-30, 30, -30],
    y: [-30, 30, -30],
    transition: { repeat: Infinity, duration: 5 },
  },
}

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
}

const Home = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="bg-black min-h-screen font-roboto">
      {/* Hero Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 pt-10">
        
        <div className="text-center md:text-left max-w-2xl md:mt-20">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold">
            Step into the Wonders of the Astronomy Club!
          </h1>

          <p className="text-white text-sm sm:text-lg mt-4">
            Unveiling the Mysteries of the Universe,
          </p>

          <p className="text-white text-sm sm:text-lg">
            We are the <span className="text-purple-400 font-bold">Astronomy</span> Club of IIT BHU.
          </p>

          <Link to="/activities">
            <button className="bg-gradient-to-r from-white to-slate-400 rounded-md w-full sm:w-[130px] mt-6 px-4 py-2 text-black font-bold text-lg">
              Explore
            </button>
          </Link>

          <p className="text-white text-lg sm:text-xl mt-6">Who Are We?</p>

          <p className="text-white text-sm sm:text-lg mt-4 leading-relaxed">
            The Astronomy Club, IIT (BHU) Varanasi, is a passionate community of
            space enthusiasts, aspiring astrophysicists, and stargazers. 🌌
          </p>
        </div>

        <div className="relative flex justify-center items-center mt-10 md:mt-0 w-60 sm:w-96">
          <div className="absolute inset-0 -z-10">
            <ParticleEffect />
          </div>

          <motion.img
            src={Hero}
            alt="Astronomy Club Hero"
            className="w-full h-auto"
            variants={heroVariants}
            animate="visible"
          />
        </div>
      </div>

      {/* What do we do */}
      <motion.div
        className="container mx-auto px-4 mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-white text-center text-xl sm:text-3xl font-bold">
          What Do We Do?
        </h2>

        <motion.ul className="mt-6 space-y-4 text-white text-sm sm:text-lg px-4 sm:px-20">
          {[
            "🔭 Observational Sessions - We regularly organize night sky observation events where members can observe planets, star clusters, nebulae, and galaxies through high-powered telescopes.These sessions help students understand celestial navigation, constellations, and real-time astronomical phenomena like eclipses, meteor showers, and planetary transits.",
            "📷 Astrophotography - We capture breathtaking images of celestial objects, including the Moon, planets, and deep-space objects like nebulae and galaxies. Members learn image processing and the use of specialized equipment to document the beauty of the cosmo",
            "🚀 Rocket Team- Our team works on designing, simulating, and launching model rockets, experimenting with aerodynamics, propulsion systems, and payloads. We conduct hands-on sessions where students build and test their own rockets, applying fundamental physics and engineering concept",
            "🛰 Satellite Team- We research and develop small satellite projects, focusing on CubeSats. Members get to work on hardware design, software programming, and real-world space applications, preparing them for future opportunities in space technology and exploration",
          ].map((text, index) => (
            <motion.li
              key={index}
              className="p-4 bg-gray-800 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {text}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Cursor Star */}
      <img
        src={star}
        alt="Star Cursor"
        className="fixed pointer-events-none w-6"
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
          zIndex: 1000,
        }}
      />
    </div>
  )
}

export default Home
