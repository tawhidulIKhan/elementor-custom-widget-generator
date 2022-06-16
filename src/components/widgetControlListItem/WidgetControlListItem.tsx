import { Input, Select } from 'antd';
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
          <Select defaultValue={control.type}>
            <Select.Option value="\\Elementor\\Controls_Manager::TEXT">
              Text
            </Select.Option>
            <Select.Option value="\\Elementor\\Controls_Manager::TEXTAREA">
              Textarea
            </Select.Option>
            <Select.Option value="\\Elementor\\Controls_Manager::SELECT">
              Select
            </Select.Option>
            <Select.Option value="\\Elementor\\Controls_Manager::SWITCHER">
              Switcher
            </Select.Option>
            <Select.Option value="\\Elementor\\Controls_Manager::NUMBER">
              Number
            </Select.Option>
            <Select.Option value="\\Elementor\\Controls_Manager::SLIDER">
              Slider
            </Select.Option>
            <Select.Option value="\\Elementor\\Controls_Manager::DIMENSIONS">
              Dimensions
            </Select.Option>
            <Select.Option value="\\Elementor\\Controls_Manager::COLOR">
              Color
            </Select.Option>
            <Select.Option value="\\Elementor\\Controls_Manager::MEDIA">
              Media
            </Select.Option>
            <Select.Option value="\\Elementor\\Controls_Manager::GALLERY">
              Gallery
            </Select.Option>
            <Select.Option value="\\Elementor\\Controls_Manager::HEADING">
              Heading
            </Select.Option>
            <Select.Option value="\\Elementor\\Controls_Manager::DIVIDER">
              Divider
            </Select.Option>
            <Select.Option value="\\Elementor\\Controls_Manager::ICON">
              Icon
            </Select.Option>
            <Select.Option value="\\Elementor\\Controls_Manager::ICON_GROUP">
              Icon Group
            </Select.Option>
            <Select.Option value="\\Elementor\\Controls_Manager::IMAGE_DRAG_AREA">
              Image Drag Area
            </Select.Option>
          </Select>
        </div>
      </div>
    </div>
  );
}
export default WidgetControlListItem;
