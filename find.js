const students1=[
    {name1: "Ali", marks4: 78},
    {name1: "Alisha", marks4:92}
];

const topStudent=students1.find(
    (s)=> s.marks4>90
);

console.log(topStudent.name1)