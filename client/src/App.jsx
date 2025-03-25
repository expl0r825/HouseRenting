import { Link } from 'react-router'
import { Routes, Route } from 'react-router'

import UserProvider from './providers/UserProvider'

import Header from './components/header/Header'
import AllHouses from './components/house/AllHouses'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import AddHouse from './components/house/addHouse'
import Logout from './components/auth/Logout'

import './App.css'


function App() {

    return (
        <UserProvider>
            <Header />

            <Routes>
                <Route path='/' element={<AllHouses />} />
                <Route path="/houses/add" element={<AddHouse />} />
                {/* <Route path="/houses/:houseId/rent" element={<GameDetails email={email} />} />
                <Route path="/houses/:houseId/edit" element={<GameEdit />} /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </UserProvider>
    )
}

export default App
