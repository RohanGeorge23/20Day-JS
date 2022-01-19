//Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
//Use the same rest countries and print all countries name, region, sub region and population

//create XHR object
var request = new XMLHttpRequest()

request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send()
request.onload=function(){
    var data = JSON.parse(request.response)
    for(var i in data){
        console.log(`Country Name :${data[i].name},Region :${data[i].region},Subregion:${data[i].subregion},flag"${data[i].flag}`)
    }

}
//Use the same rest countries and print all countries name, region, sub region and population
