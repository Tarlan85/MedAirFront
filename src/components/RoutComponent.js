import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import useFetchDatas from "../hooks/useFetchDatas";

const Home = React.lazy(() => import("../pages/Home"));
const Search = React.lazy(() => import("../pages/Search"));
const Profile = React.lazy(() => import("../pages/Profile"));
const Managers = React.lazy(() => import("../pages/Managers/Managers"));

const ReactComponent = () => {

    useFetchDatas();
    
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/managers" element={<Managers />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </Suspense>
        </>
    );
};
export default ReactComponent;
