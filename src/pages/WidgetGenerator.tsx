import React from 'react';
import WidgetCode from '../components/widgetCode/WidgetCode';
import WidgetForm from '../components/widgetForm/WidgetForm';
import './WidgetGenerator.scss';

function WidgetGenerator() {
  return (
    <div className="wg">
      <div className="wg__content">
        <div className="wg__content__left">
          <WidgetForm />
        </div>
        <div className="wg__content__right">
          <WidgetCode />
        </div>
      </div>
    </div>
  );
}

export default WidgetGenerator;
