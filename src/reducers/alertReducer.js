const initialState = {
  alert: "Normal",
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RAISE_ALERT":
      return {
        ...state,
        alert: "High Alert",
      };
    case "LOWER_ALERT":
      return {
        ...state,
        alert: "Normal",
      };
    default:
      return state;
  }
};

export default alertReducer;
