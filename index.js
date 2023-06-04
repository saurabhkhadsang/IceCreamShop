const express = require('express');
const mongoose = require("mongoose");
const bodyParses = require('body-parser');
const cors = require('cors')
const path = require("path");
const Razorpay = require('razorpay');

const app = express();
app.use(cors());
app.use(bodyParses.json());

// .env file connect
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });


let port = process.env.PORT;
if (port == null || port == "") {
  port = 9002;
}

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true },).then((res) => {
  console.log("Database connected");
})
  .catch(error => {
    console.log("Not  connected");
    console.log(error);
  });




const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: 'John Doe'
  },
  email: {
    type: String,
    required: true,
    default: 'example@example.com'
  },
  history: [{}]
});

const User = mongoose.model('User', userSchema);

app.post('/adduser', async (req, res) => {
  // console.log("add user");
  // console.log(req.body);
  // const { email, name } = req.body;
  let email = req.body.email;
  let name = req.body.given_name + ' ' + req.body.family_name;

  try {
    // Check if user with the given email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log("User already exists")
      return res.status(400).json({ error: 'User already exists' });
    }

    // User doesn't exist, create a new user
    const newUser = new User({
      name,
      email
    });

    // Save the new user to the database
    await newUser.save();
    console.log("User added successfully")
    return res.status(201).json({ message: 'User added successfully' });
  } catch (error) {
    console.log('Error adding user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/accoutndetail', async (req, res) => {
  console.log("accoutndetail");
  // console.log(req.body);
  // const { email, name } = req.body;
  let email = req.body.email;

  try {
    // Check if user with the given email already exists
    const existingUser = await User.findOne({ email });

    // console.log(existingUser);

    res.status(201).json(existingUser);
  } catch (error) {
    console.log('Error adding user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});



// This razorpayInstance will be used to
// access any resource from razorpay
const razorpayInstance = new Razorpay({
  // Replace with your key_id
  key_id: process.env.RAZORPAY_KEY_ID,
  // Replace with your key_secret
  key_secret: process.env.RAZORPAY_KEY_SECRET
});



// app.post('/createOrder', async (req, res) => {
//     console.log("gola")
//     const { email, amount, currency, receipt, notes } = req.body;

//     razorpayInstance.orders.create({ amount, currency, receipt, notes }, async (err, order) => {
//         if (!err) {

//             try {

//                 const foundUser = await User.findOne({ email });

//                 if (foundUser) {
//                     console.log("User Found hola")
//                     foundUser.history.push(order);
//                     await foundUser.save();
//                     res.json(order);
//                 }
//                 res.status(500).send('Error saving order in user history');
//             } catch (error) {
//                 res.status(500).json({ error: error});
//             }

//         } else {
//             res.status(500).send(err);
//         }
//     });
// });

app.post('/createOrder', async (req, res) => {
  const { email, amount, currency, receipt, notes } = req.body;

  razorpayInstance.orders.create({ amount, currency, receipt, notes }, async (err, order) => {
    if (!err) {
      try {
        const foundUser = await User.findOne({ email });

        if (foundUser) {
          foundUser.history.push(order);
          await foundUser.save();
          res.json(order);
        } else {
          res.status(500).send('User not found');
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } else {
      res.status(500).send(err);
    }
  });
});



app.post('/paymentSuccess', async (req, res) => {
  const { razorpay_order_id } = req.body;
  try {
    const foundUser = await User.findOne({ 'history.id': razorpay_order_id });
    if (foundUser) {
      const orderIndex = foundUser.history.findIndex((item) => item.id === razorpay_order_id);
      console.log("index");
      console.log(orderIndex);
      console.log(foundUser.history[orderIndex]);
      if (orderIndex !== -1) {
        foundUser.history[orderIndex].status = 'payment_successful';

        try {
          foundUser.markModified('history');
          await foundUser.save();
          console.log('User saved successfully');
        } catch (error) {
          console.log('Error saving user:', error);
        }
        res.status(200).json({ message: 'Payment status updated successfully' });
      } else {
        res.status(404).json({ error: 'Order not found' });
      }
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



app.post('/userdetail', async (req, res) => {
  let email = req.body;
  console.log("userdetail");
  console.log(email);
  try {
    const existingUser = await User.findOne({ email }); // Assuming you only have one user in the database
    res.json(existingUser);
  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).json({ error: 'Failed to retrieve user' });
  }
});




app.get('/', (req, res) => {
  res.send('Hello World! Sweet Scoops App !')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})