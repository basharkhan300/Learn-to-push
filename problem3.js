
function problem3(inventory){
    let newArr = [];
for(let i=0; i<inventory.length; i++){
     newArr.push(inventory[i]["car_model"]);     
}
// Making sort a higher order function in order to sort case insensitive
newArr.sort(function(a,b){

if(a.toLowerCase() < b.toLowerCase()) { return -1 };
if(b.toLowerCase() < a.toLowerCase()) { return 1 } ;
return 0;
});
console.log(newArr);
}

module.exports = problem3;