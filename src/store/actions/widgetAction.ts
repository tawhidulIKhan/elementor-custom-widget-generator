export const SET_WIDGET_TITLE = 'widget/add_title';
export const SET_WIDGET_SECTION = 'widget/add_section';

export const setWidgetTitle = (payload: any) => ({
  type: SET_WIDGET_TITLE,
  payload,
});

export const addSection = (payload: any) => ({
  type: SET_WIDGET_SECTION,
  payload,
});
