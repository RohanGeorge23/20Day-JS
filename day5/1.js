//1.Print odd numbers in an array 
var temp=[]
var res=function(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==1){
            temp.push(arr[i])
        }
    }
    return temp

}
console.log(res([2,3,4,5,6,7,8,9]))


//2.Convert all the strings to title caps in a string array
var titleCase= function(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  console.log(titleCase("rohan r gEorge"))



//3.Sum of all numbers in an array
var sum = 0
var res1=function(arr1){
    for(var i=0;i<arr1.length;i++){
        sum+=arr1[i]


    }
    return sum
}
console.log(res1([2,3,4,5,6,7,8,9]))



//4.Return all the prime numbers in an array
function Prime(num){
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
function isPrime(arr3){
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
//not working
function palidrome(num){

    var rev=num.split('').revere()
    if(rev==num){
        return 1
    }
    return 0
}


function isPalindrome(arr){
    var x=[]
    for(var i in arr){
        var ans=palidrome(arr[i])
        if(ans==1){
            x.push(arr[i])
        }


    }
    return x

}
console.log([12,12321,"qwqwq","malayalam",111,7])

//6.Return median of two sorted arrays of same size
var med=function(arr1,arr2,n){
    var arr=(arr1.concat(arr2))
    arr.sort(function(a, b){return a - b});    
    // return
    var a=(arr.length)/2
    var b = a-1
    var c=(arr[a]+arr[b])/2
    return c
}
console.log(med([12,21,3,44],[1,2,314,3]))



//7.Remove duplicates from an array



var dupes =function(arr){
    var x=[]

var a =arr.sort()
for(var i=0;i<a.length-1;i++){
if(a[i]==a[i+1]){
a.splice(i,1)
//       return a
a.splice(i,0,0);

}
}
del(a)

function del(a){

 for(var j=0;j<a.length;j++){

     if(a[j]!==0){
        x.push(a[j]) 
     }
 }

}
return x 


}
console.log(dupes(['q','q','g','h','d','g',12,12,13,13,12,13,12,13,32,34,452,12,23,43,43]))

//8.Rotate an array by k times
const rotateArray1 = function(nums, k) {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
      
    }
  // 
    return nums;
  }
//   const rotateArray = (arr, k) => arr.slice(k).concat(arr.slice(0, k));
  console.log(rotateArray1([12,32,41,51],3))
  
  
  
