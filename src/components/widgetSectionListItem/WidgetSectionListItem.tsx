import { Input, Select } from 'antd';
import {
  controlSectionTabs,
  controlSectionTabsInterface,
} from '../../data/controlData';
import { SectionInterface } from '../../interfaces/widget';
import FormLabel from '../label/FormLabel';
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
          <FormLabel
            label="Section label"
            tooltip="Label displayed to the user in the panel."
          />
          <Input defaultValue={section.label} />
        </div>
        <div className="widget__form__column">
          <FormLabel
            label="Section tab"
            tooltip="Tab where the section is located. Default is content"
          />
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
