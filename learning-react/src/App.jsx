import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Header from "./components/Header";

function App () {
  return (
  <Router>
  <Header />
  <Routes>
    <Route path="/About" element={<About />} />
    <Route path="Contact" element={<Contact />} />
    <Route path="/Product" element={<Product />} />
    <Route path="*" element={<div>Error 404 !</div>} />
  </Routes>
  </Router>
  ); 
}

export default App;

