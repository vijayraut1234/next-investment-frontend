// import React from "react";
// import "./Registration.css"; 

// function Registration() {
//   return (
//     <div className="register-container">
//       <h2>📝 Sign Up</h2>
//       <form className="register-form">
//         <input type="text" placeholder="Username" required /><br />
//         <input type="email" placeholder="Email" required /><br />
//         <input type="password" placeholder="Password" required /><br />
//         <button type="submit">Register</button>
//       </form>

//       <p className="login-text">
//         Already have an account ?
//             Go TO Login {/*<a href="#">Login</a>*/}
//       </p>
//     </div>
//   );
// }

//  export  default Registration; 



//Registration 
// import React from "react";
// import "./Registration.css";

// function Registration() {
//   return (
//     <div className="register-container">
//       <h2>📝 Sign Up</h2>
//       <form className="register-form">
//         <input type="text" placeholder="Username" required />
//         <input type="email" placeholder="Email" required />
//         <input type="password" placeholder="Password" required />
//         <button type="submit">Register</button>
//       </form>

//       <p className="login-text">
//         Already have an account? <span className="login-link">Go to Login</span>
//       </p>
//     </div>
//   );
// }

// export default Registration;



// import React, { useState } from "react";
// import "./Registration.css";

// function Registration() {
//   const [username, setUsername] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     const res = await fetch("http://localhost:5005/api/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username, mobile, password })
//     });
//     const data = await res.json();
//     setMessage(data.message);
//   };

//   return (
//     <div className="register-container">
//       <h2>📝 Sign Up</h2>
//       <form className="register-form" onSubmit={handleRegister}>
//         <input
//           type="text"
//           placeholder="Username"
//           required
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Mobile Number"
//           required
//           onChange={(e) => setMobile(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           required
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Register</button>
//         {message && <p className="register-message">{message}</p>}
//       </form>
//     </div>
//   );
// }

// export default Registration;




import React, { useState } from "react";
import "./Registration.css";

function Registration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5005/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password })
    });
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="register-container">
      <h2>📝 Sign Up</h2>
      <form className="register-form" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        {message && <p className="register-message">{message}</p>}
      </form>
    </div>
  );
}

export default Registration;
