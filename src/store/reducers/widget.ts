/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import {
  SET_WIDGET_CONTROL,
  SET_WIDGET_SECTION,
  SET_WIDGET_TITLE,
} from '../actions/widgetAction';
// widget reducers

import widgetData from '../../data/widgetData';
import { SectionInterface } from '../../interfaces/widget';

const widgetReducer = (state = widgetData, { type, payload }: any) => {
  switch (type) {
    case SET_WIDGET_TITLE:
      return {
        ...state,
        [payload.key]: payload.value,
      };
    case SET_WIDGET_SECTION:
      return {
        ...state,
        sections: [...state.sections, payload],
      };
    case SET_WIDGET_CONTROL:
      return {
        ...state,
        sections: [
          ...state.sections.map((section: SectionInterface) => {
            if (section.id === payload.sectionId) {
              const { sectionId, ...control } = payload;
              return {
                ...section,
                controls: [...section.controls, control],
              };
            }
            return section;
          }),
        ],
      };
    default:
      return state;
  }
};
export default widgetReducer;
