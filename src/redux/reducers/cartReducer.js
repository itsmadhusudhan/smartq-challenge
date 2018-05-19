const cartReducerDefaultState = [{name:"hello",count:0}];

const cartReducer = (state = cartReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state,action.item];
    case "DELETE_ITEMS":
      return cartReducerDefaultState;
    case "REMOVE_ITEM":
      return [...state.filter(item=>item.name!==action.name)];
    case "DELETE_ITEM":
      return [...state,action.item]
    default:
      return state;
  }
};

export default cartReducer;
