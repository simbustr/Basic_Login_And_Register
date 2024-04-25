const CustomerModel = require("../model/customer");
const jwt = require("jsonwebtoken");

module.exports.login = async (req, res) => {

    const { Email, Password } = req.body;   



  try {
    // Check if email and password are provided
    if (!Email || !Password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const customer = await CustomerModel.findOne({ Email, Password });

    if (!customer) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    

    // If customer found, generate JWT token
    // const token = jwt.sign({ customerId: customer._id }, "your_secret_key", {
    //   expiresIn: "1h",
    // });

    // Return token to the client
    res.status(200).json({ customer });
    console.res.status(200)("login Succesfully");
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
