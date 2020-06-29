// let foodlist=["pasta","burger","pizza","hotdog"];

// alert("1:pasta 2:burger 3:pizza 4:hotdog");

// let number=prompt("choose a number from 1 to 4");

// if (number==1){
//     alert(foodlist[0])
// }
// if(number==2){
//     alert(foodlist[1])
// }
// if(number==3){
//     alert(foodlist[2])
// }
// if(number==4){
//     alert(foodlist[3])
// }

let maths=["/","*","+","-"]

let first_number=prompt("choose a number")

let second_number=prompt("choose another number")

let maths_eq=prompt("choose a type of equation")

if(maths_eq==maths[0]){
    alert(first_number/second_number)
}
if(maths_eq==maths[1]){
    alert(first_number*second_number)
}
if(maths_eq==maths[2]){
    alert(parseInt(first_number)+parseInt(second_number))
}
if(maths_eq==maths[3]){
    alert(first_number-second_number)
}

