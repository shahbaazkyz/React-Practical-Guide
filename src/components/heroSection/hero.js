import "./hero.css";

const hero = () => {
    
    return (
        <div className="hero">
            <img src="./assets/images/hero.png" alt="" width="100%" />
            <div className="featured">
                <h1 className = "main">
                    Shahbaz Khan
                </h1>
                <h5 className = "title" >
                    WORDPRESS DEVELOPER
                </h5>

            <button className = "fBtn" > Download Resume </button>

           </div>
        </div>
    )
}

export default hero;