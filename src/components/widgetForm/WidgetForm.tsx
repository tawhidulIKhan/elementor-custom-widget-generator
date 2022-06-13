import { Input, Select } from 'antd';
import './WidgetForm.scss';

export default function WidgetForm() {
  return (
    <div className="widget__form">
      <div className="widget__form__row">
        <div className="widget__form__column">
          <Input placeholder="Enter widget name" />
          <p>ex: Test_Widget</p>
        </div>
        <div className="widget__form__column">
          <Input placeholder="Enter widget title" />
          <p>ex: Test_Widget</p>
        </div>
        <div className="widget__form__column">
          <Select defaultValue="1" style={{ width: 200 }}>
            <Select.Option selected disabled value="1">
              Select widget icon
            </Select.Option>
            <Select.Option value="2">icon 1</Select.Option>
            <Select.Option value="3">icon 1</Select.Option>
            <Select.Option value="4">icon 1</Select.Option>
          </Select>
        </div>
        <div className="widget__form__column">
          <Input placeholder="Enter keywords" />
          <p>ex: keywords</p>
        </div>
        <div className="widget__form__column">
          <Select defaultValue="1" style={{ width: 200 }}>
            <Select.Option selected disabled value="1">
              Select or create widget categories
            </Select.Option>
            <Select.Option value="2">icon 1</Select.Option>
            <Select.Option value="3">icon 1</Select.Option>
            <Select.Option value="4">icon 1</Select.Option>
          </Select>
        </div>
        <div className="widget__form__column">
          <Input placeholder="Basic usage" />
        </div>
      </div>
    </div>
  );
}
