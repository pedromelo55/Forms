// function scope

let subject

function createThink() {
    return subject
}

console.log(subject)
createThink()
console.log(subject)