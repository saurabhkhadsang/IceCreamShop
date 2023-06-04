// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import LandingPage from './component/LandingPage';
import LoginPage from './component/LoginPage';
import AccountPage from './component/AccountPage';
import IceCreamBuyPage from './component/IceCreamBuyPage';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes >
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/accounthistory" element={<AccountPage/>} />
        <Route path="/buyicecream" element={<IceCreamBuyPage/>} />
      </Routes >
    </Router>
  );
};

export default App;
