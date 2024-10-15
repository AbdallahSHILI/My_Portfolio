import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/index";
import { About, ContactMe, HireMeToday, Home, Projects } from "./Pages/index";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/HireMe" element={<HireMeToday />} />
          <Route path="/HireMe/Contact" element={<ContactMe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
