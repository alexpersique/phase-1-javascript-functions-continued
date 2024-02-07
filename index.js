// code your solution here
function saturdayFun (activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}



 


const mondayWork = function (activity = "go to the office") {
        return `This Monday, I will ${activity}.`;

}

console.log(mondayWork());
console.log(mondayWork ("drink"));


function wrapAdjective (someValue="*") {
    const innerFunction = function (you = "special") {
    return `You are ${someValue}${you}${someValue}!`;
    };
    return innerFunction;

}

console.log(wrapAdjective ("*") ("A dedicated programmer"));
console.log(wrapAdjective ("%") ("A dedicated programmer"));


