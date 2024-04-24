const mongoose = require("mongoose");
const schema = mongoose.Schema;

const customerSchema = new schema({
  id: {
    type: Number,
    require: true,
  },
  Full_Name: {
    type: String,
  },
  Password: {
    type: String,
  },
  Email: {
    type: String,
    unique: true
},
});

module.exports = mongoose.model("Customer", customerSchema);
