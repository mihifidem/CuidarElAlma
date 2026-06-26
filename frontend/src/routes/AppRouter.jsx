import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {

    return <h1>Inicio</h1>

}

export default function AppRouter() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />

            </Routes>

        </BrowserRouter>

    )

}