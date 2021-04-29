let array = [0, 1, 2, 3, 4, 5, 6, 7]

function mayorQueUno(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 1) {
        console.log(array[i])
    }
    }
}
console.log(mayorQueUno([0, 1, 2, 3, 4, 5, 6, 7]))
