const foodReducerDefaultState = [];

const foodReducer = (state = foodReducerDefaultState, action) => {
  switch (action.type) {
    case "FETCH_FOOD_REQUEST":
      return state;
    case "FETCH_FOOD_SUCCESS":
      return [...state,...action.food];
    case "FETCH_FOOD_ERROR":
      return state;
    default:
      return state;
  }
};

export default foodReducer;
