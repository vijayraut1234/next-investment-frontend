// import React, { useState, useEffect } from "react";
// import "./MutualFund.css";

// function MutualFund() {
//   const [funds, setFunds] = useState([]);
//   const [search, setSearch] = useState("");
//   const [sortType, setSortType] = useState("name");

//   useEffect(() => {
//     const dummyFunds = [
//       { id: 1, name: "Axis Bluechip Fund", nav: 45.23, risk: "Low", returns: "12.5%" },
//       { id: 2, name: "SBI Small Cap Fund", nav: 122.5, risk: "High", returns: "22.3%" },
//       { id: 3, name: "HDFC Balanced Advantage", nav: 87.8, risk: "Medium", returns: "16.8%" },
//       { id: 4, name: "ICICI Prudential Value Discovery", nav: 55.2, risk: "Medium", returns: "14.9%" },
//       { id: 5, name: "Nippon India Growth", nav: 89.3, risk: "High", returns: "19.6%" },
//       // आणखी add करू शकतो
//     ];
//     setFunds(dummyFunds);
//   }, []);

//   const filteredFunds = funds
//     .filter((fund) =>
//       fund.name.toLowerCase().includes(search.toLowerCase())
//     )
//     .sort((a, b) => {
//       if (sortType === "nav") return b.nav - a.nav;
//       if (sortType === "returns")
//         return parseFloat(b.returns) - parseFloat(a.returns);
//       return a.name.localeCompare(b.name);
//     });

//   const handleInvest = (fundName) => {
//     alert(`Investment initiated in ${fundName}`);
//   };

//   const handleView = (fundName) => {
//     alert(`Viewing more details for ${fundName}`);
//   };

//   return (
//     <div className="mf-container">
//       <h1>💼 Mutual Fund Dashboard</h1>

//       <div className="mf-controls">
//         <input
//           type="text"
//           placeholder="Search mutual fund..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
//           <option value="name">Sort by Name</option>
//           <option value="nav">Sort by NAV</option>
//           <option value="returns">Sort by Returns</option>
//         </select>
//       </div>

//       <div className="mf-grid">
//         {filteredFunds.map((fund) => (
//           <div className="mf-card" key={fund.id}>
//             <h2>{fund.name}</h2>
//             <p>📊 NAV: ₹{fund.nav}</p>
//             <p>📈 Returns: {fund.returns}</p>
//             <p>
//               ⚠️ Risk:{" "}
//               <span className={`risk ${fund.risk.toLowerCase()}`}>
//                 {fund.risk}
//               </span>
//             </p>
//             <div className="mf-actions">
//               <button onClick={() => handleInvest(fund.name)}>Invest</button>
//               <button onClick={() => handleView(fund.name)}>View</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MutualFund;












import React, { useState, useEffect } from "react";
import "./MutualFund.css";

function MutualFund() {
  const [funds, setFunds] = useState([]);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("name");

  useEffect(() => {
    const dummyFunds = [
      { id: 1, name: "Axis Bluechip Fund", nav: 45.23, risk: "Low", returns: "12.5%" },
      { id: 2, name: "SBI Small Cap Fund", nav: 122.5, risk: "High", returns: "22.3%" },
      { id: 3, name: "HDFC Balanced Advantage", nav: 87.8, risk: "Medium", returns: "16.8%" },
      { id: 4, name: "ICICI Prudential Value Discovery", nav: 55.2, risk: "Medium", returns: "14.9%" },
      { id: 5, name: "Nippon India Growth", nav: 89.3, risk: "High", returns: "19.6%" },
      // आणखी add करू शकतो
    ];
    setFunds(dummyFunds);
  }, []);

  const filteredFunds = funds
    .filter((fund) =>
      fund.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === "nav") return b.nav - a.nav;
      if (sortType === "returns")
        return parseFloat(b.returns) - parseFloat(a.returns);
      return a.name.localeCompare(b.name);
    });

  const handleInvest = (fundName) => {
    alert(`Investment initiated in ${fundName}`);
  };

  const handleView = (fundName) => {
    alert(`Viewing more details for ${fundName}`);
  };

  return (
    <div className="mf-container">
      <h1>💼 Mutual Fund Dashboard</h1>

      <div className="mf-controls">
        <input
          type="text"
          placeholder="Search mutual fund..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
          <option value="name">Sort by Name</option>
          <option value="nav">Sort by NAV</option>
          <option value="returns">Sort by Returns</option>
        </select>
      </div>

      <div className="mf-grid">
        {filteredFunds.map((fund) => (
          <div className="mf-card" key={fund.id}>
            <h2>{fund.name}</h2>
            <p>📊 NAV: ₹{fund.nav}</p>
            <p>📈 Returns: {fund.returns}</p>
            <p>
              ⚠️ Risk:{" "}
              <span className={`risk ${fund.risk.toLowerCase()}`}>
                {fund.risk}
              </span>
            </p>
            <div className="mf-actions">
              <button onClick={() => handleInvest(fund.name)}>Invest</button>
              <button onClick={() => handleView(fund.name)}>View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MutualFund;




