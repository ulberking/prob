
function setup() {
  createCanvas(800, 800);
  //  var arr = [5,4635,576,2543,875,24,89,365,765,234]
  //  for(i=0;i<arr.length;i++){
  //    if(arr[i]%2==1){
  //      console.log(arr[i])
  //    }
  //  }
  
  } 

function draw() {
  background("white");
  text("I have a bug, i can't do some lot of things",400,400)
}
function factors(){
  var f = 683
  for(i=1;i<=f;i++){
    if(f%i==0){
      console.log(i)
    }
  }
}
function factors2(){
  var f = 256
  var n = 0
  for(i=1;i<=f;i++){
    if(f%i==0){
      n = n+1
    }
  }
  console.log(n)
}
function primenumber(){
  var f = 2
  var n = 0
  for(i=1;i<=f;i++){
    if(f%i==0){
      n = n+1
    }
  }
  if(n==2){
    console.log("prime number")
  }
  else{
    console.log("non prime number")
  }
}
function perfectnumber(){
  var f = 6
  var n = 0
  for(i=1;i<f;i++){
    if(f%i==0){
      n = n+i
    }
  }
  if(n==f){
    console.log("perfect number")
  }
  else{
    console.log("non perfect number")
  }
}
function one(){
  for(i=0;i>=10;i++){
    console.log(Math.pow(10,i))
  }
}
function two(){
  for(i=0;i<=9;i++){
    console.log(Math.pow(2,i))
  }
}
function three(){
  for(i=1;i<=10;i++){
    console.log(Math.pow(i,2)+1)
  }
}
//5,55,555,5555 .. 10 terms
function zerofive(){
  var a = 0
  for(i=1;i<=10;i++){
    a=a/10+0.5
    console.log(a)
  }
}
function countdegit(){
  var a = 58587456
var degit = 0
var counter = 0
  while(a>0){
    degit = a%10
    counter = counter+1
    console.log(degit)
    a=Math.trunc(a/10)
  }
  console.log("we have "+counter+" degits")
}
function cube(){
  var a = 6356
  var b = a
  var degit = 0
  var pow = 0
  var nb = 0 
  while(a>0){
    degit = a%10
    pow = Math.pow(degit,3)
    nb = nb+pow
    a=Math.trunc(a/10)
  }
  if(b==nb){
    console.log("your number is automorphic")
  }
  else{
    console.log("your number isn't automorphic") 
  }
}