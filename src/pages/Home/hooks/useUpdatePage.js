import moment from "moment";
import React, { useEffect, useState } from "react";

const useUpdatePage = ({ getDataTable }) => {
    const [isChangeDataTable, setIsChangeDataTable] = useState(false);

    const updatePage = () => {
        getDataTable(moment().format("YYYY-MM-DD 00:00:00"));
        setIsChangeDataTable(true);
    };

    useEffect(() => {
        if (isChangeDataTable) {
            setIsChangeDataTable(false);
        }
    }, [isChangeDataTable]);

    return { isChangeDataTable, updatePage };
};

export default useUpdatePage;
