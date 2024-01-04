


module.exports.getUserDetails=async(req, res) => {
    // Your code to fetch users from a database or any other source
    // Send the response as JSON
    console.log("getUserDetails");
    const userObj={id: 101, name: "Shivam Tiwari", address: "Ayodhya"};
    res.json(userObj);;
  };



  module.exports.register =async(req, res) => {
    const newUser = req.body;
    // Your code to save the new user to the database or any other source
    // Send a response indicating success or failure
    res.json({ message: 'User created successfully' });
  };