console.log('Grader project!')
//The below function outputs a grade depending on the inputted score.
let comeUpWithGrade = function (marks) {
    if (marks > 79) { return 'A' }
    else if (marks >= 60 && marks <= 79) { return 'B' }
    else if (marks >= 49 && marks <= 59) { return 'C' }
    else if (marks >= 40 && marks <= 49) { return 'D' }
    else { return 'E' }
};
//declaring a function before using the function.
let scoredMarks;

//declaring the actual function that will process the output.
function actualOperation() {
    try {
        let input = prompt('Please, enter the scored mark for the student');
        scoredMarks = parseFloat(input);
        let scoredGrade = comeUpWithGrade(scoredMarks)
        //The below if statement checks whether the input is a number and ranges from 0 to 100, in the case that all or one of the named conditions isn't met an alert is logged.
        if (isNaN(scoredMarks) === false && scoredMarks >= 0 && scoredMarks <= 100) {
            alert(`This student has scored ${scoredMarks} marks which translate to a grade ${scoredGrade}`)
        } /*The following else if statement displays and alert incase the iput is not a number.*/else if (isNaN(scoredMarks) === true) {
            alert('Please, enter a number between 0 and 100')
        } /*The following else statement logs a console error incase the number entered doesnt fall in the range.*/else { console.error('Unrecognised error occured, please check your input again.') }
    }
    //The below catch state is a precaution in the case that an unmentioned error is encountered.
    catch (error) {
        console.error('An error occured during the operation')
    };
};
//calling the function
actualOperation();