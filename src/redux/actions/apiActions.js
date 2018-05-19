//fetch data from url using ES6 fetch api
export const fetchFood = () => {
  const api = "https://thesmartq.firebaseio.com/menu.json";
  return fetch(api).then(response => Promise.all([response, response.json()]));
};


export const fetchFoodRequest=()=>({
  type:"FETCH_FOOD_REQUEST"
})


export const fetchFoodSuccess=(food)=>({
  type:"FETCH_FOOD_SUCCESS",
  food
});

export const fetchFoodError=()=>({
  type:"FETCH_FOOD_ERROR"
})

export const fetchFoodWithRedux = () => {
  return dispatch => {
    dispatch(fetchFoodRequest());
    return fetchFood().then(([response, json]) => {
      if (response.status === 200) {
        dispatch(fetchFoodSuccess(json));
      } else {
        dispatch(fetchFoodError());
      }
    });
  };
};