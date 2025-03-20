import { Link } from 'react-router'
import Header from './components/header/Header'
import { Routes, Route } from 'react-router'
import './App.css'
import AllHouses from './components/house/AllHouses'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import AddHouse from './components/house/addHouse'



function App() {

    return (
        <>
            <Header />

            <Routes>
                <Route path='/' element={<AllHouses />} />
                <Route path="/houses/add" element={<AddHouse />} />
                {/* <Route path="/houses/:houseId/rent" element={<GameDetails email={email} />} />
                <Route path="/houses/:houseId/edit" element={<GameEdit />} /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    )
}

export default App
