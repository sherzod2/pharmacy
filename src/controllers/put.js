module.exports = (req, res) => {
  console.log(req.query);
  console.log("working");
  console.log(req.body);
  //   res.redirect("/");
  res.send("OK");
};
