import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const onChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  console.log(e);
};

export const Ant: React.FC = () => {
  const [form] = Form.useForm();

  const onPriceChange = (value: string) => {
    switch (value) {
      case "static":
        form.setFieldsValue({ note: "Hi, man!" });
        break;
      case "count":
        form.setFieldsValue({ note: "Hi, lady!" });
        break;
      case "flexible":
        form.setFieldsValue({ note: "Hi there!" });
        break;
      default:
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({ note: "Hello world!", gender: "male" });
  };

  return (
    <>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        {/* {["en", ""].map((_, idx) => (
        <Form.Item
          name={["names", idx]}
          label="Name"
          rules={[{ required: true }]}
          key={idx}
        >
          <Input />
        </Form.Item>
      ))} */}
        {/* <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item> */}

        <Form.Item name="price_type" label="Price Type">
          <Select
            placeholder="Select a option and change input text above"
            allowClear
          >
            <Option value="static">static</Option>
            <Option value="flexible">flexible</Option>
            <Option value="count">count</Option>
          </Select>
        </Form.Item>

        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.price_type !== currentValues.price_type
          }
        >
          {({ getFieldValue }) =>
            getFieldValue("price_type") === "count" ? (
              <>
                <Form.Item name={["price_list", "price_begin"]} label="Price">
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["price_list", "price_number"]}
                  label="Price Number "
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["price_list", "price_compare"]}
                  label="Price Compare "
                >
                  <Input />
                </Form.Item>
              </>
            ) : null
          }
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.price_type !== currentValues.price_type
          }
        >
          {({ getFieldValue }) =>
            getFieldValue("price_type") === "flexible" ? (
              <>
                <Form.Item
                  name={["price_list", "price_begin"]}
                  label="Price Begin"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["price_type", "price_base"]}
                  label="Price Base "
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["price_type", "price_additional"]}
                  label="Price Per additional "
                >
                  <Input />
                </Form.Item>
              </>
            ) : null
          }
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Ant;
