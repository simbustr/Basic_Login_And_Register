const express = require("express");
const CustomerModel = require("../model/customer");

module.exports.getAllCustomer = async (req, res) => {
  try {
    const user = await CustomerModel.find();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports.addCustomer = async (req, res) => {
  const { Full_Name, Password, Email } = req.body;
  try {
    const newUser = new CustomerModel({
      Full_Name,
      Password,
      Email
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports.deleteCustomer = async (req, res) => {
  try {
    const deleteCustomer = await CustomerModel.findByIdAndDelete(id);

    console.log(deleteCustomer, "final");

    if (!deleteCustomer) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "deleteCustomer deleted successfully",
      deleteCustomer,
    });
  } catch (error) {}
};
