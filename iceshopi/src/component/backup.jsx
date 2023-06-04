// import React from 'react';
// import { useAuth0 } from "@auth0/auth0-react";

// const Navbar = () => {
//   const { loginWithRedirect, logout } = useAuth0();

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container">
//         <a className="navbar-brand" href="/">Ice Cream Shop</a>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <a className="nav-link" href="/login">Login</a>
//               <button onClick={() => loginWithRedirect()}>Log In</button>

//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/buyicecream">buyicecream</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/accounthistory">accounthistory</a>
//             </li>

//             <li className="nav-item">
//               <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
//                 Log Out
//               </button>
//             </li>


//             {/* Add more navigation links as needed */}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// ====================================================================================================
// ====================================================================================================
// ====================================================================================================
// ====================================================================================================



import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
// import axios from "axios";



const LandingPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <h1>Welcome to our Ice Cream Shop</h1>

      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          {/* <h3>{user}</h3> */}
          <p>{user.email}</p>
          {/* <button onClick={register}>Register</button> */}
        </div>
      )}

      {/* Add your content here */}
    </div>
  );
};

export default LandingPage;
