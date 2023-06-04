import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  function showerror() {
    toast.info('In exploration | Coming Soon', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500
    });
  }


  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-light sticky-top shadow " id="mainNav" style={{cursor: "default" }}>
        <ToastContainer />
        <div className="container px-1 py-1">

          <button className="m-1 btn btn-link p-0" onClick={() => navigate("/")} style={{ cursor: "default" }}>
            <img className='img-fluid' src="https://i.ibb.co/bmfX3MG/sweetscoopslogo.png" alt="Logo" style={{ maxWidth: "50px", cursor: "default" }} />
          </button>

          {/* <a className="mx-2" href="/">
            <img className='img-fluid' src="https://i.ibb.co/bmfX3MG/sweetscoopslogo.png" alt="Logo" style={{ maxWidth: "50px" }} />
          </a> */}

          <a className="navbar-brand fw-bold fs-3" style={{ letterSpacing: 2 }} onClick={() => navigate("/")}> <span
            style={{ color: "#ff55a3" }}>Sweet </span>Scoops</a>

          <button className="navbar-toggler border border-white " type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
            aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse fw-semibold" id="navbarResponsive"  style={{cursor: "pointer" }}>
            <ul className="navbar-nav ms-auto">

              <li className="nav-item"><a className="nav-link " onClick={() => showerror()} style={{cursor: "not-allowed" }} >About</a></li>
              <li className="nav-item"><a className="nav-link " onClick={() => showerror()} style={{cursor: "not-allowed" }} >News</a></li>

              {isAuthenticated ? (
                <>
                  <li className="nav-item"><a className="nav-link" onClick={() => navigate("/buyicecream")}>Ice Cream</a></li>
                  <li className="nav-item"><a className="nav-link" onClick={() => navigate("/accounthistory")}> {user.name} |</a>  </li>
                  <li className="nav-item ps-0 "><a className="nav-link" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</a>  </li>
                </>
              ) : (
                <>
                  <li className="nav-item"><a className="nav-link" onClick={() => loginWithRedirect()}>Login |</a>  </li>
                  <li className="nav-item ps-0 "><a className="nav-link" onClick={() => loginWithRedirect()}>Signup</a>  </li>
                </>
              )}


            </ul>
          </div>
        </div>
      </nav>

    </>




  );
};

export default Navbar;
