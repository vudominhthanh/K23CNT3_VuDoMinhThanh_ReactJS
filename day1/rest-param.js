function rest_param(a,b,...other) {
    console.log("a = ",a);
    console.log("b = ",b);
    console.log("...other ",other);
}



rest_param(1,2);
rest_param(1,2,3,4,5);