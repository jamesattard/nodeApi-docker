module.exports = (req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    console.log(req.body);
    next();
  } else {
    next();
  }
};
