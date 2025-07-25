// import React from "react";
// import "./DashHome.css";

// function DashHome() {
//   return (
//     <div className="dashhome-container">
//       <h1>📈 Welcome to Next Invest Dashboard</h1>
//       <p className="welcome-message">
//         Hello Investor! Here's your quick snapshot of your current financial activity.
//       </p>

//       <div className="cards-section">
//         <div className="card1">
//           <h2>Stocks</h2>
//           <p>Total Stocks: 12</p>
//           <p>Total Value: ₹1,25,000</p>
//         </div>

//         <div className="card2">
//           <h2>Mutual Funds</h2>
//           <p>Active SIPs: 4</p>
//           <p>Investment: ₹85,000</p>
//         </div>

//         <div className="card3">
//           <h2>ETF Holdings</h2>
//           <p>ETFs: 3</p>
//           <p>Worth: ₹50,000</p>
//         </div>

//         <div className="card4">
//           <h2>Monthly SIP</h2>
//           <p>Amount: ₹7,500</p>
//           <p>Next Date: 15th July</p>
//         </div>
//       </div>

//       <div className="graph-section">
//         <h2>📊 Investment Growth</h2>
//         <img
//           src="https://miro.medium.com/v2/resize:fit:1200/format:webp/1*N3Be15n35f_Z5EyuUiiDbw.png"
//           alt="Graph"
//           className="graph-img"
//         />
//       </div>

//       <div className="recent-transactions">
//         <h2>🧾 Recent Transactions</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>Investment Type</th>
//               <th>Amount</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>25 Jun 2025</td>
//               <td>SIP</td>
//               <td>₹2,000</td>
//               <td className="success">Success</td>
//             </tr>
//             <tr>
//               <td>20 Jun 2025</td>
//               <td>Stock</td>
//               <td>₹5,000</td>
//               <td className="failed">Failed</td>
//             </tr>
//             <tr>
//               <td>15 Jun 2025</td>
//               <td>ETF</td>
//               <td>₹3,000</td>
//               <td className="success">Success</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       <div className="alerts-section">
//         <h2>⚠️ Important Alerts</h2>
//         <ul>
//           <li>Your SIP is due on 15th July.</li>
//           <li>Mutual Fund NAV has dropped 3% this week.</li>
//           <li>ETF dividend will be credited on 5th July.</li>
//         </ul>
//       </div>

//       <div className="tips-section">
//         <h2>💡 Smart Investment Tips</h2>
//         <ul>
//           <li>Start with index funds if you are a beginner.</li>
//           <li>Always diversify your portfolio.</li>
//           <li>Use SIP to manage market volatility.</li>
//           <li>Rebalance your investments every 6 months.</li>
//         </ul>
//       </div>

      
    
//         <footer className="dashhome-footer">
//         <p>&copy; 2025 Next Invest. All Rights Reserved.</p>
//       </footer>
//        </div>
//   );
// }

// export default DashHome;



import React from "react";
import "./DashHome.css";

function DashHome() {
  return (
    <div className="dashhome-container">
      <h1>📈 Welcome to Next Invest Dashboard</h1>
      <p className="welcome-message">
        Hello Investor! Here's your quick snapshot of your current financial activity.
      </p>

      <div className="cards-section">
        <div className="card1">
          <h2>Stocks</h2>
          <p>Total Stocks: 12</p>
          <p>Total Value: ₹1,25,000</p>
        </div>

        <div className="card2">
          <h2>Mutual Funds</h2>
          <p>Active SIPs: 4</p>
          <p>Investment: ₹85,000</p>
        </div>

        <div className="card3">
          <h2>ETF Holdings</h2>
          <p>ETFs: 3</p>
          <p>Worth: ₹50,000</p>
        </div>

        <div className="card4">
          <h2>Monthly SIP</h2>
          <p>Amount: ₹7,500</p>
          <p>Next Date: 15th July</p>
        </div>
      </div>

      <div className="graph-section">
        <h2>📊 Investment Growth</h2>
        <img
          src="https://miro.medium.com/v2/resize:fit:1200/format:webp/1*N3Be15n35f_Z5EyuUiiDbw.png"
          alt="Graph"
          className="graph-img"
        />
      </div>

      <div className="recent-transactions">
        <h2>🧾 Recent Transactions</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Investment Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>25 Jun 2025</td>
              <td>SIP</td>
              <td>₹2,000</td>
              <td className="success">Success</td>
            </tr>
            <tr>
              <td>20 Jun 2025</td>
              <td>Stock</td>
              <td>₹5,000</td>
              <td className="failed">Failed</td>
            </tr>
            <tr>
              <td>15 Jun 2025</td>
              <td>ETF</td>
              <td>₹3,000</td>
              <td className="success">Success</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="alerts-section">
        <h2>⚠️ Important Alerts</h2>
        <ul>
          <li>Your SIP is due on 15th July.</li>
          <li>Mutual Fund NAV has dropped 3% this week.</li>
          <li>ETF dividend will be credited on 5th July.</li>
        </ul>
      </div>

      <div className="tips-section">
        <h2>💡 Smart Investment Tips</h2>
        <ul>
          <li>Start with index funds if you are a beginner.</li>
          <li>Always diversify your portfolio.</li>
          <li>Use SIP to manage market volatility.</li>
          <li>Rebalance your investments every 6 months.</li>
        </ul>
      </div>

      <footer className="dashhome-footer">
        <p>&copy; 2025 Next Invest. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default DashHome;