import React from 'react'
import { Navbar } from '../../Ui/NavBar'
import Marvel from '../pages/Marvel'
import Dc from '../pages/Dc'
import LoginPage from '../../Auth/pages/LoginPage'
import { Route, Routes, Navigate } from 'react-router-dom'
import Hero from "../pages/Hero"
import Search from "../pages/Search"
import AllHeroes from '../pages/AllHeroes'


const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="marvel" element={<Marvel />} />
                <Route path="dc" element={<Dc />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="search" element={<Search />} />
                <Route path="hero/:id" element={<Hero />} />
                <Route path="/" element={<AllHeroes />} />
                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
        </>
    )
}

export default HeroesRoutes