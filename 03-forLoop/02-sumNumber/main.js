console.log('Starting...');
let sum = 0;
for (let i = 1; i <= 2; i++) {
    sum +=i
}
console.log(sum)
 
let howuse=0;
for(let i = 2; i <= 100; i +=2) {
    howuse += i
}
console.log(howuse)
let howareyou=0;
for(let i = 1; i <= 100; i +=2) {
    howareyou += i
}
console.log(howareyou)
let howto=0;
for(let i = 2; i<=100; i+=2){
    howto+=i**2
}
let howwill=0;
for(let i = 3; i <=100; i+=3){
    howwill+=i**2
}
let result = howto - howwill
console.log(result)