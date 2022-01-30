/*1Q. The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:
    title, which is a String representing the title of the movie
    studio, which is a String representing the studio that made the movie   
    rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
*/


class Movie{
    constructor(title,studio,rating="PG"){
        this.title = title
        this.studio = studio
        this.rating = rating

    }
    getPG(i){
        var temp=[];
     for(let j=0;j<i.length;j++){
         if(i[j].rating=="PG")
             temp.push(i[j])
     }

     return temp;
        
    }


}
/*1.a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio,
 and a String representing the rating as its arguments, and sets the respective class properties to these values.
*/
let m1 = new Movie("Horrorr","India","PG")
console.log(m1)

/*1.b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
 */
let m2 = new Movie("Horrorr","Asia")
console.log(m2)


//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input 
//  array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
let m3 = new Movie("Mad Max","India","PG")
let m4 = new Movie("Lucy","UK","UG")
let m5 = new Movie("Cr7","portugal","A1")
let m = new Movie()
let mz = [m1,m2,m3,m4,m5]

console.log(m.getPG(mz))



//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

var n = new Movie("Casino Royale","Eon Productions","PG13")
console.log(n)



   