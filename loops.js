/*
for loop
for of loop
for in loop
while loop
do while loop
*/

//for loop

for(let i=0;i<5;i++){
    console.log(i)
}

//for in loop

let obj={
    Aditya:90,
    Anu:80,
    Harshit:70,
    Harsh:80
}
for(let a in obj){
    console.log(a,"marks is",obj[a])
}

//for of loop

let x=[1,50,50,40]
for(let b of x){
    console.log(b)
}