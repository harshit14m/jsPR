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

// Question 1
// console.log(`_________Question 1_______`);
// let str = "harshit";
// console.log(str.length); //7

// console.log(`_________Question 2_______`);
// let fName = "Harshit";
// console.log(fName[0]); // H

// console.log(`_________Question 3_______`);
// console.log(fName[(fName.length)-1]); //t error


// console.log(`_________Question 4_______`);
// let x = "apnacollege"+123;
// console.log(x); // apnacollege123

// console.log(`_________Question 5_______`);
// let y = "";
// let z = " ";
// console.log(y.length); // 0
// console.log(z.length); // 1

// let color = "yellow";

// if(color=="red"){
//     console.log("stop");
// }
// if(color=="yellow"){
//     console.log("wait");
// }
// if(color=="green"){
//     console.log("go");
// }

// let size = "a";
// if(size == 'xl'){
//     console.log(250);
// }else if(size == 'l'){
//     console.log(200);
// }else if(size == 'm'){
//     console.log(150);
// }else if(size == 's'){
//     console.log(100);
// }else{
//     console.log("wrong input");
// }

// let str = "apps";
// if(str[0]=='a' && str.length>3){
//     console.log("good");
// }else{
//     console.log("bad");
// }

// let num = 12;
// if((num%3===0)&&((num+1==15) || (num-1==11))){
//     console.log("safe");
// }else{
//     console.log("unsafe");
// }

// let day = 8;
// switch (day) {
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thrusday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;
//     default:
//         console.log("wrong input");
//         break;
// }

// let num = 12301;
// if(num%10==0){
//     console.log("good");
// }else{
//     console.log("bad");
// }

// let userName = "Harshit";
// let age = 34;
// console.log(`${userName} is ${age} years old age.`);

// let quater = prompt("enter your quater");
// let inputQuater = parseInt(quater);
// switch(inputQuater){
//     case 1:
//         console.log("J,F,M");
//         break;
//     case 2:
//         console.log("A,M,J")
//         break;
//     case 3:
//         console.log("J,A,S");
//         break;
//     case 4:
//         console.log("O,N,D");
//         break;
//     default:
//         console.log("Wrong input");
//         break;
// }

// let str = "Aapa

// let x = 125;
// let y = 238;
// let z = 238;
// if(x>y && x>z){
//     console.log(x, "x");
// }else if(y>x && y>z){
//     console.log(y, "y");
// }else if(z>x && z>y){
//     console.log(z, "z");
// }

// let x = 32123;
// let y = 47852;

// if(x%10==y%10){
//     console.log("same last digit");
// }else{
//     console.log("different last digit");
// }

// let str = "   help!   ";
// console.log(str.trim().toUpperCase());

// let nam = "ApnaCollege";
// console.log(nam.slice(4,9)); //Colle
// console.log(nam.indexOf("na")); // 2
// console.log(nam.replace("Apna","Our")); //OurCollege
// let newNam = nam.slic

// let months = ['jan', 'jul', 'mar', 'aug'];
// months.shift();
// months.shift();
// months.unshift("june");
// months.unshift("july");
// console.log(months);
// months.splice(0,2, "july", "june")
// console.log(months);

// let lang = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql']
// console.log(lang.reverse().indexOf('javascript'));

// let arr = [7,9,0,-2];
// let n = 3;
// let ans = arr.slice(arr.length-n);
// console.log(ans);

// let str = "harshit";
// if(str.length!=0){
//     console.log("not blank")
// }else{
//     console.log("blank")
// }

// let str = "haRShiT";
// let n = 4;
// if(str[n]==str[n].toLowerCase()){
//     console.log("lower");
// }else{
//     console.log("upper");
// }

// let str = "haRShiT";
// let n = 's';
// if(str.indexOf(n)==-1){
//     console.log("not exist");
// }else{
//     console.log("exist")
// }

// const student = {
//     name: "Harshit",
//     age: 34,
//     english: 100,
//     maths: 90,
//     science: 80,
//     getAvg(){
//         console.log(this);
//         let avg = ((this.english+this.maths+this.science)/3)
//         console.log(`${this.name} got ${avg} average marks and grade equals to ${this.grade}.`)
//     },
//     grade: "A+" 
// }
// console.log(student.getAvg());

// console.log("Hello");
// console.log("Hello");
// let a = 5;
// try{
//     console.log(a);
// }catch{
//     console.log("caught error... a is not defined.")
// }
// console.log("Hello2");
// console.log("Hello2");
// console.log("Hello2");

