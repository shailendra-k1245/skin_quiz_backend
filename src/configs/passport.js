require("dotenv").config();

const { v4: uuidv4 } = require("uuid");

const passport = require("passport");

const Customer = require("../models/customer.model");

const { newToken } = require("../controllers/auth.controller");

const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8787/auth/google/callback",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      let customer = await Customer.findOne({ email: profile?._json?.email })
        .lean()
        .exec();

      if (!customer) {
        nameArr = profile?._json?.name.split(" ");

        let first_name = "",
          last_name;

        for (let i = 0; i < nameArr.length - 1; i++) {
          console.log(nameArr[i]);
          first_name = first_name + nameArr[i] + " ";
        }

        first_name = first_name.trim();
        last_name = nameArr[nameArr.length - 1];

        customer = await Customer.create({
          first_name: first_name,
          last_name: last_name,
          email: profile?._json?.email,
          password: uuidv4(),
        });
      }

      const token = newToken(customer);

      // user: {customer, token}
      return done(null, { customer: customer, token: token });
    }
  )
);

module.exports = passport;
