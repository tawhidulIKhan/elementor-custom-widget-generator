// widget reducers

import widgetData from '../../data/widgetData';

const widgetReducer = (state = widgetData, { type, payload }: any) => {
  switch (type) {
    case 'widget/add_title':
      return {
        ...state,
        title: payload,
      };
    default:
      return state;
  }
};
export default widgetReducer;
