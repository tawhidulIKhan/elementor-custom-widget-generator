// widget reducers

import widgetData from '../../data/widgetData';

const widgetReducer = (state = widgetData, { type, payload }: any) => {
  switch (type) {
    case 'add_title':
      return {
        ...state,
        title: payload.value,
      };
    default:
      return state;
  }
};
export default widgetReducer;
