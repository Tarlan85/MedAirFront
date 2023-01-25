import React, { useState, createContext, useContext } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {

    const [activeKey, setActiveKey] = useState()
    const [canvasData, setCanvasData] = useState({})

    const values = {
        activeKey, setActiveKey,
        canvasData, setCanvasData,
    }
    return (
        <ProfileContext.Provider value={values}>
            {children}
        </ProfileContext.Provider>
    );
}

export const useProfileContext = () => useContext(ProfileContext);