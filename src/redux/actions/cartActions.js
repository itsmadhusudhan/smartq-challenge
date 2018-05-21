export const deleteItems=()=>({
  type:"DELETE_ITEMS"
})

export const addItem=(item)=>({
  type:"ADD_ITEM",
  item
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