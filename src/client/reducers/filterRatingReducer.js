export default (state = [], action) => {
  switch (action.type) {
    case "RATING_FILTER_ON": {
      return [...state, parseInt(action.payload)];
    }
    case "RATING_FILTER_OFF": {
      return [...state].filter(rating => rating != action.payload);
    }
    default:
      return state;
  }
};
