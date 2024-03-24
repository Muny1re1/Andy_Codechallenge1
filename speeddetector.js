console.log('Second project!')
//declaring variables before using them in function.
let speed;
let points;
let driverName;
let demeritPoints;
//coming up with a function that calculates the demerit points. 
function comeUpWithDemeritPoints() {
    if (speed <= 70) {
        demeritPoints = 0;
        alert('ok');
        console.log('ok');
    } else if (speed >= 70) {
        demeritPoints = Math.floor((speed - 70) / 5)
        alert(`${driverName.toUpperCase()}, you have received ${demeritPoints} demerit points.`);
        console.log(`${driverName.toUpperCase()}, you have received ${demeritPoints} demerit points.`)
    }
    demeritPoints = Math.floor((speed - 70) / 5)
    if (speed >= 70 && (demeritPoints === 12)) {
        alert(`${driverName.toUpperCase()}! You have received ${demeritPoints} points. This is your final warning. If you do not slow down to the required limit your license will be suspended.`);
        console.log(`${driverName.toUpperCase()}! You have received ${demeritPoints} points.`)
    }
    if(demeritPoints > 12) {
        alert(`${driverName.toUpperCase()}! Your license has been suspended. Visit your nearest police station for further instructions.`);
        console.log(`${driverName.toUpperCase()}! Your license has been suspended`);    
    }

}
let input;
// coming up with a function that prompts the user to enter a drivers name and their speed.
function actualOperation() {
    driverName = prompt('Please enter the drivers name.')
    input = prompt('Please enter your speed in Km/s. Speed must be a number.');
    speed = parseFloat(input);
    if (isNaN(speed) === true) {
        alert('ensure that the input is a number')
    } else if (isNaN(speed) === false) {
        return comeUpWithDemeritPoints(speed);
    }
}
actualOperation();