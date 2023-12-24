import { Link, useLocation } from "react-router-dom";

export default function Navbar(){
    const location = useLocation();
    return(
        <>
             <nav className="custom-navbar " style={location?.pathname === "/" ? {} : {backgroundColor:"white"}}>
                <div className="container">
                <Link className="logo" to="#" style={{color: "#695aa6"}}>
                    Meyawo
                </Link>
                <ul className="nav active show">
                    <li className="item" >
                    <Link className="link" to="/" style={{color: "#695aa6"}}>
                        Home
                    </Link>
                    </li>
                    <li className="item">
                    <Link className="link" to="/about" style={{color: "#695aa6"}}>
                        About
                    </Link>
                    </li>
                    <li className="item">
                    <Link className="link" to="/services" style={{color: "#695aa6"}}>
                        Service
                    </Link>
                    </li>
                    <li className="item" >
                    <Link className="link" to="/portfolio" style={{color: "#695aa6"}}>
                        Portfolio
                    </Link>
                    </li>
                </ul>
                {/* <Link
                    to="javascript:void(0)"
                    id="nav-toggle"
                    className="hamburger hamburger--elastic"
                >
                    <div className="hamburger-box">
                    <div className="hamburger-inner" />
                    </div>
                </Link> */}
                </div>
            </nav>
        </>
    )
}