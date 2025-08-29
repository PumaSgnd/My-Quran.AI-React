import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav style={{ 
          padding: "10px", 
          background: "#282c34", 
          display: "flex", 
          gap: "15px" 
        }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
          <Link to="/privacy" style={{ color: "white", textDecoration: "none" }}>Privacy Policy</Link>
          <Link to="/terms" style={{ color: "white", textDecoration: "none" }}>Terms</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
