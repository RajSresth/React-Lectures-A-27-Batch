import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () =>{
    return <div className="header" style={{height:"100px", display:"flex",alignItems:"center"}}>
            <Logo/>
            <Navbar></Navbar>
    </div>
}

export default Header;


