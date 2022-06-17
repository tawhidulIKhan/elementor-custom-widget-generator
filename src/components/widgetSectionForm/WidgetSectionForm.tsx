import { Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { ControlTabs } from '../../enums/controls';
import { Section } from '../../interfaces/widget';
import { addSection } from '../../store/actions/widgetAction';
import { randomId } from '../../utils/helpers';
import WidgetSectionList from '../widgetSectionList/WidgetSectionList';
import './WidgetSectionForm.scss';

interface Props {
  insertSection: (section: Section) => void;
}

function WidgetSectionForm(props: Props) {
  const { insertSection } = props;
  const addNewSection = () => {
    const newSection = {
      id: randomId(),
      label: 'Test',
      tab: ControlTabs.CONTENT,
      controls: [],
    };
    insertSection(newSection);
  };
  return (
    <div className="widget__sform">
      <Button onClick={() => addNewSection()} type="primary">
        Add Section
      </Button>
      <WidgetSectionList />
    </div>
  );
}

const mapDispatchToProps = {
  insertSection: addSection,
};

export default connect(null, mapDispatchToProps)(WidgetSectionForm);
