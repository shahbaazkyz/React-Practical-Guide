import "./Nav.css"

const navigation = () => {
    
    return (
        <div className="Nav">
            <div className="logo">
                <img src="./assets//images/logo.png" alt="" className="logoImg"  />
            </div>
            <div className="navItems">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
                </ul>
                </div>
        </div>

    );
}

export default navigation;