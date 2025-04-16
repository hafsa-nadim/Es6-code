// const promise = new Promise((resolve , reject)=>{
//     const randomNum = Math.random();
//      if(randomNum < 0.5){
//         resolve('success');
//      }
//      else{
//         reject('error!');
//      }
// });

// promise.then((message)=>{
// console.log(message);//success
// })
// .catch((error)=>{
// console.log(error);
// });

// const promise = new Promise((resolve, reject)=>{
//     let success = prompt('Enter Your Career achivement?');

//     if (success === 'true') {
//         resolve('Congratulations!! For your succes!!');
//     }
//     else{
//         reject('Try again until your success');
//     }
// });
// promise.then((message)=>{
// alert(message);
// })
// .catch((error)=>{
// alert(error);
// })

// const promise12 = new Promise((resolve,reject)=>{

//     let success = prompt('Enter Your Career achivement?');
//         if (success === 'true') {
//             resolve('Congratulations!! For your succes!!');
//         }
//         else{
//             reject('Try again until your success');
//         }
// });
// promise12.then((message12)=>{
// console.log(message12);
// return 'Salam Pakistan!!';
// }).then((message12)=>{
// console.log(message12);
// })
// .catch((error)=>{
// console.log(error);
// })

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello, World!");
//     }, 2000);
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Another message");
//     }, 3000);
//   });

//   Promise.all([promise2,promise1]).then((message)=>{
// console.log(message);
//   }).catch((error)=>{
//     console.log(error);
//   })

// let name = 'john';
// let age = 25;
// const data = {
//   name,
//   age , 
//   greet(){
//     console.log('Salam!!');
//   }
// }

// console.log(data);//dot notation , bracket notation
// console.log(data.greet());

// let propName = 'userId';
// const data = {};
// data[propName] = 'Alis';
// console.log(data);

// let propName = 'userId';

// const data = {
// [propName]: 'hafsa'
// }
// console.log(data);

// console.log("first");
// console.log("second");

// setTimeout(function(){
// console.log("third");
// },10000);

// console.log('four');

// function fetchData(callback){
//     console.log('Fetching Data');
//     setTimeout(function(){
//         console.log('Data Fetched!!');  
//     },10000);
//     callback();
// }
// function process(){
//     console.log("Processing data...");
// }

// fetchData(process);

// let btn = document.getElementById('btn');
// btn.onclick=()=>{
//  alert('Image download started!!')
// }
// setTimeout(()=>{
//   alert('image downloaded succesfully!')
// },2000);

// alert('end!!')

// function getData(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('Data Loaded!!')
//         },2000)
//     });
// }
// async function showData() {
//  console.log("⏳ Loading...");
//  const result = await getData(); // wait for the promise
//  console.log(result); // ✅ Data loaded!
//  console.log("🚀 All done!");
// }
// showData();

//loading
// async function makingcoffee() {
//     console.log('Starting Making Coffee!');
//     const coffee = await brewCoffee();
//     console.log(coffee);
// }

// function brewCoffee(){
//     return
// }

// function getData(){
//     return new Promise((resolve)=>{
//      setTimeout(()=>{
//  resolve("Your coffee is ready")
//      },2000);
//     })
// }

// async function setData(){
//     console.log("Your coffee is preparing");
//     let result = await getData()
//     console.log(result);
//     console.log("You can pick your coffee")
// }

// setData()

// const box = {
//     savory: 'Nimco' , 
//     sweet: 'gulab jamun',
//     sour: 'zombie'
// }

// for(const hafsa in box){
//     console.log(hafsa);
// }
// console.log(Object.keys(box));

let colors = ['black' , 'white' , 'purple', 'red'];

for(const color of colors){
    console.log(color);
}