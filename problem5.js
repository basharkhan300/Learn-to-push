function problem5(inventory){
    let newArr = [];
  for(let i=0; i<inventory.length; i++){
    if(inventory[i]["car_year"] < 2000 )
    newArr.push(inventory[i]["car_year"]);
  }
  console.log(newArr.length); 
}

module.exports = problem5;