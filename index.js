function map(array, funct){
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(funct(array[i]))
    }
    return newArray
}

function reduce(array, funct, startingValue){
    let start = (!!startingValue) ? startingValue : array[0]
    let i = (!!startingValue) ? 0 : 1
    for (; i < array.length; i++){
        start = funct(array[i], start)
    }
    return start
}