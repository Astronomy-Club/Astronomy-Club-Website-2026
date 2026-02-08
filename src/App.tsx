import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Activities from './pages/Activities';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs'
function App() {

  return (
    <>
        <Router>
          <Navbar/>
          <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/Blogs" element = {<Blogs/>}/>
            <Route path = "/projects" element = {<Projects/>}/>
            <Route path="/activities" element={<Activities />} />
          </Routes>
        </Router>
       
    
    </>
  )
}

export default App;
