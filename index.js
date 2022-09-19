// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42)
}

function distanceFromHqInFeet(someValue) {
    const distanceFeet = distanceFromHqInBlocks(someValue) * 264
    return distanceFeet
}

function distanceTravelledInFeet(start, destination) {
    const distanceBlocks = Math.abs(destination - start)
    return distanceBlocks * 264
}

function  calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination)
    if (feet <= 400) return 0
    else if (feet <= 2000) return (feet - 400) * 0.02 
    else if (feet <= 2500) return 25
    else if (feet > 2500) return "cannot travel that far"
    else return "404 error something went wrong"
}