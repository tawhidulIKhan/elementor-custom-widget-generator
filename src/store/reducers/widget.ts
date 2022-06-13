// widget reducers

const INITIAL_STORE: any = {
  title: 'Test title',
};
const widgetReducer = (state = INITIAL_STORE, { type, payload }: any) => {
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
