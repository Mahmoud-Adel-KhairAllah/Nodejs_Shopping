const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("../config");
const router = express.Router();
const User = require("../model/user.model");

router.route("/").post((req, res) => {
  console.log("login ", req.body);
  User.findOne(
    {
      mobileNo: req.body.mobileNo,
    },
    (errro, result) => {
      if (errro) {
        return res.status(500).json({ msg: "somthing error " });
      }

      if (result !== null) {
        //login
        sendToken(req.body.mobileNo, "login succesful", res);

        console.log("login");
      } else {
        console.log("register11");
        res.json({ msg: "register" });
      }
    }
  );
});

router.route("/register").post((req, res) => {
  console.log("register", ...req.body);
  const user = new User({
    ...req.body,
  });
  user
    .save()
    .then(() => {
      sendToken(req.body.mobileNo, "register succesful", res);
    })
    .catch( (err) => {
      res.status(500).json({ token: err.body, msg: "55" });
    });
  console.log("register");
});

const sendToken = (mobileNo, msg, res) => {
  let token = jwt.sign({ mobileNo: mobileNo }, config.key);
  res.json({ token: token, msg: msg });
};

module.exports = router;
