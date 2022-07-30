// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

function calculateAverage(array) {
    let sum = 0;

    for(let values of array)
        sum += values;

    return sum / array.length;
}

function calculateGrade(array) {
    let averageMark = calculateAverage(array);

    if(averageMark < 60) return 'F';
    if(averageMark < 70) return 'D';
    if(averageMark < 80) return 'C';
    if(averageMark < 90) return 'B';
    return 'A';

}

const array = [80, 80, 50];

console.log(calculateGrade(array));