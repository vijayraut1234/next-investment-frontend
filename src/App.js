
// //App.js
// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";

// // Public Pages
// import Home from "./Home";
// import AboutUs from "./About Us";
// import Login from "./Login";
// import Registration from "./Registration";
// import Service from "./Service";
// import Contact from "./Contact";
// import Footer from "./Footer";
// import ForgetPassword from "./ForgetPassword";
// import VerifyOTP from "./VerifyOTP";
// // Dashboard Layout and Pages
// import DashboardLayout from "./Dashboard";
// import DashHome from "./DashHome";
// import Stock from "./Stock";
// import MutualFund from "./MutualFund";
// import SIP from "./SIP";
// import Transaction from "./Transaction";

// // Assets
// import AppIcon from "./AppIcon.jpg";
// import audio from "./audio.wav";

// // Styles
// import "./App.css";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <Router>
//       <div className="app-wrapper">
//         {/* ====== Top Navbar for Public Pages ====== */}
//         {!isLoggedIn && (
//           <nav className="navbar">
//             <div className="IconApps">
//               <img src={AppIcon} alt="Investment Karo" className="IconApp" />
//               <source src={audio} type="audio/mpeg" />
//               <h2 className="app-title">Next Invest</h2>
//             </div>
//             <div className="navbar-right">
//               <Link to="/" className="nav-button home-btn">Home</Link>
//               <Link to="/login" className="nav-button">Login</Link>
//               <Link to="/registration" className="nav-button">Sign Up</Link>
//             </div>
//           </nav>
//         )}

//         {/* ====== Main Content Area ====== */}
//         <div className="main-content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<AboutUs />} />
//             <Route path="/registration" element={<Registration />} />
//             <Route path="/service" element={<Service />} />
//             <Route path="/contact" element={<Contact />} />

//             <Route
//               path="/login"
//               element={
//                 <Login
//                   onSuccess={(email, password) => {
//                     setIsLoggedIn(true);
//                     setEmail(email);
//                     setPassword(password);
//                   }}
//                 />
//               }
//             />
//           <Route path="/forgot-password" element={<ForgetPassword />} />
//           <Route path="/verify-otp" element={<VerifyOTP />} />
//             <Route
//               path="/dashboard"
//               element={
//                 isLoggedIn ? (
//                   <DashboardLayout
//                     email={email}
//                     password={password}
//                     setIsLoggedIn={setIsLoggedIn}
//                   />
//                 ) : (
//                   <Navigate to="/login" replace />
//                 )
//               }
//             >
//               <Route path="home" element={<DashHome />} />
//               <Route path="stock" element={<Stock />} />
//               <Route path="mutualfund" element={<MutualFund />} />
//               <Route path="sip" element={<SIP />} />
//               <Route path="transaction" element={<Transaction />} />
//             </Route>

//             <Route path="*" element={<h2>404 - Page Not Found</h2>} />
//           </Routes>
//         </div>

//         {/* ====== Footer (Visible only when not logged in) ====== */}
//         {!isLoggedIn && <Footer />}
//       </div>
//     </Router>
//   );
// }

// export default App;




// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation } from "react-router-dom";

// Public Pages
import Home from "./Home";
import AboutUs from "./About Us";
import Login from "./Login";
import Registration from "./Registration";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";
import ForgetPassword from "./ForgetPassword";
import VerifyOTP from "./VerifyOTP";

// Dashboard Layout and Pages
import DashboardLayout from "./Dashboard";
import DashHome from "./DashHome";
import Stock from "./Stock";
import MutualFund from "./MutualFund";
import SIP from "./SIP";
import Transaction from "./Transaction";

// Assets
import AppIcon from "./AppIcon.jpg";
import audio from "./audio.wav";

// Styles
import "./App.css";

// =================== Custom Wrapper for Router ===================
function AppWrapper() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const isDashboardPath = location.pathname.startsWith("/dashboard");

  return (
    <div className="app-wrapper">
      {/* ====== Navbar (Hide only on dashboard paths) ====== */}
      {!isDashboardPath && (
        <nav className="navbar">
          <div className="IconApps">
            <img src={AppIcon} alt="Investment Karo" className="IconApp" />
            <source src={audio} type="audio/mpeg" />
            <h2 className="app-title">Next Invest</h2>
          </div>
          <div className="navbar-right">
            <Link to="/" className="nav-button home-btn">Home</Link>
            <Link to="/login" className="nav-button">Login</Link>
            <Link to="/registration" className="nav-button">Sign Up</Link>
          </div>
        </nav>
      )}

      {/* ====== Main Content Area ====== */}
      <div className="main-content">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={
              <Login
                onSuccess={(email, password) => {
                  setIsLoggedIn(true);
                  setEmail(email);
                  setPassword(password);
                }}
              />
            }
          />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />

          {/* Protected Dashboard Routes */}
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? (
                <DashboardLayout
                  email={email}
                  password={password}
                  setIsLoggedIn={setIsLoggedIn}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          >
            <Route path="home" element={<DashHome />} />
            <Route path="stock" element={<Stock />} />
            <Route path="mutualfund" element={<MutualFund />} />
            <Route path="sip" element={<SIP />} />
            <Route path="transaction" element={<Transaction />} />
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>

      {/* ====== Footer (Hide only on dashboard paths) ====== */}
      {!isDashboardPath && <Footer />}
    </div>
  );
}

// =================== Root App with Router ===================
function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
