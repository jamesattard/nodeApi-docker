const User = require("../models/User");
const bodyLogger = require("../middlewares/bodyLogger");

module.exports = app => {
  app.get("/api/users", bodyLogger, async (req, res, next) => {
    try {
      const users = await User.find({});
      res.send(users);
    } catch (err) {
      next(err);
    }
  });

  app.post("/api/users", bodyLogger, async (req, res, next) => {
    const { username, name, surname } = req.body;
    const user = {
      username,
      name,
      surname
    };

    try {
      const newUser = await User.create(user);
      res.send(newUser);
    } catch (err) {
      next(err);
    }
  });

  app.get("/api/users/:username", bodyLogger, async (req, res, next) => {
    try {
      const user = await User.findOne({ username: req.params.username });
      res.send(user);
    } catch (err) {
      next(err);
    }
  });

  app.put("/api/users/:username", bodyLogger, async (req, res, next) => {
    try {
      await User.findOneAndUpdate({ username: req.params.username }, req.body);
      const user = await User.findOne({ username: req.params.username });
      res.send(user);
    } catch (err) {
      next(err);
    }
  });

  app.delete("/api/users/:username", bodyLogger, async (req, res, next) => {
    try {
      const user = await User.findOneAndRemove({
        username: req.params.username
      });
      res.send(user);
    } catch (err) {
      next(err);
    }
  });
};
