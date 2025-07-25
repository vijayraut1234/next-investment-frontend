// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./ForgetPassword.css";

// function ForgetPassword() {
//   const [mobile, setMobile] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSendOTP = async () => {
//     const res = await fetch("http://localhost:5005/forgot-password", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ mobile })
//     });

//     const data = await res.json();
//     if (res.ok) {
//       setMessage("✅ OTP Sent Successfully");
//       setTimeout(() => {
//         navigate("/verify-otp", { state: { mobile } });
//       }, 1500);
//     } else {
//       setMessage(data.message || "Failed to send OTP");
//     }
//   };

//   return (
//     <div className="auth-box">
//       <h2>Forgot Password</h2>
//       <input
//         type="text"
//         placeholder="Enter Mobile"
//         value={mobile}
//         onChange={(e) => setMobile(e.target.value)}
//       />
//       <button onClick={handleSendOTP}>Send OTP</button>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default ForgetPassword;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    const res = await fetch("http://localhost:5005/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    const data = await res.json();
    if (res.ok) {
      setOtpSent(true);
      setMessage("✅ OTP sent to your email");
      setTimeout(() => {
        navigate("/verify-otp", { state: { email } });
      }, 10000);
    } else {
      setOtpSent(false);
      setMessage(data.message || "❌ Failed to send OTP");
    }
  };

  return (
    <div className="auth-box">
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSendOTP}>Send OTP</button>

      {/* OTP sent alert */}
      {otpSent && (
        <div style={{
          marginTop: "1rem",
          padding: "12px",
          backgroundColor: "#fff3cd",
          color: "#856404",
          border: "1px solid #ffeeba",
          borderRadius: "8px",
          fontSize: "0.9rem"
        }}>
          {message} If you don’t see it in your inbox, please check your <strong>Spam</strong> or <strong>Promotions</strong> folder.
        </div>
      )}

      {/* Error or normal message */}
      {message && !otpSent && <p style={{ color: "red", marginTop: "1rem" }}>{message}</p>}
    </div>
  );
}

export default ForgetPassword;
