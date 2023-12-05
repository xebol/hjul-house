import { HashRouter as Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Hours from "./pages/Hours";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/hours" element={<Hours />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
