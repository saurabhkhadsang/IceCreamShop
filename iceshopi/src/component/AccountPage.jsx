import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const AccountPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [userData, setUserData] = useState(null);

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
      <h1>Welcome to AccountPage of Ice Cream Shop</h1>

      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}

      {userData && (
        <div>
          <h3>Order History</h3>
          <table>
            <thead>
              <tr>
                {/* <th>Order ID</th> */}
                <th>Item</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {userData.history.map((order) => (
                <tr key={order.id}>
                  <td>{order.notes.item}</td>
                  <td>{order.notes.quantity}</td>
                  <td>{(order.amount)/100}</td>
                  <td>{order.status}</td>
                  <td>{new Date(order.created_at * 1000).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
