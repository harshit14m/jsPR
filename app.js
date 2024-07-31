// const arr = [7,9,0,-2];
// let n = 2;
// let newArr = [];
// for(let i=0; i<=n; i++){
//     newArr.push(arr[i]);
// }
// console.log(newArr);

// let n = 3;
// console.log(arr.splice(0,n));
// console.log(arr.slice(arr.length-n));

// let str = "";

// if(str.length!=0){
//     console.log("string have length")
// }else{
//     console.log("blank string")
// }


// let str = "haRShIt";
// let n = 4;
//     if(str[n] == str[n].toLowerCase()){
//         console.log("lower");
//     }else{
//         console.log("upper");
//     }

// let str = "harshit";
// let ele = "s";
// for(let i=0; i<str.length; i++){
//     if(str[i]=="z"){
//         console.log("exist")
//     }
// }

// const arr = ["hello",'a',23,64,99,-6];
// let item = 641;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]==item){
//         console.log("exist");
//     }
// }
// const arr = ["hello",'a',23,64,99,-6];
// let item = 641;
// if(arr.indexOf(item)==-1){
//     console.log("not exist");
// }else{
//     console.log("exist");
// }

// let str = "harshit";
// let ele = "z";

// if(str.indexOf(ele)==-1){
//     console.log(" not exist")
// }else{
//     console.log("exist");
// }

// function dice(){
//     console.log(Math.floor(Math.random()*6)+1);
// };

// dice();


// function printInfo(name, age){
//     console.log(`${name} is ${age} year old.`);
// }

// function sum(a,b){
//     console.log(`The sum ${a} and ${b} is ${a+b}.`);
// }
// sum(sum(6000,500), 458);

// function avg(a,b,c){
//     console.log((a+b+c)/3);
// }

// avg(10,20,30);

// function tab(a){
//     for(let i=1; i<=10; i++){
//         console.log(`${a} X ${i} = ${a*i}`);
//     }
// }

// tab(9);


// function table(a){
//     console.log(`table of ${a} is: `)
//     for(i=1; i<=10; i++){
//         console.log(`${a} X ${i} = ${a*i}`)
//     }
// }
// table(7);

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(sum(1,2),3));

// function isAdult(age){
//     if(age>=18){
//         return "adult";
//     }else{
//         return "not adult";
//     }
// }

// console.log(isAdult(21));
// console.log(isAdult(18));
// console.log(isAdult(17));
// let a =0;
// function sum(n){
//     for(let i=0; i<=n; i++){
//         a=a+i;
//     }
//     return a;
// }

// console.log(sum(10));

// let arr = ['h', 'a', 'r', 's', 'h', 'i', 't'];
// console.log(arr);
// let con=0;
// for (let i=0; i<arr.length; i++){
//     con=con+arr[i]
// }
// console.log(con);

// let arr = ['h', 'a', 'r', 's', 'h', 'i', 't'];
// // let conc=0;
// function conca(arr){
//     let conc='';
//     for (let i=0; i<arr.length; i++){
//         conc=conc+arr[i];       
//     }
//     return conc;
// }

// console.log(conca(arr));

// let arr = ["harshit ", "sharma ", "shikha ", "vats "]
// function concat(arr){
//     let result = "";
//     for(i=0; i<arr.length; i++){
//         result=result+arr[i]
//     }
//     return result;
// }
// console.log(concat(arr));

// function outerFunc(){
//     let x = 5;
//     let y = 6;
//     function innerFunc(){
//         console.log(x);
//     }

//     innerFunc();
// }

// console.log(outerFunc());

// let sum = function(a,b){
//     return a+b;
// }
// console.log(sum(2,6));

// function multipleGreet(func,n){
//     for(let i=1; i<=n; i++){
//         func();
//     }
// }

// function greet(){
//     console.log("Namaste ji");
// }

// multipleGreet(function randm(){console.log("Ram Ram ji")},3);

// const calcu = {
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     },
//     multi(a,b){
//         return a*b;
//     },
//     divis(a,b){
//         return a/b;
//     }
// }

// // let x = calcu.add;
// console.log(calcu.add(12,9));
// console.log(calcu.multi(34,100));


// const arr=[8,9,10,1,2,3,4,5,6,7];
// // console.log(arr.length);
// num = 5;

// function largest(arr, num){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>num){
//             console.log(arr[i])
//         }
//     }
// }
// largest(arr, num);

// function getElements(arr, num){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>num){
//             console.log(arr[i]);
//     }}
// }
// getElements(arr, num);

// let str = "abcdabcdefgggh";  //abcdefgh
// function getUnique(str){
//     let ans = "";
//     for(let i=0; i<str.length; i++){
//         let currChar = str[i];
//         if(ans.indexOf(currChar)==-1){
//             ans = ans+currChar;
//         }
//     }
//     console.log(ans);
// }
// getUnique(str);

// const country = ["Australia", "Germany", "United States of America"];
// function longestCountryName(country){
//     let ans = "";
//     for(let i=0; i<country.length; i++){
//         if(country[i].length>ans.length){
//             ans = country[i]
//         }
//     }
//     console.log(ans);
// }
// longestCountryName(country);

// let str = "abcdabcdefggghiizu";

// function countVowel(str){
//     let x = 0;
//     for(let i=0; i<str.length; i++){
//         if( str[i]=='a'||
//             str[i]=='e'||
//             str[i]=="i"||
//             str[i]=="o"||
//             str[i]=="u" ){
//             x=x+1;
//         }
//     }
//     console.log(x);
// }
// countVowel(str);

// function random(strt, end){
//     let x = Math.floor(Math.random()*end)+(strt);
//     console.log(x);
// }

// random(1,5);