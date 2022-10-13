function divide(x){
    if(x % 3 == 0 && x % 5 == 0){
        console.log("FizzBuzz")
    }
    else if(x % 3 == 0){
        console.log("fizz")
    }
    else if(x % 5 == 0){
        console.log("buzz")
    }
}

divide(15)

let varia = (x, y) => {
    if(x % 3 == 0 && x % 5 == 0){
        console.log("FizzBuzz")
    }
    else if(x % 3 == 0){
        console.log("fizz")
    }
    else if(x % 5 == 0){
        console.log("buzz")
    }
}

varia(15)

for(x=1 ; x <= 100 ; x++){
    if(x % 3 == 0 && x % 5 == 0){
        console.log("FizzBuzz")
    }
    else if(x % 3 == 0){
        console.log("fizz")
    }
    else if(x % 5 == 0){
        console.log("buzz")
    }
    else{
        console.log(x)
    }
}