import { useState } from "react";

const Navbar = () => {
  const [isLogin, setisLogin] = useState(false); // const isLogin = false
  

  const handleLogin = ()=> setisLogin(!isLogin);
  const handleLogout = ()=> setisLogin(!isLogin);


  return (
    <div className="navbar">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Career</a>
      <a href="#">Contact</a>
      { isLogin ?
         <button onClick={handleLogout} className="logoutBtn">Logout</button> : 
         <button onClick={handleLogin} className="loginBtn">Login</button>
      }        
    </div>
  );
};

export default Navbar;
