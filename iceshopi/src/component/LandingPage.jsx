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
