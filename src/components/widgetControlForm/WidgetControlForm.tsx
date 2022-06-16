import { Button } from 'antd';
import { connect } from 'react-redux';
import { ControlInterface } from '../../interfaces/widget';
import { addControl } from '../../store/actions/widgetAction';
import { randomId } from '../../utils/helpers';
import './WidgetControlForm.scss';

interface Props {
  addControlAction: (control: ControlInterface) => void;
  sectionId: string;
}

function WidgetControlForm(props: Props) {
  const { addControlAction, sectionId } = props;
  const addNewControl = () => {
    const newControl = {
      id: randomId(),
      label: 'Test',
      type: '\\Elementor\\Controls_Manager::TEXT',
      sectionId,
    };
    addControlAction(newControl);
  };
  return (
    <div className="widget__scontrol">
      <Button onClick={() => addNewControl()} type="primary">
        Add control
      </Button>
    </div>
  );
}

const mapDispatchToProps = {
  addControlAction: addControl,
};

export default connect(null, mapDispatchToProps)(WidgetControlForm);
