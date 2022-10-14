// function hoisting

sayMyName();

function sayMyName() {
    console.log("Pedro")
}

var sayMyName = function sayMyName() {
    console.log('Pedro')
}