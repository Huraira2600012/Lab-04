const students2=[
    {name: "Ali", marks: 78},
    {name: "Alisha", marks: 92},
    {name: "Bilal", marks: 41},
    {name: "Sara", marks: 65}
];

const passingNames=students2
.filter((s)=>s.marks3>=50)
.sort((a,b)=>b.marks3-a.marks3)
.map((s)=>s.name);

console.log(passingNames);