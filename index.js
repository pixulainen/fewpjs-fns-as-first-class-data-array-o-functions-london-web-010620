function wakeDog(dogName,dogBreed){
let string = `Wake ${dogName} the ${dogBreed}`
console.log(string)
return string
}
function leashDog(dogName,dogBreed){
    let string = `Leash ${dogName} the ${dogBreed}`
    console.log(string)
    return string
    }
    
function walkToPark(dogName,dogBreed){
    let string = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(string)
    return string
    }
        
function throwFrisbee(dogName,dogBreed){
    let string = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(string)
    return string
    }


function walkHome(a,b) {
    return `Walk home with ${a} the ${b}`
}
function unleashDog(a,b) {
   return `Unleash ${a} the ${b}`
}
const routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
]
function exerciseDog(dogName,dogBreed) {
    let array = []

    for (let i = 0; i < routine.length; i++) {
        array.push(routine[i](dogName,dogBreed))
    }
    return array
}