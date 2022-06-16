/* eslint-disable react/no-array-index-key */
import { ControlInterface } from '../../interfaces/widget';
import WidgetControlListItem from '../widgetControlListItem/WidgetControlListItem';

interface Props {
  controls: Array<ControlInterface>;
}
function WidgetControlList(props: Props) {
  const { controls } = props;
  return (
    <div>
      {controls.map((itr: ControlInterface, index: number) => (
        <WidgetControlListItem key={index} control={itr} />
      ))}
    </div>
  );
}

export default WidgetControlList;
