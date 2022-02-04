const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const customerSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: false },
    last_name: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

customerSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  this.password = bcrypt.hashSync(this.password, 8);

  return next();
});

customerSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
