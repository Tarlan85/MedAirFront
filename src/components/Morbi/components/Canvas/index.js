import React from "react";
import CanvasComponent from "./CanvasComponent";
import { CanvasProvider } from "./context";

const Index = (props) => {
    return (
        <>
            <CanvasProvider>
                <CanvasComponent {...props} />
            </CanvasProvider>
        </>
    );
};

export default Index;
