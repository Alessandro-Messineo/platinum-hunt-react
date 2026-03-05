import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container justify-content-center">
                <Link
                    to="/games"
                    className="navbar-brand fw-bold"
                >
                    PlatinumHunt
                </Link>
            </div>
        </nav>
    )
}