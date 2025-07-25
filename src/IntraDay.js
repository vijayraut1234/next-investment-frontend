import React from "react";
import "./Intraday.css";

function Intraday() {
  return (
    <div className="intraday-container">
      <h1>⚡ Intraday Trading Insights</h1>
      <p className="intro-text">
        Get live updates, strategies, and analysis for your intraday trades.
      </p>

      <div className="intraday-cards">
        <div className="card">
          <h2>Top Gainers</h2>
          <ul>
            <li>Reliance +3.2%</li>
            <li>Infosys +2.8%</li>
            <li>HDFC Bank +2.5%</li>
          </ul>
        </div>

        <div className="card">
          <h2>Top Losers</h2>
          <ul>
            <li>Tata Steel -3.0%</li>
            <li>Adani Ports -2.6%</li>
            <li>ONGC -2.1%</li>
          </ul>
        </div>

        <div className="card">
          <h2>Volume Buzzers</h2>
          <ul>
            <li>Wipro - 4.5M</li>
            <li>SBI - 3.9M</li>
            <li>Zomato - 3.1M</li>
          </ul>
        </div>
      </div>

      <div className="intraday-strategy">
        <h2>📘 Today's Strategy</h2>
        <p>
          Use RSI and MACD indicators to find momentum-based entries.
          Trade between 9:30 AM - 11:00 AM for best volatility.
        </p>
      </div>

      <div className="intraday-table">
        <h2>📊 Live Intraday Watchlist</h2>
        <table>
          <thead>
            <tr>
              <th>Stock</th>
              <th>Price</th>
              <th>Change</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TCS</td>
              <td>₹3,520</td>
              <td className="positive">+1.8%</td>
              <td>2.3M</td>
            </tr>
            <tr>
              <td>ITC</td>
              <td>₹459</td>
              <td className="negative">-1.2%</td>
              <td>1.7M</td>
            </tr>
            <tr>
              <td>HCL Tech</td>
              <td>₹1,260</td>
              <td className="positive">+2.1%</td>
              <td>3.8M</td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer className="intraday-footer">
        <p>&copy; 2025 Smart Invest | Intraday Section</p>
      </footer>
    </div>
  );
}

export default Intraday;
