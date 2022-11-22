const initialState = {
  counter: 0,
};
export function reducer(state = initialState, action) {
  if (action.type === "INCREMENT") {
    return { ...state, counter: action.payload };
  } else if (action.type === "DECREMENT") {
    return { ...state, counter: action.payload };
  } else if (action.type === "RESET") {
    return { ...state, counter: action.payload };
  }
  return state;
}
