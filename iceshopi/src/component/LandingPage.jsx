import React from 'react';
// import { useAuth0 } from "@auth0/auth0-react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';


import './LandingPage.css'

import img1 from "../img/icecream1.png";
import img2 from "../img/icecream2.png";

import f1 from "../img/f1.jpg";
import f2 from "../img/f2.jpg";
import f3 from "../img/f3.jpg";
import f4 from "../img/f4.jpg";
import f5 from "../img/f5.jpg";

import bs1 from "../img/bs1.webp";
import bs2 from "../img/bs2.webp";
import bs3 from "../img/bs3.webp";
import bs4 from "../img/bs4.webp";

// import faq1 from "../img/faq1.png";
// import faq2 from "../img/faq2.png";
// import faq3 from "../img/faq3.png";



import ab1 from "../img/ab1.jpg";
import ab2 from "../img/ab2.jpg";
import ab3 from "../img/ab3.jpg";


// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



const LandingPage = () => {
  // const { user, isAuthenticated, isLoading } = useAuth0();

  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }
  const navigate = useNavigate();


  return (
    <>

      <div className="" >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6" >
              <div className="d-flex align-items-center justify-content-center" style={{ height: '100%' }} >
                <img src={img1} alt="Responsive Image" className="img-fluid m-5" />
              </div>
            </div>
            <div className="col-lg-6" >
              <div className="d-flex flex-column align-items-center justify-content-center h-100">
                <div className="m-5 " >
                  <h3>Sweet Scoops Ice Cream Shop</h3>
                  <p>
                    Indulge in our handcrafted ice cream flavors made with the freshest
                    ingredients. Browse our menu and place your order today!
                  </p>
                </div>
                <img src={img2} alt="Responsive Image" className="img-fluid " />
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="container choose-flavour">


        <h3 className="text-center mb-4" >CHOOSE YOUR FLAVOUR</h3>


        <div>
          <div className="row row-cols-1 row-cols-md-5 g-4">


            <div className="col">
              <div className="card-wrapper flip-right">
                <div className="card h-100">

                  <div className="front">
                    <img src={f1} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                      <h5 className="card-title text-center text-center">Chocolate</h5>
                    </div>
                  </div>

                  <div className="back">
                    <div className="card-body text-center moveup">
                      <h5 className="card-title text-center text-center">Chocolate</h5>
                      <p className="card-text mt-4 text-center">Indulge in the rich and velvety goodness of our Chocolate ice cream flavor.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col">
              <div className="card-wrapper flip-right">
                <div className="card h-100">

                  <div className="front">
                    <img src={f2} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                      <h5 className="card-title text-center text-center">Dry Fruits</h5>
                    </div>
                  </div>

                  <div className="back">
                    <div className="card-body text-center moveup">
                      <h5 className="card-title text-center text-center">Dry Fruits</h5>
                      <p className="card-text mt-4 text-center">Experience the delightful crunch of our Dry Fruits ice cream flavor.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col">
              <div className="card-wrapper flip-right">
                <div className="card h-100">

                  <div className="front">
                    <img src={f3} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                      <h5 className="card-title text-center text-center">Indian Traditional</h5>
                    </div>
                  </div>

                  <div className="back">
                    <div className="card-body text-center moveup">
                      <h5 className="card-title text-center text-center">Indian Traditional</h5>
                      <p className="card-text mt-4 text-center">Discover the authentic flavors of Indian tradition in our Indian Traditional ice cream flavor.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col">
              <div className="card-wrapper flip-right">
                <div className="card h-100">

                  <div className="front">
                    <img src={f4} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                      <h5 className="card-title text-center text-center">Fruits</h5>
                    </div>
                  </div>

                  <div className="back">
                    <div className="card-body text-center moveup">
                      <h5 className="card-title text-center text-center">Fruits</h5>
                      <p className="card-text mt-4 text-center">Savor the refreshing burst of fruity goodness in our Fruits ice cream flavor.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col">
              <div className="card-wrapper flip-right">
                <div className="card h-100">

                  <div className="front">
                    <img src={f5} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                      <h5 className="card-title text-center text-center">International/Other</h5>
                    </div>
                  </div>

                  <div className="back">
                    <div className="card-body text-center moveup">
                      <h5 className="card-title text-center text-center">International/Other</h5>
                      <p className="card-text mt-4 text-center">Embark on a global taste adventure with our International/Other ice cream flavors.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>
        <hr />
      </div>


      <div className="container best-seller">

        <h3 className="text-center my-4" >BEST SELLER</h3>

        <div className="row row-cols-1 row-cols-md-4 g-4">

          <div className="col">
            <div className="card h-100 cardlarge">
              <img src={bs1} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title bold text-center">Triple Chocolate</h5>
                <button className='button_card mx-auto my-2' onClick={() => navigate("/buyicecream")}>Buy</button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 cardlarge">
              <img src={bs4} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title bold text-center">Aam</h5>
                <button className='button_card mx-auto my-2' onClick={() => navigate("/buyicecream")} >Buy </button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 cardlarge">
              <img src={bs3} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title bold text-center">Chocolate Cone</h5>
                <button className='button_card mx-auto my-2' onClick={() => navigate("/buyicecream")} >Buy </button>
              </div>
            </div>
          </div>


          <div className="col">
            <div className="card h-100 cardlarge">
              <img src={bs2} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title bold text-center">Zulubar</h5>
                <button className='button_card mx-auto my-2' onClick={() => navigate("/buyicecream")} >Buy </button>
              </div>
            </div>
          </div>


        </div>

        <hr />

      </div>


      <div className="container text-center">

        <h3 className="text-center my-4" >know us BETTER</h3>

        <div className="row row-cols-1 row-cols-md-6 g-4 text-center justify-content-center">

          <div className="col">
            <div className="card h-100">
              <img src={ab1} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title bold text-center">About Us</h5>
                <p className="card-text mt-4 text-center">Savor the refreshing burst of fruity goodness in our Fruits ice cream flavor.</p>


              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src={ab2} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title bold text-center">Awards</h5>
                <p className="card-text mt-4 text-center">Savor the refreshing burst of fruity goodness in our Fruits ice cream flavor.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src={ab3} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title bold text-center">CSR</h5>
                <p className="card-text mt-4 text-center">Savor the refreshing burst of fruity goodness in our Fruits ice cream flavor.</p>
              </div>
            </div>
          </div>

        </div>
      </div>




      {/* ======================================================================================= */}


      <div className="landingfirstbox px-5 mt-5">
        <div className="row row-cols-1 row-cols-md-4 g-4 " style={{ "backgroundColor": "#e1e1e1" }}>
          <div className="col">
            <h5>CONTACT INFO</h5>
            <p> Address : HO: 135, Empress Mill Society, Shree Nagar, Nagpur- 441 206. <br />
              Phone Number: 078 - 2785505
            </p>
          </div>
          <div className="col">
            <h5>TWITTER FEED</h5>
            <a className="twitter-timeline" href="https://twitter.com/SweetScoops?ref_src=twsrc%5Etfw">@SweetScoops</a>
          </div>
          <div className="col">
            <h5>GET IN TOUCH</h5>
            <p>
              Join our mailing list to stay up to date and get notices about our new releases! <br />
              Email: <a href="mailto:info@SweetScoops.in">info@treaticecream.in</a>
            </p>
          </div>

          <div className="col">
            <h5>FOLLOW US</h5>
            <div className="row row-cols-2 row-cols-md-4 g-4 mt-0.5">
              <div className="col"><SocialIcon url="https://instagram.com" /></div>
              <div className="col"><SocialIcon url="https://facebook.com/" /></div>
              <div className="col"><SocialIcon url="https://discord.com/" /></div>
              <div className="col"><SocialIcon url="https://twitter.com/jaketrent" /></div>
            </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default LandingPage;
