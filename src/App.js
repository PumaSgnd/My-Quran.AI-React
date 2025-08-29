import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import PrivacyPolicy from "./components/privacy-policy";
import Terms from "./components/TermsOfService";
import DataDeletion from "./components/DataDeletion"

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        {/* <nav style={{ 
          padding: "10px", 
          background: "#282c34", 
          display: "flex", 
          gap: "15px" 
        }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
          <Link to="/privacy-policy" style={{ color: "white", textDecoration: "none" }}>Privacy Policy</Link>
          <Link to="/terms-of-service" style={{ color: "white", textDecoration: "none" }}>Terms</Link>
        </nav> */}

        {/* Routes */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/data-deletion" element={<DataDeletion />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<Terms />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
