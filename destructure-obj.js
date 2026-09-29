const student3 = { name3: "Ali", marks7: 78, city: "Islamabad" };

const name = student3.name3;

const marks7 = student3.marks7;


const { name3: name2, marks7: marks8 } = student3;


const { name3: studentName } = student3;



function showStudent({ name3, marks7 }) {

console.log(`${name3}: ${marks7}`);

}

showStudent(student3);