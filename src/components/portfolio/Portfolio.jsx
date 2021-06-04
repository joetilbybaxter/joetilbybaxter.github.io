import "./portfolio.scss"

export default function Portfolio() {
    return(
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li>Featured</li>
                <li>Web App</li>
                <li>Mobile App</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="" alt="" />
                    <h3>Book Club App</h3>
                </div>
            </div>
        </div>
    )
}