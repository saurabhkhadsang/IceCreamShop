
// Working Code
// app.post('/createOrder', (req, res) => {
//     console.log("Creta orede")
//     console.log(req.body);

//     const { amount, currency, receipt, notes } = req.body;

//     razorpayInstance.orders.create({ amount, currency, receipt, notes }, (err, order) => {
//         if (!err) {
//             res.json(order);
//         } else {
//             res.send(err);
//         }
//     });
// });


const handleBuy = (item) => {
    // ...
    const options = {
      // ...
      handler: function (response) {
        
      },
      // ...
    };
    // ...
  };
  