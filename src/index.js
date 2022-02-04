const express = require("express");
const app = express();
app.use(express.json());


const productController = require('./controllers/product.controller');
const cartController = require('./controllers/cart.controller');

const quiz1Controller = require('./controllers/quiz1.controller');
const quiz2Controller = require('./controllers/quiz2.controller');

app.use('/product', productController);
app.use('/cart',cartController );

app.use("/quiz1",quiz1Controller);
app.use("/quiz2",quiz2Controller);


const passport = require("./configs/passport");

const Customer = require("./models/customer.model");

const { register, login } = require("./controllers/auth.controller");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  return res.render("home/vedix_body");
});
app.post("/register", register(Customer));
app.post("/login", login(Customer));

app.get("/register", (req, res) => {
  return res.render("customers/signup", { err: "" });
});

app.get("/login", (req, res) => {
  return res.render("customers/login", { err: "" });
});
app.get("/checkout", (req, res) => {
  return res.render("checkout/checkout");
});
app.use(passport.initialize());

passport.serializeUser(function (customer, callback) {
  callback(null, customer);
});

passport.deserializeUser(function (customer, callback) {
  callback(null, customer);
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/google/failure",
  }),
  (req, res) => {
    // res
    //   .status(201)
    //   .json({ customer: req.user.customer, token: req.user.token });
    res.redirect("/");
  }
);

app.get("/auth/google/success", (req, res) => {
  return res.send("Success");
});

app.get("/auth/google/failure", (req, res) => {
  return res.send("Failure");
});

module.exports = app;
