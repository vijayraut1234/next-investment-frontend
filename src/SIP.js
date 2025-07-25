// import React from "react";
// import "./SIP.css";

// function SIP() {
//   return (
//     <div className="section-container">
//       <h1>📅 Systematic Investment Plan (SIP)</h1>
//       <p>Monitor your monthly SIP contributions.</p>

//       <div className="sip-summary">
//         <p>Next SIP Due: <strong>15th July</strong></p>
//         <p>Monthly Contribution: <strong>₹7,500</strong></p>
//         <p>Total SIPs Active: <strong>4</strong></p>
//       </div>

//       <table className="transaction-table">
//         <thead>
//           <tr>
//             <th>Fund</th>
//             <th>Amount</th>
//             <th>Date</th>
//             <th>Frequency</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Axis Growth Fund</td>
//             <td>₹2,000</td>
//             <td>15 Jun</td>
//             <td>Monthly</td>
//             <td className="success">Active</td>
//           </tr>
//           <tr>
//             <td>HDFC MidCap</td>
//             <td>₹1,500</td>
//             <td>15 Jun</td>
//             <td>Monthly</td>
//             <td className="success">Active</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default SIP;






import React from "react";
import "./SIP.css";

function SIP() {
  return (
    <div className="sip-container">
      <h1>📅 Systematic Investment Plan (SIP)</h1>
      <p>Monitor your monthly SIP contributions.</p>

      <div className="sip-summary">
        <p>Next SIP Due: <strong>15th July</strong></p>
        <p>Monthly Contribution: <strong>₹7,500</strong></p>
        <p>Total SIPs Active: <strong>4</strong></p>
      </div>

      <div className="sip-table-container">
        <table className="sip-table">
          <thead>
            <tr>
              <th>Fund</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Frequency</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Axis Growth Fund</td>
              <td>₹2,000</td>
              <td>15 Jun</td>
              <td>Monthly</td>
              <td className="success">Active</td>
            </tr>
            <tr>
              <td>HDFC MidCap</td>
              <td>₹1,500</td>
              <td>15 Jun</td>
              <td>Monthly</td>
              <td className="success">Active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SIP;
