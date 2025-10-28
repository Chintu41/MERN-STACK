//    function chintu(name,callback){
//     console.log(`hello${name}`)
//     callback();
//    }
//    chintu("saikumar",()=>{
//     console.log("hey this is chintu!")
//    })

const mypromise = new Promise((resolve, reject) => {
  setTimeout(() => reject("done!"), 5000);
});
console.log(mypromise);
mypromise
  .then((response) => {
    console.log("reponse data", response);
    console.log("promise is successed!");
  })
  .catch((error) => {
    console.log("promise is rejected/failed");
  })
  .finally(() => {
    console.log("promise is either succecced/failed");
  });
