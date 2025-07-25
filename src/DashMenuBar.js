



// import React, { useState } from "react";
// import "./DashMenuBar.css";

// function DashMenuBar({ setPage }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showChangePassword, setShowChangePassword] = useState(false);
//   const [oldPass, setOldPass] = useState("");
//   const [newPass, setNewPass] = useState("");
//   const [confirmPass, setConfirmPass] = useState("");

//   // 🔓 Logout handler
//   const handleLogout = () => {
//     setIsOpen(false);
//     setPage("Home"); // You can redirect to login here too
//   };

//   // 🔒 Password change validation
//   const handleChangePassword = () => {
//     if (!oldPass || !newPass || !confirmPass) {
//       alert("❗ Please fill all fields!");
//     } else if (newPass !== confirmPass) {
//       alert("❗ New and Confirm password do not match!");
//     } else {
//       alert("✅ Password changed successfully (Dummy)");

//       // Reset all fields
//       setOldPass("");
//       setNewPass("");
//       setConfirmPass("");
//       setShowChangePassword(false);
//       setIsOpen(false);
//     }
//   };

//   return (
//     <div>
//       {/* 🍔 Hamburger */}
//       {!isOpen && (
//         <div className="hamburger" onClick={() => setIsOpen(true)}>
//           <div className="bar"></div>
//           <div className="bar"></div>
//           <div className="bar" style={{ marginBottom: "40px" }}></div>
//         </div>
//       )}

//       {/* Sidebar menu */}
//       {isOpen && (
//         <div className={`sidebar ${isOpen ? "show" : "hide"}`}>
//           <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
//           <ul>
//             <li >👤 My Profile</li>
//             <li onClick={() => setShowChangePassword(!showChangePassword)}>🔒 Change Password</li>
//             <li> 🔑 Forgot Password</li>
//             <li >📄 Account Details</li>
//             <li onClick={handleLogout}>🔓 Logout</li>
//           </ul>

//           {/* Password Change Form */}
//           {showChangePassword && (
//             <div className="change-password-form">
//               <input
//                 type="password"
//                 placeholder="Old Password"
//                 value={oldPass}
//                 onChange={(e) => setOldPass(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="New Password"
//                 value={newPass}
//                 onChange={(e) => setNewPass(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 value={confirmPass}
//                 onChange={(e) => setConfirmPass(e.target.value)}
//               />
//               <button onClick={handleChangePassword}>Update Password</button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default DashMenuBar;


//DashboardMenubar
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import "./DashMenuBar.css";

function DashMenuBar({ setPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");



  
  const navigate = useNavigate();

  // const handleLogout = () => {
  //   setIsOpen(false);
    
  //    navigate("/");
  //   // setPage("Home");
  // };

  const handleLogout = async () => {
  try {
    await fetch("http://localhost:5005/api/logout", {
      method: "POST",
      credentials: "include", // ✅ cookie पाठवण्यासाठी गरजेचं
    });

    setIsOpen(false);
    navigate("/login");
  } catch (error) {
    console.error("Logout error:", error);
  }
};

  const handleChangePassword = () => {
    if (!oldPass || !newPass || !confirmPass) {
      alert("❗ Please fill all fields!");
    } else if (newPass !== confirmPass) {
      alert("❗ New and Confirm password do not match!");
    } else {
      alert("✅ Password changed successfully (Dummy)");
      setOldPass("");
      setNewPass("");
      setConfirmPass("");
      setShowChangePassword(false);
      setIsOpen(false);
    }
  };

  return (
    <div>
      {!isOpen && (
        <div className="hamburger" onClick={() => setIsOpen(true)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar" style={{ marginBottom: "40px" }}></div>
        </div>
      )}

      {isOpen && (
        <div className={`sidebar ${isOpen ? "show" : "hide"}`}>
          <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
          <ul>
            <li>👤 My Profile</li>
            <li onClick={() => setShowChangePassword(!showChangePassword)}>🔒 Change Password</li>
            <li>🔑 Forgot Password</li>
            <li>📄 Account Details</li>
            <li onClick={handleLogout}>🚪 Logout   </li>
          </ul>

          {showChangePassword && (
            <div className="change-password-form">
              <input
                type="password"
                placeholder="Old Password"
                value={oldPass}
                onChange={(e) => setOldPass(e.target.value)}
              />
              <input
                type="password"
                placeholder="New Password"
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
              />
              <button onClick={handleChangePassword}>Update Password</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DashMenuBar;