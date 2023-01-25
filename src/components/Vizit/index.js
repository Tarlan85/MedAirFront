import React, { memo } from "react";
import VisitContent from "./VisitContent";
import VisitTable from "./VisitTable";
import {VisitProvider} from "./context";

const Vizit = () => {
    return (
        <VisitProvider>
            <VisitContent />
            <VisitTable />
        </VisitProvider>
    );
};

export default memo(Vizit);
