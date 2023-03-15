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
const Sub = () => {
  const form = Form.useFormInstance();

  return <Button onClick={() => form.setFieldsValue({})} />;
};

const { RangePicker } = DatePicker;
const { TextArea } = Input;

console.log;

export default function FormDisabledDemo() {
  const [form] = Form.useForm();
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);

  const userInfo: React.FC = () => (
    <>
      <Input size="large" placeholder="large size" />
      <br />
      <br />
      <Input placeholder="default size" />
      <br />
      <br />
      <Input size="small" placeholder="small size" />
    </>
  );

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox>
      <Form
        onFinish={onFinish}
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{ maxWidth: 600 }}
      >
        <Input name="username" placeholder=""></Input>
        <Button onClick={onFinish}>submit</Button>
      </Form>
    </>
  );
}

FormDisabledDemo.displayName = "FormDisabledDemo";
