/* eslint-disable no-console */
import { SET_WIDGET_SECTION, SET_WIDGET_TITLE } from '../actions/widgetAction';
// widget reducers

import widgetData from '../../data/widgetData';

const widgetReducer = (state = widgetData, { type, payload }: any) => {
  switch (type) {
    case SET_WIDGET_TITLE:
      return {
        ...state,
        title: payload,
      };
    case SET_WIDGET_SECTION:
      console.log(payload);
      return {
        ...state,
        sections: [...state.sections, payload],
      };
    default:
      return state;
  }
};
export default widgetReducer;
