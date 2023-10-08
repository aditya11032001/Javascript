const item={
    aditya:true,
    mishra:false,
    marks:67
}
console.log(item)
item['harshit']=true    //adding new key value
console.log(item)       

//print value of key--aditya
console.log(item['aditya'])     
console.log(item.aditya)

item['marks']=100     //update the value of key--marks
console.log(item)