// let sum = (a,b) => {
//     console.log(a+b);
// };
// sum(3,5);

// const cube = (a) => {console.log(a*a*a)};
// cube(9);

// const pow = (x,y) => {
//     console.log(x**y);
// }

// pow(3,5);

// const mul = (a,b) => a*b;

// let x = mul(3,5);
// console.log(x);

// const sum = (a,b) => a+b;
// console.log(sum(5,6));

// console.log("hi there!!!");
// const func = () => {console.log("delhi")};
// setTimeout(func,1000);
// console.log("welcome to");

// let x = setInterval(()=>console.log("hello"), 2000);
// let y = setInterval(()=>console.log("Harshit"), 3000);

// const student = {
//     name: "Aman",
//     marks: 95,
//     prop: this,
//     getName: function(){
//         console.log(this);
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this);
//         return this.marks;
//     },
//     getInfo1: function(){
//         setTimeout(() => {
//             console.log(this);
//         }, 2000);
//     },
//     getInfo2:  function(){
//         setTimeout(function(){
//             console.log(this);
//         }, 2000);
//     },
// };

// let sqN = (a) => {
//      return a*a;
// }

// console.log(sqN(5));

// let sqNo = (n) => (n*n);
// console.log(sqNo(6));

// let func = () => {
//     setInterval(() => {
//         console.log("Hello world");
//     }, 2000);
// }

// func();

// let func = function(){
    
//         setTimeout(() => {
//             console.log("hello World");
//     }, 2000)};

// func();


// let id = setInterval(() => {
//     console.log("Hello world");
// }, 2000);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("clear Interval done")
// }, 10000);

// let arr = [ 2,4,6,8]
// let sum = 0;
// let arrayAverage = (arr) => {
//     for(let i=0; i<arr.length; i++){
//         sum = sum + arr[i];
//     }
//     console.log(sum/arr.length);
// }

// arrayAverage(arr);

// let even = (n) => {
//     if(n%2 == 0){
//         return "even";
//     }else{
//         return "not even";
//     }
// };

// console.log(even(4));


// const object = {
//     message: 'Hello,World!',
//     logMessage(){
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage,1000);


// let length = 4;
// function callback() {
//     console.log(this.length);
// }


// const object = {
//     length: 5,
//     method(callback) {
//         callback();
//     },
// };

// object.method(callback,1,2);

// const arr = [5,5,5,2,2,2,2,2,9,4];
// const counts = {};
// for(const num of arr){
//     counts[num] = counts[num]?counts[num]+1:1;
// }

// console.log(counts);
// console.log(counts[5]);

// const arr = [5,5,5,2,2,2,2,2,9,4];
// count = {};
// for(let numb of arr){
//     count[numb] = count[numb]?count[numb]+1:1;
// }
// console.log(count);

// function countString(str, letter){
//     let count = 0;
//     for(let i=0; i<str.length; i++){
//         if(str.charAt(i)===letter){
//             count=count+1
//         }
//     }
//     return count;
// }

// const str = prompt("enter a string");
// const letter = prompt("enter a letter to check");
// const result = countString(str, letter)
// console.log(result);

// let arr = [1,2,3,4,5];
// function printel(el){
//     console.log(el);
// };
// let printEl = function(El){
//     console.log(El);
// }

// let printEl = (Els) => {
//     console.log(Els)
// }
// printEl(arr);

// let printEl = (el) => {
//     console.log(el);
// };

// arr.forEach(printEl);

// arr.forEach(function(el){
//     console.log(el);
// })

// arr.forEach((el) =>{
//     console.log(el);
// })

// let arr = [{
//     nam: "harshit",
//     number: 90
// },{
//     nam: "hanu",
//     number: 100
// },{
//     nam: "shikha",
//     number: 95
// }];
// arr.forEach((el) => {
//     console.log(el.number);
// })

// let arr = [1,2,3,4,5,6];

// let double = function(el) {
//     console.log(el*2);
// }

// arr.map(double);

// let double = arr.map(function(el) {
//     return el*2;
// });

// let double = arr.map((el) => {
//     return el*2;
// });

// console.log(double[2]);

// let student = [{
//     nam: "harshit",
//     number: 90
// },{
//     nam: "hanu",
//     number: 100
// },{
//     nam: "shikha",
//     number: 95
// }];

// let newStudent = student.map((el)=> {
//     return el.number/10;
// })

// let nums = [2,6,8,4]

// let newNums = nums.filter((el) => {
    // return el%2 == 0;
    // return el%2 != 0;
    // return el<5;
    // return el>5;
