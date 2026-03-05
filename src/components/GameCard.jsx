import { Link } from "react-router-dom"
import './GameCard.css'

export default function GameCard({ game }) {

    return (
        <div className="card h-100 shadow game-card">
            <Link to={`/games/${game.id}`} className="game-card-link">
                <img
                    src={game.img || "https://placehold.co/300x330?text=No+Image"}
                    alt={game.name}
                    className="card-img-top game-card-img"
                />
                <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{game.name}</h5>
                </div>
            </Link>
        </div>
    )
}