export const categorySelector=(food,category)=>{
  return food.filter(item=>item.category===category)
}