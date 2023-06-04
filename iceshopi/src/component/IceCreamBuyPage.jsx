import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios";

import './IceCreamBuyPage.css'

import item1 from '../img/item1.jpg';
import item2 from '../img/item2.jpg';
import item3 from '../img/item3.jpg';
import item4 from '../img/item4.jpg';
import item5 from '../img/item5.jpg';
import item6 from '../img/item6.jpg';
import item7 from '../img/item7.jpg';
import item8 from '../img/item8.jpg';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const IceCreamBuyPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      return () => { }
    }

    if (!isAuthenticated) {

      toast.warn('Please Login First', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000
      });

      navigate("/", );
      // window.location.replace('/');
      return () => { }
    } else {
      register();
    }
  }, [isAuthenticated, isLoading]);

  function register() {
    console.log("IN reg");
    axios
      .post('https://sweetscoops.onrender.com/adduser', user)
      .then(response => {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  // register();

  useEffect(() => {
    // Populate the items array with item data
    const itemData = [
      {
        name: "Sundae",
        price: 100,
        image: item1,
        quantity: 0,
      },
      {
        name: "Chocolate ice cream",
        price: 50,
        image: item2,
        quantity: 0,
      },
      {
        name: "Vanilla ice cream",
        price: 65,
        image: item3,
        quantity: 0,
      },
      {
        name: "Chocobar",
        price: 40,
        image: item4,
        quantity: 0,
      },
      {
        name: "Kulfi",
        price: 30,
        image: item5,
        quantity: 0,
      },
      {
        name: "Stir-fried ice cream",
        price: 150,
        image: item6,
        quantity: 0,
      },
      {
        name: "Ice cream cup cakes",
        price: 50,
        image: item7,
        quantity: 0,
      },
      {
        name: "Strawberry sherbet",
        price: 50,
        image: item8,
        quantity: 0,
      },

      // Add more items as needed
    ];

    setItems(itemData);
  }, []);

  const increaseQuantity = (index) => {
    setItems(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems[index].quantity += 1;
      return updatedItems;
    });
  };

  const decreaseQuantity = (index) => {
    setItems(prevItems => {
      const updatedItems = [...prevItems];
      if (updatedItems[index].quantity > 0) {
        updatedItems[index].quantity -= 1;
      }
      return updatedItems;
    });
  };

  // const handleBuy = (item) => {
  //   // Generate a random 8-digit ID
  //   const orderId = Math.floor(10000000 + Math.random() * 90000000);


  //   const notes = `Item: ${item.name}, Quantity: ${item.quantity}`;

  //   const orderData = {
  //     email: user.email,
  //     amount: item.price * item.quantity * 100,
  //     currency: 'INR', // Change the currency as per your requirement
  //     receipt: `order_${orderId}`,
  //     // notes: JSON.stringify(notes),
  //     notes: {
  //       item: item.name,
  //       quantity: item.quantity
  //     },
  //   };

  //   axios
  //     .post('https://sweetscoops.onrender.com/createOrder', orderData)
  //     .then(response => {
  //       const order = response.data;
  //       // Perform any necessary action with the order data (e.g., save it in user history)
  //       console.log('Order created:', order);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };




  const handleBuy = (item) => {
    // Generate a random 8-digit ID
    const orderId = Math.floor(10000000 + Math.random() * 90000000);

    const orderData = {
      email: user.email,
      amount: item.price * item.quantity * 100,
      currency: 'INR',
      receipt: `order_${orderId}`,
      notes: {
        item: item.name,
        quantity: item.quantity
      },
    };

    axios
      .post('https://sweetscoops.onrender.com/createOrder', orderData)
      .then(response => {
        const order = response.data;
        // Redirect the user to the Razorpay checkout page
        const options = {
          key: 'rzp_test_l3FdVIXIj8SUnV',
          amount: order.amount,
          currency: order.currency,
          name: 'Sweet Scoops',
          description: `Pay & Checkout: ${order.notes.item}`,
          order_id: order.id,
          handler: function (response) {
            console.log(response);
            // alert('Payment Succeeded');
            toast.success('Payment Succeeded', {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 1500
            });
            toast('Order successfully | Buy More', {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 1500
            });

            const paymentData = {
              razorpay_order_id: response.razorpay_order_id
            };
            axios
              .post('https://sweetscoops.onrender.com/paymentSuccess', paymentData)
              .then(response => {
                console.log(response.data.message);
              })
              .catch(error => {
                console.error(error);
              });
            // Perform any necessary action after successful payment
          },
          // prefill: {
          //   contact: '9876543210',
          //   name: 'Twinkle Sharma',
          //   email: 'smtwinkle@gmail.com',
          // },
          // notes: {
          //   description: 'Best Course for SDE placements',
          //   language: 'Available in 4 major Languages JAVA, C/C++, Python, JavaScript',
          //   access: 'This course has Lifetime Access',
          // },
          theme: {
            color: '#ff55a3',
          },
        };
        const razorpayObject = new window.Razorpay(options);
        razorpayObject.open();
      })
      .catch(function (error) {
        console.error(error);
      });
  };


  return (
    <div>


      <div className="container">
        <h3 className="text-center my-4" >Buy Ice Cream</h3>

        <div className="row row-cols-1 row-cols-md-4 g-4">


          {items.map((item, index) => (
            <div className="col" key={index}>
              <div className="card h-100">
                <img src={item.image} className="card-img-top p-2 rounded" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name} | ₹ {item.price}</h5>
                  <h5>Quan :  {item.quantity} | Total : ₹ {item.price * item.quantity} </h5>
                  <div className="row">
                    <div className="col">
                      <div>
                        <button className="mx-auto my-2 button-left" onClick={() => decreaseQuantity(index)}>-</button>
                        <button className="mx-auto my-2 button-right" onClick={() => increaseQuantity(index)}>+</button>
                      </div>
                    </div>
                    <div className="col">
                      <button className='button_buy_page mx-auto my-2' onClick={() => handleBuy(item)} >Buy </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}


        </div>
      </div>

      <div className='m-4' ></div>

    </div>
  );
};

export default IceCreamBuyPage;
