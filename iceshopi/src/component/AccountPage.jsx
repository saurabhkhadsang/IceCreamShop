import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const AccountPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [userData, setUserData] = useState(null);

  // const [items, setItems] = useState([]);
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
      navigate("/",);
      // window.location.replace('/');
      return () => { }
    } 
  }, [isAuthenticated, isLoading]);




  useEffect(() => {
    if (isAuthenticated) {
      // Make API call to fetch user data
      const fetchData = async () => {
        try {
          const response = await axios.post('http://localhost:9002/accoutndetail', { email: user.email });
          const sortedHistory = response.data.history.sort((a, b) => b.created_at - a.created_at);
          setUserData({ ...response.data, history: sortedHistory });
          console.log("response.data");
          console.log(response.data);
          // setUserData(response.data);
        } catch (error) {
          console.log('Error fetching user data:', error);
        }
      };

      fetchData();
    }
  }, [isAuthenticated, user]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>

      {isAuthenticated && (
        <div className="container mt-3">
          <div className="row justify-content-center p-4" style={{ "background-color": "#e1e1e1" }}>
            <div className=" col-auto d-flex align-items-center">
              <img src={user.picture} alt={user.name} className="rounded-circle" />
            </div>
            <div className=" col-auto d-flex align-items-center">
              <div>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      )}





      <div className="container my-3" style={{ backgroundColor: "#e1e1e1" }}>
        <h3 className="text-center m2-4 py-4">History</h3>

        <div className="row row-cols-1 row-cols-md-4 g-4 pb-4">
          {userData &&
            userData.history.map((order) => (
              <div className="col" key={order.id}>
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{order.notes.item} | ₹ {(order.amount) / 100 / order.notes.quantity}</h5>
                    <h5>Quan: {order.notes.quantity} | Total: ₹ {(order.amount) / 100}</h5>
                    <h5>Status : <span className={`status ${order.status === "created" ? "unsuccessful" : "successful"}`}>
                      {order.status === "created" ? "Unsuccessful" : "Successful"}
                    </span>
                    </h5>
                    <h5>Date: {new Date(order.created_at * 1000).toLocaleString()}</h5>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>








    </div>
  );
};

export default AccountPage;
