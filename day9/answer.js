//1.a Get all the countries from Asia continent /region using Filter function


var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
//1.a Get all the countries from Asia continent /region using Filter function

var res1 =data.filter((e)=>e.region=="Asia")

console.log(res1)

//1.b    Get all the countries with a population of less than 2 lakhs using Filter function
var res2 = data.filter((e)=> e.population<200000)
console.log(res2)


//1.c Print the following details name, capital, flag using forEach function
data.forEach(i => {
    console.log(i.name , i.capital ,i.flag)
    
})

//1.4 Print the total population of countries using reduce function
var res4= data.reduce((acc,cv)=> acc+cv.population,0)
console.log(res4)


//1.5 Print the country which uses US Dollars as currency.

    
    
var res5= data.filter((e)=> e.currencies[0].code=="USD") 
console.log(res5)

   




}

