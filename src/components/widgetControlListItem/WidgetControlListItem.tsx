import { Input } from 'antd';
import { ControlInterface } from '../../interfaces/widget';
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
          <p className="section__item__label">Control label</p>
          <Input defaultValue={control.label} />
        </div>
        <div className="widget__form__column">
          <p className="section__item__label">Control Type</p>
          <Input defaultValue={control.type} />
        </div>
      </div>
    </div>
  );
}
export default WidgetControlListItem;
