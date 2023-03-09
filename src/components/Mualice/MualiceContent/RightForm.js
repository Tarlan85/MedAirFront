import { Form, Input, InputNumber, Radio, Select, Space } from "antd";
import React, { memo } from "react";
import { styleInput } from "../../../date/styleInput";
import Benigen from "../components/Benigen";
import { useMualiceContext } from "../context";
import useLabel from "../../EditTableComponent/hooks/useLabel";
import { useGlobalContext } from "../../../context/context";

const { TextArea } = Input;
const { Option } = Select;

const RightForm = ({ form }) => {
  const {
    treatmentsType,
    settreatmentsType,
    activeRow,
    ihkEr,
    setihkEr,
    ihkPr,
    setihkPr,
    ihkHer2,
    setihkHer2,
  } = useMualiceContext();

  const label = useLabel({ activeRow });
  const { pathologistsList } = useGlobalContext();

  const onChangeTreatmentTypeName = (e) => {
    settreatmentsType(e);
    form.setFieldsValue({ treatmentSubType: "" });
    form.setFieldsValue({ treatmentSubSubType: "" });
    form.setFieldsValue({ treatmentTypeDesc: "" });
  };

  return (
    <Form
      form={form}
      className="collapsForm"
      labelAlign="right"
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 13,
      }}
    >
      <Form.Item label={label("ER")} name="ihkEr">
        <Radio.Group onChange={(e) => setihkEr(e.target.value)}>
          <Space style={styleInput} direction="horizontal">
            <Radio value={1}>Positive</Radio>
            <Radio value={2}>Negative</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
      {ihkEr === 1 && (
        <Form.Item label={label("N")} name="erN">
          <InputNumber style={styleInput} />
        </Form.Item>
      )}
      <Form.Item label={label("PR")} name="ihkPr">
        <Radio.Group onChange={(e) => setihkPr(e.target.value)}>
          <Space style={styleInput} direction="horizontal">
            <Radio value={1}>Positive</Radio>
            <Radio value={2}>Negative</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
      {ihkPr === 1 && (
        <Form.Item label={label("N")} name="prN">
          <InputNumber style={styleInput} />
        </Form.Item>
      )}
      <Form.Item label={label("HER2")} name="her2">
        <InputNumber
          style={styleInput}
          value={ihkHer2}
          onChange={(e) => setihkHer2(e)}
          min={0}
          max={3}
          defaultValue={0}
        />
      </Form.Item>
      {ihkHer2 === 2 && (
        <Form.Item label={label("FT")} name="her2FT">
          <Input />
        </Form.Item>
      )}
      <Form.Item label={label("K67")} name="k67">
        <InputNumber style={styleInput} min={0} defaultValue={0} />
      </Form.Item>

      <Form.Item label="Pathologist" name="pathologist">
            <Select style={styleInput} allowClear>
              {pathologistsList.map((i) => {
                return (
                  <Select.Option value={i.pathologistName}>
                    {i.pathologistName}
                  </Select.Option>
                );
              })}
            </Select>
      </Form.Item>

      <Form.Item label={label("Brest type")} name="breastType">
        <Select style={styleInput} allowClear>
          <Option value="Missing">Missing</Option>
          <Option value="Right">Right</Option>
          <Option value="Left">Left</Option>
          <Option value="Both">Both</Option>
          <Option value="Post mastectomy right">Post mastectomy right</Option>
          <Option value="Post mastectomy left">Post mastectomy left</Option>
          <Option value="Axilla right">Axilla right</Option>
          <Option value="Axilla left">Axilla left</Option>
          <Option value="Extra breast right">Extra breast right</Option>
          <Option value="Extra breast left">Extra breast left</Option>
          <Option value="Both extra breasts">Both extra breasts</Option>
        </Select>
      </Form.Item>
      <Form.Item label={label("Type of treatment")} name="treatmentTypeName">
        <Select
          allowClear
          style={styleInput}
          onChange={onChangeTreatmentTypeName}
        >
          <Option value="benigen">Benign</Option>
          <Option value="maligan">Malignant</Option>
          <Option value="Nak">Nak</Option>
          <Option value="AK">AK</Option>
          <Option value="RT">RT</Option>
          <Option value="target">Target</Option>
        </Select>
      </Form.Item>
      {treatmentsType === "maligan" ? (
        <>
          <Form.Item label={label("Emeliyyat novu")} name="treatmentSubType">
            <Select style={styleInput} allowClear>
              <Option value="Organgoruyucu">Organoprotector</Option>
              <Option value="Masektamiya">Masectomy</Option>
              <Option value="SLNB">SLNB</Option>
            </Select>
          </Form.Item>
          <Form.Item label={label("TB")} name="treatmentSubSubType">
            <Select style={styleInput} allowClear>
              <Option value="lumA">Lum A</Option>
              <Option value="lumB">Lum B</Option>
              <Option value="tripelN">Triple negative</Option>
              <Option value="hormonP">Hormone positive Her positive</Option>
              <Option value="hormonN">Hormone negative Her positive</Option>
              <Option value="prN">PR negative</Option>
            </Select>
          </Form.Item>
          <Form.Item label={label("Description")} name="treatmentTypeDesc">
            <TextArea style={styleInput} rows={3} />
          </Form.Item>
        </>
      ) : treatmentsType === "benigen" ? (
        <Benigen />
      ) : treatmentsType === "Nak" || treatmentsType === "RT" ? (
        <>
          <Form.Item label={label("patamarfoz")} name="treatmentSubType">
            <Select style={styleInput} allowClear>
              <Option value="1">&#8544;</Option>
              <Option value="2">&#8545;</Option>
              <Option value="3">&#8546;</Option>
              <Option value="4">&#8547;</Option>
            </Select>
          </Form.Item>
          <Form.Item label={label("Description")} name="treatmentTypeDesc">
            <TextArea style={styleInput} rows={3} />
          </Form.Item>
        </>
      ) : treatmentsType ? (
        <Form.Item label={label("Description")} name="treatmentTypeDesc">
          <TextArea style={styleInput} rows={3} />
        </Form.Item>
      ) : (
        ""
      )}
    </Form>
  );
};

export default memo(RightForm);
