const controller = {
  home : (req,res) => {
    res.render("index")
  },
  show : (req,res) => {
    res.status(200).json(req.body);
  }
}

export default controller
