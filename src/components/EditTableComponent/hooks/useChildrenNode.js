import { Form, Input } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../../../context/context";
import EditInputType from "../components/EditInputType";
import InputComponent from "../components/InputComponent";
import UseTabs from "../components/UseTabs";

const useChildrenNode = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    setShowSaveButton,
    form,
}) => {
    const [editing, setEditing] = useState(false);
    const { managersList, isChangeTable, setIsChangeTable, isAddNewRow } =
        useGlobalContext();

    const inputRef = useRef(null);
    useEffect(() => {
        if (isAddNewRow && title === "Ad") {
            toggleEdit();
        }
    }, [isAddNewRow]);
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);
    useEffect(() => {
        if (isChangeTable) {
            setIsChangeTable(false);
        }
    }, [isChangeTable]);

    const toggleEdit = () => {
        if (setShowSaveButton) {
            setShowSaveButton(true);
        }
        setIsChangeTable(true);
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();
            if (Object.keys(values).includes("useTabs")) {
                const manager = JSON.parse(values.useTabs);
                values.useTabs = manager.cureTabName;
                values.cureTabType = manager.cureTabType;
            }
            if (Object.keys(values).includes("cureTabName")) {
                const manager = JSON.parse(values.cureTabName);
                values.cureTabName = manager.cureTabName;
                values.cureTabType = manager.cureTabType;
            }
            toggleEdit();
            handleSave({ ...record, ...values });
            setIsChangeTable(true);
        } catch (errInfo) {
            console.log("Save failed:", errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <EditInputType
                dataIndex={dataIndex}
                title={title}
                inputRef={inputRef}
                save={save}
            />
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    paddingRight: 24,
                    height: "35px",
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }
    return { childNode };
};

export default useChildrenNode;
