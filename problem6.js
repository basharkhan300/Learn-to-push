 function problem6(inventory){
    let newArr = [];
    for(let i=0; i < inventory.length ; i++){
        if(inventory[i]["car_make"] === "Audi" || inventory[i]["car_make"] === "BMW" ){
            newArr.push(inventory[i]);
        }
    }
    console.log( JSON.stringify(newArr));
}

module.exports = problem6;
