export const isAuthenticated = (req, res, next) => {
  console.log(req.session);
    if(req.session.user){
      return next()
    }
    return res.status(401).json({
      success: false,
      msg: "Please Logged-In"
    })
};


