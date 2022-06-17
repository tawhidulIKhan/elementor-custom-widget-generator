/* eslint-disable no-console */
import { Input, Select } from 'antd';
import { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { widgetCategories } from '../../data/widgetData';
import { WidgetCategoriesInterface } from '../../interfaces/widget';
import { RootState } from '../../store';
import { setWidgetTitle } from '../../store/actions/widgetAction';
import FormLabel from '../label/FormLabel';
import WidgetSectionForm from '../widgetSectionForm/WidgetSectionForm';
import './WidgetForm.scss';

interface Props {
  widget: any;
  setTitle: (title: any) => void;
}

function WidgetForm(props: Props) {
  const { setTitle } = props;
  const { widget } = props;
  const onTitleChange = (ev: ChangeEvent<{ value: string }>) => {
    setTitle({
      value: ev.target.value,
      key: 'title',
    });
  };
  const onCategoryChange = (category: any) => {
    setTitle({
      value: [category],
      key: 'categories',
    });
  };

  return (
    <div className="widget__form">
      <div className="widget__form__row">
        <div className="widget__form__column">
          <FormLabel
            label="Widget Name"
            tooltip="The get_name() method returns the widget name as it will be used in the code."
          />
          <Input
            defaultValue={widget.title}
            placeholder="Enter widget name"
            onChange={onTitleChange}
          />
          <span className="example">i.e. oembed</span>
        </div>
        <div className="widget__form__column">
          <FormLabel
            label="Widget Title"
            tooltip="The get_title() method returns the widget label as it will be displayed to the user."
          />
          <Input placeholder="Enter widget title" />
          <span className="example">i.e. oEmbed</span>
        </div>
        <div className="widget__form__column">
          <FormLabel
            label="Widget Icon"
            tooltip="he get_icon() method is an optional, but recommended, method. It lets you set the widget icon. You can use any Elementor icons (opens new window)or FontAwesome icons (opens new window), to simply return the CSS class name."
          />
          <Select defaultValue="1" style={{ width: 200 }}>
            <Select.Option selected disabled value="1">
              Select widget icon
            </Select.Option>
            {widgetCategories.map((category: WidgetCategoriesInterface) => (
              <Select.Option value={category.id}>
                {category.label}
              </Select.Option>
            ))}
          </Select>
          <span className="example">i.e eicon-code</span>
        </div>
        <div className="widget__form__column">
          <FormLabel
            label="Widget Categories"
            tooltip="he get_icon() method is an optional, but recommended, method. It lets you set the widget icon. You can use any Elementor icons (opens new window)or FontAwesome icons (opens new window), to simply return the CSS class name."
          />
          <Select
            onChange={onCategoryChange}
            defaultValue="1"
            style={{ width: 200 }}
          >
            <Select.Option selected disabled value="1">
              Select widget categories
            </Select.Option>
            {widgetCategories.map((category: WidgetCategoriesInterface) => (
              <Select.Option value={category.id}>
                {category.label}
              </Select.Option>
            ))}
          </Select>
          <span className="example">i.e. general</span>
        </div>
      </div>
      <WidgetSectionForm />
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  widget: state.widget,
});

const mapDispatchToProps = {
  setTitle: setWidgetTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetForm);
