// import React from "react";
// import "./Home.css";
// import investing from "./investing.jpg"; 
// import audio from "./audio.wav";

// function Home() {
//   return (
//     <div className="home-container">
//       <h1>🏠 Welcome to <span>Smart Invest</span></h1>
//       <p>
//         India's trusted platform for secure investment, SIP planning,  
//         mutual fund growth & easy withdrawals.


//         <audio controls>
//             <source src={audio} alt="audio/mpeg" />
//         </audio>
//       </p>
      
//       <img src={investing} alt="Investment banner" className="home-image" />

//       <p className="live-text">🚀 Grow your wealth with us in real time!</p>

//     </div>
//   );
// }

// export default Home;




// Home.js
import React from "react";
import "./Home.css";
import investing from "./investing.jpg"; 
import audio from "./audio.wav";

function Home() {
  return (
    <div className="home-container">
      <h1>🏠 Welcome to <span>Smart Invest</span></h1>
      <p>
        India's trusted platform for secure investment, SIP planning,  
        mutual fund growth & easy withdrawals.
        <br />
        <audio controls className="audio-player">
          <source src={audio} type="audio/mpeg" />
        </audio>
      </p>
      
      <img src={investing} alt="Investment banner" className="home-image" />

      <p className="live-text">🚀 Grow your wealth with us in real time!</p>
    </div>
  );
}

export default Home;
