import { Link } from "react-router-dom"
import './ErrorPage.css'

export default function ErrorPage() {
    return (
        <div
            className="d-flex flex-column justify-content-center align-items-center text-center full-page"
        >
            <h1 className="display-1 fw-bold">404</h1>

            <h3 className="mb-3">Page not found</h3>

            <p className="text-muted mb-4">
                The page you are looking for does not exist.
            </p>

            <Link to="/games" className="btn btn-dark">
                Back to Home
            </Link>
        </div>
    )
}