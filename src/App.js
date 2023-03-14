import "./App.css";
import { Home } from "./components/Homepage/Home";
import { Services } from "./components/Services/Services";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Schedule from './components/Schedule/Schedule';
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
        <Route path="/schedule" element={<Schedule/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
