import { QuestionCircleOutlined } from '@ant-design/icons';
import { Input, Select, Tooltip } from 'antd';
import React from 'react';
import {
  controlSectionTabs,
  controlSectionTabsInterface,
} from '../../data/controlData';
import { SectionInterface } from '../../interfaces/widget';
import WidgetControlForm from '../widgetControlForm/WidgetControlForm';
import WidgetControlList from '../widgetControlList/WidgetControlList';
import './WidgetSectionListItem.scss';

interface Props {
  section: SectionInterface;
}
function WidgetSectionListItem(props: Props) {
  const { section } = props;
  return (
    <div className="section__item">
      <div className="widget__form__row">
        <div className="widget__form__column">
          <p className="section__item__label">
            Section label{' '}
            <Tooltip
              placement="topLeft"
              title="Label displayed to the user in the panel."
            >
              <QuestionCircleOutlined />
            </Tooltip>
          </p>
          <Input defaultValue={section.label} />
        </div>
        <div className="widget__form__column">
          <p className="section__item__label">
            Section tab
            <Tooltip
              placement="topLeft"
              title="Tab where the section is located. Default is content"
            >
              <QuestionCircleOutlined />
            </Tooltip>
          </p>
          <Select defaultValue={section.tab} style={{ width: '300px' }}>
            {controlSectionTabs.map((tab: controlSectionTabsInterface) => (
              <Select.Option value={tab.id}>{tab.label}</Select.Option>
            ))}
          </Select>
        </div>
      </div>
      <div className="section__item__controls">
        <WidgetControlList controls={section.controls} />
        <WidgetControlForm sectionId={section.id} />
      </div>
    </div>
  );
}
export default WidgetSectionListItem;
