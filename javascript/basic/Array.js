const myname="chintu";
const myfriends=[
    {
    name:"sandeep",
    age:22
    },
    {
        name:"santhu",
        age:24
    },
    {
        name:"rahul",
        age:23
    },
    {
        name:"sidhu",
        age:22
    }
]
myfriends.push({
    name:"bapu",
    age:23
})
console.table(myfriends)
for(let myfriend in myfriends){
    if(myfriends[myfriend].name==="rahul")
        myfriends[myfriend].age=26;
}
console.log(myfriends)
