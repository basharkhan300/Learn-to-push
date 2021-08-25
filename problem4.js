 function problem4(inventory){
    let newArr = [];
  for(let i=0; i<inventory.length; i++){
    newArr.push(inventory[i]["car_year"]);
  }
  console.log(newArr);
}

module.exports = problem4;