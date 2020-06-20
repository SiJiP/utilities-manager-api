const sql = require("./db.js");

const User = function (customer) {
  this.firstName = customer.firstName;
  this.lastName = customer.lastName;
  this.email = customer.email;
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO Users set ?", newUser, (err, res) => {
    if (err) {
      console.log("error", err);
      result(err, null);
    }
  });
};
