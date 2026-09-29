const marks=[72,88,45,91,60];
for(let i=0; i<marks.length;i++){
    console.log(marks[i]);
}
let total=0;
for(const m of marks) total+=m;
console.log("Average: ", total/marks.length);