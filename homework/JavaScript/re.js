let word = "name:Chen-Xianzheng age:18 profession:student email:s111010540@student.nqu.edu.tw";  
let re0 =/[0-9]+/g;
let re1 =/[a-z]+/g;
let re2 = /:([0-9a-zA-Z])+/g;
let re3 = /:([0-9a-zA-Z])+/;
let re4 = /:([0-9a-zA-Z]+)/;
let re5 = /:\D+/g;
let re6 = /:\d+/g;
let re7 = /\w/g;
let re8 = /\w+@[\w\.]+/g;
let re9 = /\w+@[a-z].[a-z.]+/g;



console.log(word.match(re0));
console.log(word.match(re1));
console.log(word.match(re2));
console.log(word.match(re3));
console.log(word.match(re4));
console.log(word.match(re5));
console.log(word.match(re6));
console.log(word.match(re7));
console.log(word.match(re8));
console.log(word.match(re9));
