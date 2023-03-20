import React from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Layout from './components/Layout/Layout';
import Home from './Home';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/auth/login" element={<Login />} />
            </Route>
        </Routes>
    )
}

export default App