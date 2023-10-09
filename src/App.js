import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Hours from "./pages/Hours";

function App() {
  return (
    // <div className="App">
    //   <h1>Hi</h1>
    // </div>
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
        <Route path="/hours" element={<Hours/>}></Route>
      </Routes>
    </>
  );
}

export default App;
