import "./App.css";
import { Home } from "./components/Homepage/Home";
import { Services } from "./components/Services/Services";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Contact } from "./components/Contact/Contact";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (


    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
