// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);

// console.log(2>1); //comparison operator

// if(2>1 && 3>2){
//     console.log("hello")
// }

// console.log(2+"203")  //2203  string
// console.log(2+204)   //206
// console.log(403-"203")  //200  :implicit type conversion
// console.log(2*"5")    //10

//calculate booking amount of movie ticket
//if ticker quantity>3 apply discount of 50 rs
//age>18


let age = 10;
let qty = 2;
let price = 200;
let amnt = qty * price;

if (age > 18) {
    if (qty > 3) {
        amnt = amnt - 50;
    }

    console.log("Booking Confirmed");
    console.log("Ticket Quantity: " + qty);
    console.log("Booking Amount: Rs. " + amnt);
} else {
    console.log("Booking Not Allowed");
}
