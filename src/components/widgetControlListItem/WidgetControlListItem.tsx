import { Input, Select } from 'antd';
import { controlTypeInterface, controlTypes } from '../../data/controlData';
import { ControlInterface } from '../../interfaces/widget';
import FormLabel from '../label/FormLabel';
import './WidgetControlListItem.scss';

interface Props {
  control: ControlInterface;
}
function WidgetControlListItem(props: Props) {
  const { control } = props;
  return (
    <div className="section__item">
      <div className="widget__form__row">
        <div className="widget__form__column">
          <FormLabel
            label="Control Label"
            tooltip="Label (string) – Label displayed to the user in the panel."
          />
          <Input defaultValue={control.label} />
        </div>
        <div className="widget__form__column">
          <FormLabel
            label="Control type"
            tooltip="Label displayed to the user in the panel."
          />
          <Select style={{ width: '300px' }} defaultValue={control.type}>
            {controlTypes.map((type: controlTypeInterface) => (
              <Select.Option value={type.id}>{type.label}</Select.Option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
}
export default WidgetControlListItem;
