import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Activities from './pages/Activities';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import { useEffect, useState } from 'react';
import Footer from './components/common/Footer';
import Achievements from './pages/Achievement';


function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  return (
    <>
      <Router>
        {/* Custom Star Cursor */}
        <div
          className="fixed top-0 left-0 pointer-events-none"
          style={{
            transform: `translate(${cursorPosition.x-15}px, ${cursorPosition.y-15}px)`,
            zIndex: 1000,
          }}
        >
          <img src={"/star.png"} alt="Star Cursor" width={30} height={30} />
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/achievements" element={<Achievements />} />

        </Routes>
        <Footer/>
      </Router>


    </>
  )
}

export default App;
