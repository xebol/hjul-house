import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Hours from "./pages/Hours";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

function App() {
  //get info on the current location of the page
const location = useLocation()

useEffect(() => {
  //extract route from location.pathname
  const routeName = location.pathname.replace("/", "")

  //dynamically change title based on route name
  document.title = routeName || "Hjul House";
}, location.pathname)


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
