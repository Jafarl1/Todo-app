import "./navbar.styles.scss"

export default function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <i className="fa-solid fa-plus"></i>
                </li>
                <li>
                    <i className="fa-solid fa-info"></i>
                </li>
                <li>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </li>
            </ul>
        </div>
    )
}
