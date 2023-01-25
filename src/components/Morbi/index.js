import React from "react";
import HeaderMorby from "./components/HeaderMorby";
import MorbyContent from "./components/MorbyContent";
import { MorbyProvider } from "./context";
import Canvases from "./components/Canvases";
import MorbyTable from "./components/MorbyTable";
import Buttons from "./components/Buttons";

const index = () => {
    return (
        <MorbyProvider>
            <HeaderMorby />
            <MorbyContent />
            <Buttons />
            <MorbyTable />
            <Canvases />
        </MorbyProvider>
    );
};

export default index;
