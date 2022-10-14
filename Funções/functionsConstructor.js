/*
    Function() constructor

    *expressão new
    *criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const pedro = new Person("Pedro")
const joao = new Person("João")
console.log(pedro.walk())
console.log(joao)