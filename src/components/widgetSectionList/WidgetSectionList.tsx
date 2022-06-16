/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import { Section } from '../../interfaces/widget';
import { RootState } from '../../store';
import WidgetSectionListItem from '../widgetSectionListItem/WidgetSectionListItem';

interface Props {
  sections: Array<Section>;
}
function WidgetSectionList(props: Props) {
  const { sections } = props;
  return (
    <div>
      {sections.map((itr: Section, index: number) => (
        <WidgetSectionListItem key={index} section={itr} />
      ))}
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  sections: state.widget.sections,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WidgetSectionList);
