import { FaBookReader } from "react-icons/fa";

const Navbar = () => {

    return (
        <div className="navbar box">
            <div className="navbar-content">
                <a href="#" onClick={() => {}}>
                    <div className="navbar-icon">
                        <FaBookReader/>
                    </div>
                    Study with me
                </a>
            </div>
        
        </div>
    )
}

export default Navbar;