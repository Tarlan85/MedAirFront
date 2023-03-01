import { Form, Input, List, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/context";

const { Option } = Select;

const Family = () => {
    const [onMemberClicked, setOnMemberClicked] = useState();
    const [dataList, setDataList] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedItem, setselectedItem] = useState();
    const [activList, setactivList] = useState();
    const [countAddedFM, setCountAddedFM] = useState({});

    const { dataFamily } = useGlobalContext();

    const showModal = () => {
        setIsModalVisible(true);
    };

    useEffect(() => {
        if (dataFamily) {
            try {
                let list = [];
                let count = 2;
                dataFamily.forEach((i) => {
                    list.push({
                        id: count,
                        text: Object.keys(i)[0],
                    });
                    count += 1;
                });
                setDataList(list);
                console.log("list", list);
            } catch (e) {}
        }
    }, []);

    const arrSeveralAdd = [
        "Brother",
        "Sister",
        "Father's-brother",
        "Mother's-brother",
        "Father's-sister",
        "Mother's-sister",
    ];

    const onClickAddFamilyMember = () => {
        if (selectedItem) {
            const findEl = dataList.find((i) => i.text === selectedItem);
            if (!findEl) {
                let a = {
                    id: new Date().getUTCMilliseconds(),
                    text: selectedItem,
                };
                setDataList([...dataList, a]);
            } else if (arrSeveralAdd.includes(selectedItem)) {
                let s = selectedItem;
                let count = countAddedFM[selectedItem] || 2;
                s += "_" + count;
                count += 1;
                setCountAddedFM({ [selectedItem]: count });
                let a = {
                    id: new Date().getUTCMilliseconds(),
                    text: s,
                };
                setDataList([...dataList, a]);
            }
        }
    };
    const deleteList = (e, item) => {
        e.preventDefault();
        e.stopPropagation();
        dataList.forEach((list) => {
            if (list.id === item.id) setactivList(null);
        });
        let newDataList = dataList.filter((list) => list.id !== item.id);
        setDataList(newDataList);
    };
    const onClickList = (list) => {
        setactivList(list.id);
        setOnMemberClicked(list.text);
        showModal();
    };
    const onSelect = (e) => {
        setselectedItem(e);
    };

    return (
        <>
            <div style={{ display: "flex" }}>
                <Form
                    className="collapsForm"
                    labelAlign="right"
                    labelCol={{
                        span: 7,
                    }}
                    wrapperCol={{
                        span: 13,
                    }}
                    style={{ width: "400px" }}
                >
                    <Form.Item label="Family members ">
                        <Select
                            allowClear
                            onSelect={onSelect}
                            defaultValue=""
                            style={{ width: "100%" }}
                        >
                            <Option value="Mother">Mother</Option>
                            <Option value="Father">Father</Option>
                            <Option value="Maternal-grandmother">
                                Maternal grandmother
                            </Option>
                            <Option value="Ata-Ana">
                                Paternal grandmother
                            </Option>
                            <Option value="Ata-Ata">
                                Paternal grandfather
                            </Option>
                            <Option value="Ana-Ata">
                                Maternal grandfather
                            </Option>
                            <Option value="Brother">Brother</Option>
                            <Option value="Sister">Sister</Option>
                            <Option value="Father's-brother">
                                Father's brother
                            </Option>
                            <Option value="Mother's-brother">
                                Mother's brother
                            </Option>
                            <Option value="Father's-sister">
                                Father's sister
                            </Option>
                            <Option value="Mother's-sister">
                                Mother's sister
                            </Option>
                        </Select>
                    </Form.Item>
                </Form>
                <button className="new_button" onClick={onClickAddFamilyMember}>
                    Add
                </button>
            </div>

            <div className="family-list">
                <List
                    locale={{ emptyText: "..." }}
                    size="small"
                    bordered
                    dataSource={dataList}
                    renderItem={(item) => {
                        let className =
                            activList === item.id
                                ? "family-list-item-active"
                                : "family-list-item";
                        return (
                            <List.Item
                                className={className}
                                key={item.id}
                                onClick={() => onClickList(item)}
                            >
                                <div>{item.text}</div>
                                <button
                                    className="delete-family-list"
                                    onClick={(e) => deleteList(e, item)}
                                >
                                    x
                                </button>
                            </List.Item>
                        );
                    }}
                />
            </div>
            {isModalVisible && activList ? (
                <ModalFamily
                    isModalVisible={isModalVisible}
                    onMemberClicked={onMemberClicked}
                />
            ) : (
                ""
            )}
        </>
    );
};

export default Family;

const ModalFamily = (props) => {
    const { onMemberClicked, isModalVisible } = props;

    const [form] = Form.useForm();
    const { dataFamily, setDataFamily } = useGlobalContext();

    const [trauma, setTrauma] = useState("");
    const [dead, setDead] = useState("");
    const [alive, setAlive] = useState("");
    const [description, setdescription] = useState();

    const saveDataFamily = () => {
        let dataObj = {
            trauma,
            dead,
            alive,
            description,
        };
        const member = dataFamily.find((m) => m[onMemberClicked]);
        if (member) {
            const index = dataFamily.findIndex((m) => m[onMemberClicked]);
            dataFamily[index] = { [onMemberClicked]: { ...dataObj } };
            setDataFamily([...dataFamily]);
        } else {
            setDataFamily([...dataFamily, { [onMemberClicked]: dataObj }]);
        }
    };

    const fillForm = (t, d, a, des) => {
        form.setFieldsValue({
            trauma: t,
            dead: d,
            alive: a,
            description: des,
        });
    };

    useEffect(() => {
        if (onMemberClicked) {
            const member = dataFamily.find((m) => m[onMemberClicked]);
           
            if (member) {
                let m = member[onMemberClicked];
                setTrauma(m.trauma);
                setDead(m.dead);
                setAlive(m.alive);
                setdescription(m.description);
                fillForm(m.trauma, m.dead, m.alive, m.description);
            } else {
                setTrauma("");
                setDead("");
                setAlive("");
                setdescription("");
                form.resetFields();
            }
        }
    }, [onMemberClicked]);

    useEffect(() => {
        if (isModalVisible) {
            saveDataFamily();
        }
    }, [trauma, dead, alive, description]);

    return (
        <Form
            className="collapsForm"
            labelAlign="right"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 13,
            }}
            form={form}
            style={{ width: "400px" }}
        >
            <Form.Item label="Trauma" name="trauma">
                <Input
                    allowClear
                    value={trauma}
                    onChange={(e) => setTrauma(e.target.value)}
                />
            </Form.Item>
            <Form.Item label="Deceased of cancer" name="dead">
                <Input
                    allowClear
                    value={dead}
                    onChange={(e) => setDead(e.target.value)}
                />
            </Form.Item>
            <Form.Item label="Living with cancer" name="alive">
                <Input
                    allowClear
                    value={alive}
                    onChange={(e) => setAlive(e.target.value)}
                />
            </Form.Item>
            <Form.Item label="Description" name="description">
                <TextArea
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}
                    rows={3}
                />
            </Form.Item>
        </Form>
    );
};
