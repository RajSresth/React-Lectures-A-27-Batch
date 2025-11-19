import { useState } from "react";

const Navbar = () => {
  const [isLogin, setisLogin] = useState(false); // const isLogin = false
  const task = () => setisLogin(!isLogin);
  console.log("navbar:Render");

  return (
    <div className="navbar">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Career</a>
      <a href="#">Contact</a>
      <button className={isLogin ? "logoutBtn" : "loginBtn"} onClick={task}>
        {isLogin ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
