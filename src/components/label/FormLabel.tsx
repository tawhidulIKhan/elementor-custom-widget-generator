import { QuestionCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import './FormLabel.scss';

interface Props {
  label: string;
  tooltip?: string;
}
function FormLabel({ label, tooltip }: Props) {
  return (
    <div className="label">
      <p className="label__title">
        {label}
        <span className="label__tooltip">
          <Tooltip placement="topLeft" title={tooltip}>
            <QuestionCircleOutlined />
          </Tooltip>
        </span>
      </p>
    </div>
  );
}

export default FormLabel;
