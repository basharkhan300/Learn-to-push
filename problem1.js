

let r = [];
function problem1(inventory){
    for(let i=0; i<inventory.length; i++){
        if(inventory[i]["id"] === 33){
            r = inventory[i];
        }
    }
    // console.log(r);
    console.log("Car 33 is a " + r['car_year'] + " " + r['car_make'] + " " + r['car_model']);
}

module.exports = problem1;
