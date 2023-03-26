let student = {
    name: 'David',
    age: 18,
    eat() {
        console.log('Eat!');
    },
    'like-food': 'water',
};

for (let field in student) {
    console.log(field, student[field]);
}

console.log(student.name);
console.log(student['like-food']);

// while (true) {
// console.log('run');
// }


(() => {
    let num1 = 10;
    const run = function () {
        let num2 = 20;
        num1 = 30;
        console.log(num1, num2);
    }

    run();
    console.log(num1);
    console.log(num2);
})();