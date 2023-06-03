import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios";

const IceCreamBuyPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   if (isLoading) {
  //     return <div>Loading...</div>;
  //   }

  //   if (!isAuthenticated) {
  //     alert('Please login First');
  //     window.location.replace('/');
  //     return;
  //   } else {
  //     register();
  //   }
  // }, [isAuthenticated, isLoading]);

  function register() {
    console.log("IN reg");
    axios
      .post('http://localhost:9002/adduser', user)
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
        name: "Item 1",
        price: 10,
        image: "https://example.com/item1.jpg",
        quantity: 0,
      },
      {
        name: "Item 2",
        price: 15,
        image: "https://example.com/item2.jpg",
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
  //     .post('http://localhost:9002/createOrder', orderData)
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
      .post('http://localhost:9002/createOrder', orderData)
      .then(response => {
        const order = response.data;
        // Redirect the user to the Razorpay checkout page
        const options = {
          key: 'rzp_test_l3FdVIXIj8SUnV',
          amount: order.amount,
          currency: order.currency,
          name: 'Dummy Academy',
          description: `Pay & Checkout: ${order.notes.item}`,
          order_id: order.id,
          handler: function (response) {
            console.log(response);
            alert('Payment Succeeded');

            const paymentData = {
              razorpay_order_id: response.razorpay_order_id
            };
            axios
              .post('http://localhost:9002/paymentSuccess', paymentData)
              .then(response => {
                console.log(response.data.message);
              })
              .catch(error => {
                console.error(error);
              });
            // Perform any necessary action after successful payment
          },
          prefill: {
            contact: '9876543210',
            name: 'Twinkle Sharma',
            email: 'smtwinkle@gmail.com',
          },
          notes: {
            description: 'Best Course for SDE placements',
            language: 'Available in 4 major Languages JAVA, C/C++, Python, JavaScript',
            access: 'This course has Lifetime Access',
          },
          theme: {
            color: '#2300a3',
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
      <h2>Ice Cream Buy Page</h2>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price * item.quantity}</p>
            <img src={item.image} alt={item.name} />
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => increaseQuantity(index)}>Increase</button>
            <button onClick={() => decreaseQuantity(index)}>Decrease</button>
            <button onClick={() => handleBuy(item)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IceCreamBuyPage;
