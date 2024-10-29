function sortEvens(numArray) {
    let evenNumsToReturn = [];

    for (let i = 0; i < numArray.length; i++) {
        const num = numArray[i];
        //modulus (%) sends remainder of dividing the numbers
        if (num % 2 === 0) {
            evenNumsToReturn.push(num);
        }

        
    }

    evenNumsToReturn.sort(function (a,b) {
        return a - b;
    });

    return evenNumsToReturn;
}

function sortEvenAges(peepsArray) {
    const peepsToReturn = [];

    for (let i = 0; i < peepsArray.length; i++) {
        const lilPeep = peepsArray[i];
        if (lilPeep.age % 2 === 0) {
            peepsToReturn.push(lilPeep);
        }
        
    }

    peepsToReturn.sort(function (a,b) {
        return b.age - a.age;
    });

    return peepsToReturn;
}


console.log("Testing sortEvens()...");
//let nums = [4,2,9,1,8];
//let evenNums = sortEvens(nums);
let nums = [{ age: 4 }, { age: 2 }, {age: 9 }, {age: 1 }, {age: 8 }];
let evenNums = sortEvenAges(nums);
console.log(evenNums);