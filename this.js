const club = {
name: "Coding Club",
members: ["Ali", "Aisha"],
showMembers: function () {
this.members.forEach((m) => {

console.log(this.name, "member:", m);

});

}
};
club.showMembers();