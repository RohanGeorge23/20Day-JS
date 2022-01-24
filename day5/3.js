//Using Arrow functions
//1.Print odd numbers in an array

let odd = (n) => {

            
    var x=[]

    for(var i=0;i<=n.length;i++){
        if(n[i]%2==1){
            x.push(n[i])

        }
    }
    return x
}
console.log(odd([11,33,77,2,32,3242,1,4]))

//2.Convert all the strings to title caps in a string array
var titleCase= (str)=> {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  console.log(titleCase("rohan r gEorge"))

//3.Sum of all numbers in an array
var sum=(n)=>{
    var count = 0
    for(var i in n){
        count+=n[i]
    }
    return count
}
console.log(sum([12,32,34,45,5,6]))

//4.Return all the prime numbers in an array

var Prime=(num)=>{
    if((num==1)||(num==0)){
        return 0
    }
    for(var i=2;i<num;i++){
        if(num%i==0){
            return 0
        }
    }
    return 1
}
var isPrime=(arr3)=>{
    var x=[]
    var flag=0
    for(var i=0;i<arr3.length-1;i++){
        var ans = Prime(arr3[i])
        if(ans==1){
            x.push(arr3[i])
        }

    }
    return x

}
console.log(isPrime([1,3,5,12, 23,43,124,5,3,9,10,11,17]))

//5.Return all the palindromes in an array
//need help
