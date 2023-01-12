import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Marvel from "../Heroes/pages/Marvel"
import Dc from '../Heroes/pages/Dc'
import LoginPage from "../Auth/pages/LoginPage"

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="marvel" elemment={<Marvel />}/>
                <Route path="dc" elemment={<Dc />} />
                <Route path="login" elemment={<LoginPage />} />
                <Route path="/" elemment={<Navigate to= "/marvel"/>} />
            </Routes>
        </>
    )
}

export default AppRouter