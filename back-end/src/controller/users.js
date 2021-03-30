const knex = require("../database/connection");
class UserController {
  async signup(req, res) {
    try {
      const selectExists = await knex("users")
        .where("mail", req.body.mail)
        .first();
      if (selectExists) {
        return res.status(400).json({ status: "Emails has exists" });
      }

      const createUser = await knex("users")
        .insert({
          mail: req.body.mail,
          name: req.body.name,
          password: req.body.password,
        })
        .then(function (resp) {
          return res.status(200).json({ status: "Success create account" });
        });
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async signin(req, res) {
    try {
      const selectUser = await knex("users")
        .where("mail", req.body.mail)
        .select("password")
        .then(function (resp) {
          if (!resp[0] || !resp) {
            return res
              .status(400)
              .json({ status: "Email or password invalid" });
          }
          if (req.body.password != resp[0].password) {
            return res
              .status(400)
              .json({ status: "Email or password invalid" });
          }
          return res.status(200).json({ status: "ok" });
        });
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

module.exports = new UserController();
