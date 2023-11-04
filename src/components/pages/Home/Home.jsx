import "./_home.scss"
import { useState } from "react"
import { Link } from "@tanstack/react-router"
import reactLogo from "@assets/react.svg"
import viteLogo from "@assets/vite.svg"

const Home = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo vite" alt="Vite logo" />
                </a>
                <Link to="https://react.dev" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </Link>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button className="card-btn" onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default Home;