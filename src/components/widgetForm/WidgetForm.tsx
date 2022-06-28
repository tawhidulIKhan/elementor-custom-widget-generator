/* eslint-disable no-console */
import DataMethodForm from '../dataMethodForm/DataMethodForm';
import Footer from '../footer/Footer';
import WidgetSectionForm from '../widgetSectionForm/WidgetSectionForm';
import './WidgetForm.scss';

function WidgetForm() {
  return (
    <div className="widget__form">
      <DataMethodForm />
      <WidgetSectionForm />
      <Footer />
    </div>
  );
}

export default WidgetForm;
