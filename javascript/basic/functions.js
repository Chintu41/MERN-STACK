 //function 
 
//  function sum(a,b){
//     return a+b;
//  }
//  console.log(sum(10,20))



//  //Arrow function(es6)
// let add=(a,b)=>a+b;
// console.log(add(20,40))
 
 //function calling
 // function f1(){
 //     console.log("hello")
 // }
 // function f2(){
 //     console.log("this is chintu")
 //     f1()
 // }function f3(){
 //     console.log("i am aspiring mernfull stack")
 //     f2()
 // }
 // f3()


// hello(timepass);
// function hello(callback){
// console.log("hello");
// callback()
// }
// function timepass(bye){
//     console.log("play cricket")  
// }
// function bye(){
// console.log("good bye")
// }


// function sum(callback, x,z){
//     let result = x+z;
//     callback(result)
// }
// function displaymode(result){
//     console.log(result)   //for print  result in console
// }
// function displaypage(result){
//     document.getElementById("myh1").textContent=result; //display in browser
// }
// sum(displaypage,1,2); //giving values

//pushing objects into Array 
//  let studentsDB=[]; //array
//  function addstudent(name,course,age){//function
//     let student={ //object
//         name:name,
//         age:age,
//         course:course
//     }
//     studentsDB.push(student); //pushing into array
//  }
//  addstudent("chintu","MERN",23)
//  addstudent("sai","python",22);
//  console.log(studentsDB)
 

let studentsDB=[];
function studentdetails(name,age,course){
    let student={
        name:name,
        age:age,
        course:course
    } 
    studentsDB.push(student)
}
studentdetails("sandy",22,"clinical sas")
studentdetails("rakhi",22,"data science")
console.log(studentsDB)