// });
// console.log(newNums);

// let ever = nums.every((el) => {
//     return el%2!=0;
// });
// console.log(ever);

// let som = nums.some((el) => {
//     return el%2!=0;
// })
// console.log(som);

// let arr = [1,2,3,4];
// let finalVal = arr.reduce((res,el) => res/el);
// console.log(finalVal);

// let nums = [2,3,34,5,13,4,7,8,1,2,56];
// let finalRes = nums.reduce((res, el) => {
//     if(res<el){
//         res = el;
//     }
//     return res;
// });
// console.log(finalRes);

// let nums = [2,3,34,5,130,40,70,80,10,20,560];
// let result = nums.every((el)=>{
//     return el%10==0;
// });
// console.log(result);

// let nums = [2,3,34,5,130,40,70,80,10,20,560];
// function getMin(nums) {
//     let ans = nums.reduce((res,el) =>{
//         if(res<el){
//             return res;
//         }else{
//             return el;
//         }
//     });
//     return ans;
// }
// console.log(getMin());
// let ans = nums.reduce((res,el) =>{
//     if(res<el){
//         return res;
//     }else{
//         return el;
//     }
// });
// console.log(ans);

// let sum = function(a,b=13){
//     return a+b;
// };
// console.log(sum(14,3));

// console.log(..."Harshit");

// let nums = [212,23,34,5,1340,40,70,80,10,20,-560];
// console.log(Math.min(...nums));
// console.log(Math.max(...nums));
// console.log(...nums);
// let arr = [...nums];
// console.log(nums);
// console.log(arr);

// let char = "harshit";
// let newChar = [...char];
// console.log(char);
// console.log(newChar);

// let odd = [1,3,5,7,9];
// let even =[2,4,6,8,10];
// let numb = [...odd,...even];
// let numbs = [...even, ...odd];
// console.log(numb);
// console.log(numbs);

// let data = {
//     email: "asdf@gamil.com",
//     password: "asdf"
// }
// let dataCopy = {...data, id: 213};
// console.log(dataCopy);
// console.log(data);
// data.id = 123;
// console.log(data);

// let odd = [1,3,5,7,9];
// let oddObj ={...odd};
// console.log(oddObj);
// console.log(..."harshit");
// console.log([..."harshit"]);
// console.log({..."harshit"});

// function sum(...args){
//     for(let i=0; i<args.length; i++){
//         console.log("you gave us:", args[i]);
//     }
// };
// sum(1,2,3,4,5,6);

// function min(a,b,c,d){
//     console.log(arguments);
// }

// min(1,2,3,4);

// function min(...args){
//     return args.reduce((min,el) => {
//         if(min>el){
//             return el;
//         }else {
//             return min;
//         }
//     })
// };

// console.log(min(1,2,-3,-4,-1,5));

// let names =["tony", "bruce", "steve", "peter", ];
// let [winner, runner] = ["steve", "bruce"];
// console.log(winner, runner);

// let nums = [1,2,3,4,5];
// let double = nums.map(function(el) {return el*2});
// console.log(double);

// let doubles = nums.map((els)=>{
//     return els*2;
// })
// console.log(doubles);

// let student = [{
//     nam:"harshit",
//     mark:90
// },{
//     nam: "goldy",
//     mark: 89
// }]
// let gpa = student.map((el)=> {
//     return el.mark/10;
// });
// console.log(gpa);

// let nums = [1,2,3,4,5];

// let square = nums.map((el) => {el**2});
// let sum = nums.reduce((res, el)=>{
//     return res + el;
// })

// let avg = sum/nums.length;
// console.log(avg);

// let nums = [1,2,3,4,5];
// let finalRes = nums.map((el)=>{
//     return el+5;
// })
// console.log(finalRes);

// let strings = ["adam","bob","catlyn","donald","eve"];
// let newArr = strings.map((el)=>{
//     return el.toUpperCase();
// })
// console.log(newArr);

// const doubleAndReturnArgs = (arr, ...args) => [
//     ...arr,
//     ...args.map((el)=>{
//         return el*2
//     })

// ]

// console.log(doubleAndReturnArgs([1,2,3],4,5,6));

// const news = (arr, ...arg) => {
//     let double = arg.map((el) => el*2)
//     return [...arr, double];
// }

// console.log(doubleAndReturnArgs([10, 20], 30, 40, 50));

// const mergeObjects = (obj1,obj2)=>({...obj1, ...obj2});

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// const merged = mergeObjects(obj1, obj2);
// console.log(merged);
