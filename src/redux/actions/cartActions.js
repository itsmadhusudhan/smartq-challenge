export const deleteItems=()=>({
  type:"DELETE_ITEMS"
})

export const addItem=(name,count,price)=>({
  type:"ADD_ITEM",
  item:{
    name,
    count,
    price
  }
});

export const removeItem=(name)=>({
  type:"REMOVE_ITEM",
  name
});

export const deleteItem=(name,count,price)=>({
  type:"DELETE_ITEM",
  item:{
    name,
    count,
    price
  }
})