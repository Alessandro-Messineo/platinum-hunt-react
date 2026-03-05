import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"

export default function DetailGamePage() {
    const { id } = useParams()
    const [game, setGame] = useState(null)



    useEffect(() => {
        function fetchGame() {
            axios.get(import.meta.env.VITE_API_URL + "/games/" + id)
                .then((res) => setGame(res.data))
                .catch(error => console.log(error))
        }
        fetchGame()
    }, [id])

    if (!game) return <div className="container mt-4">Loading...</div>

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3">
                    <img src={game.img || "https://placehold.co/300x330?text=No+Image"} alt={game.name} className="img-fluid rounded shadow" />
                </div>
                <div className="col-md-9">
                    <h1 className="display-5 fw-bold">{game.name}</h1>
                    <hr />
                    <div className="row mt-3">
                        <div className="col-md-4">
                            <p className="text-muted mb-1">Difficulty</p>
                            <p className="fs-5 fw-semibold">{game.difficulty}/10</p>
                        </div>
                        <div className="col-md-4">
                            <p className="text-muted mb-1">Estimated Hours</p>
                            <p className="fs-5 fw-semibold">{game.hours}h</p>
                        </div>
                        <div className="col-md-4">
                            <p className="text-muted mb-1">Playthroughs</p>
                            <p className="fs-5 fw-semibold">{game.playthrough}</p>
                        </div>
                    </div>
                    <hr />
                    <Link to="/games" className="btn btn-secondary mb-4">Back to Games</Link>
                </div>
            </div>

            <div className="mt-5 table-responsive">
                <h2 className="mb-3 fw-bold">Trophies</h2>
                {!game.trophies || game.trophies.length === 0 ?
                    (
                        <div className="alert alert-warning">No trophies available for this game.</div>
                    )
                    :
                    (
                        <table className="table table-striped table-hover align-middle">
                            <thead className="table-dark">
                                <tr>
                                    <th>Grade</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th className="text-center">Rarity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {game.trophies.map((trophy) => (
                                    <tr key={trophy.id}>
                                        <td>
                                            <img src={trophy.trophyGrade.img} alt="grade" width="30" height="30" />
                                        </td>
                                        <td>{trophy.name}</td>
                                        <td>{trophy.description}</td>
                                        <td className="text-center">{trophy.percentage}%</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
            </div>
        </div>
    )
}