import { createAction, handleActions } from "redux-actions";

const JOIN = "counter/JOIN";
const CANCEL = "counter/CANCEL";

export const join = createAction(JOIN);
export const cancel = createAction(CANCEL);

const initailState = {
  numberJoin: 0
};

export default handleActions({
  [JOIN]: (state, action) => {
    return { numberJoin: state.numberJoin + 1 };
  },
  [CANCEL]: (state, action) => {
    return { numberJoin: state.numberJoin - 1 };
  }
});
