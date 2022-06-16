import { Input } from 'antd';
import React from 'react';
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
          <p className="section__item__label">Section label</p>
          <Input defaultValue={section.label} />
        </div>
        <div className="widget__form__column">
          <p className="section__item__label">Section tab</p>
          <Input defaultValue={section.tab} />
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
