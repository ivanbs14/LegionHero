import { Routes, Route } from "react-router-dom";

import { Home } from '../pages/Home';
import { Hero } from '../pages/Hero';

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/hero/:ids" element={<Hero />}/>
        </Routes>
    )
}