import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from "../Auth/pages/LoginPage"
import HeroesRoutes from '../Heroes/routes/HeroesRoutes'

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="/*" element={<HeroesRoutes />} />
            </Routes>
        </>
    )
}

export default AppRouter