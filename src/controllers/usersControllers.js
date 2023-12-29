const usersController = {
  usuario: (req, res) => {
    res.render("usuario");
  },
  registro: (req, res) => {
    res.render("registro");
  },
  userAdmin: (req,res)=>{
    res.render("admin/userAdmin")
  }
};
module.exports = usersController;
