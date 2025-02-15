const x = 5;
console.log('x = '+x);
if (x===5) {
    x=10;
}

function add(num1, num2=10) {
    let kq = num1 + num2;
    console.log("Tong "+kq);
}

add(5,6);
add(5);