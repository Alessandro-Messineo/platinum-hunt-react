import { useEffect, useState } from "react"
import axios from "axios";
import GameCard from "../components/GameCard";

export default function GamePage() {

    const [games, setGames] = useState([]);

    function fectGames() {
        axios.get(import.meta.env.VITE_API_URL)
            .then((res) => setGames(res.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fectGames()
    }, [])


    return (
        <>
            <div className="container mt-4">
                <h1 className="mb-4 text-center display-4">Games Catalogue</h1>
                <div className="row row-cols-2 row-cols-md-4 g-3">
                    {games.map((game) => (
                        <div className="col" key={game.id}>
                            <GameCard game={game} />
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}