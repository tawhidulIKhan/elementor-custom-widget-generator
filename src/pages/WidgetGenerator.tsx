import React from 'react';
import WidgetForm from '../components/widgetForm/WidgetForm';
import './WidgetGenerator.scss';

function WidgetGenerator() {
  return (
    <div className="wg">
      <div className="wg__content">
        <div className="wg__content__left">
          <WidgetForm />
        </div>
        <div className="wg__content__right" />
      </div>
    </div>
  );
}

export default WidgetGenerator;
