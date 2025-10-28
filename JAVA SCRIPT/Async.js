function fun1(callback){
    setTimeout(()=>{(console.log("task1"));
        callback()
    },5000)
}
function fun2(callback){
    console.log("task2")
    console.log("task3")
}
fun1(fun2)