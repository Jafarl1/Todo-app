/* eslint-disable react/prop-types */
import "./navbar.styles.scss"

export default function Navbar({ setNavbarState }) {

    const handleNavbarState = (action) => {
        setNavbarState(action)
    }

    return (
        <div className="navbar">
            <ul>
                <li onClick={() => handleNavbarState('add')}>
                    <i className="fa-solid fa-plus"></i>
                </li>
                <li onClick={() => handleNavbarState('info')}>
                    <i className="fa-solid fa-info"></i>
                </li>
                <li onClick={() => handleNavbarState('search')}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </li>
            </ul>
        </div>
    )
}
