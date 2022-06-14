import { Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import sectionData from '../../data/sectionData';
import { Section } from '../../interfaces/widget';
import { RootState } from '../../store';
import { addSection } from '../../store/actions/widgetAction';
import './WidgetSectionForm.scss';

interface Props {
  insertSection: (section: Section) => void;
}

function WidgetSectionForm(props: Props) {
  const { insertSection } = props;
  const addNewSection = () => {
    // eslint-disable-next-line no-console
    console.log(444);
    insertSection(sectionData);
  };
  return (
    <div className="widget__sform">
      <Button onClick={() => addNewSection()} type="primary">
        Add Section
      </Button>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  sections: state.widget.sections,
});

const mapDispatchToProps = {
  insertSection: addSection,
};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetSectionForm);
