const usersController = {
  usuario: (req, res) => {
    res.render("usuario");
  },
  registro: (req, res) => {
    res.render("registro");
  },
};
module.exports = usersController;
