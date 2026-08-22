import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Activities from './pages/Activities';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Footer from './components/common/Footer';
import CometCursor from './components/CometCursor';
function App() {



  return (
    <>
      <Router>
        <CometCursor/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer/>
        <CometCursor></CometCursor>
      </Router>


    </>
  )
}

export default App;
