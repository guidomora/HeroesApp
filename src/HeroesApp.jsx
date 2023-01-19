import React from 'react'
import AuthProvider from "./Auth/pages/context/AuthProvider"
import AppRouter from './Router/AppRouter'

const HeroesApp = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}

export default HeroesApp