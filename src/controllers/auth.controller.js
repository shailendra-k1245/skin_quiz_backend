require("dotenv").config();

const jwt = require("jsonwebtoken");

// const Customer = require("../models/customer.model");

const newToken = (customer) => {
  return jwt.sign(
    { customer: customer, exp: 60 * 5 },
    process.env.JWT_SECRET_KEY
  );
};

const register = (Customer, err) => async (req, res) => {
  try {
    let customer = await Customer.findOne({ email: req.body.email })
      .lean()
      .exec();

    if (customer) {
      return res.render("customers/signup", {
        err: "Email is already registered",
      });
      // return res.status(400).send("Email is already registered");
    }

    customer = await Customer.create(req.body);

    const token = newToken(customer);

    // return res.status(201).send({ customer, token });
    return res.redirect("/login");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const login = (Customer) => async (req, res) => {
  try {
    let customer = await Customer.findOne({ email: req.body.email });
    if (!customer) {
      return res.render("customers/login", {
        err: "Email is incorrect",
      });
      // return res.status(400).send("Either email or password is incorrect");
    }

    const match = customer.checkPassword(req.body.password);
    if (!match) {
      return res.render("customers/login", {
        err: "Password is incorrect",
      });
      // return res.status(400).send("Either email or password is incorrect");
    }

    const token = newToken(customer);
    // return res.status(201).send({ customer, token });
    res.redirect("/");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { register, login, newToken };
