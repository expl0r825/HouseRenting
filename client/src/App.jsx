import { Link } from 'react-router'
import Header from './components/header/Header'
import { Routes, Route } from 'react-router'
import './App.css'
import AllHouses from './components/house/AllHouses'


function App() {

    return (
        <>
            <Header />

            <AllHouses />

            {/* <Routes>
                                <Route index element={<h1>Hi</h1>} />
                                <Route path="/houses" element={<AllHouses />} />
                                <Route path="/games/create" element={<GameCreate />} />
                                <Route path="/games/:gameId/details" element={<GameDetails email={email} />} />
                                <Route path="/games/:gameId/edit" element={<GameEdit />} />
                                <Route path="/login" element={<Login onLogin={userLoginHandler} />} />
                                <Route path="/register" element={<Register />} />
                            </Routes> */}
        </>
    )
}

export default App
