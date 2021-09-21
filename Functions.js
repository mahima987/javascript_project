//******************Easy*******************

/* 1.Given a and b, your function should return the value of ab
    Example:
    Input: power(2,3) ––> Output: 8
*/

    // console.log(Math.pow(2,3));



/* 2.Given length of a regular hexagon, your function should return area of the hexagon.
    Example:
    Input: areaOfHexagon(10) ––> Output: 259.80
    
*/
  
//   function areaOfHexagon (s){
//     return(( 3 * Math.sqrt(3) * (s * s)) / 2);
//   }
//   console.log(`Area of Hexagon:`+areaOfHexagon(10));



/* 3. Given a sentence, your functions should return the number of words in the sentence.
    Example:
    Input: noOfWords(We are alchemyst) ––> Output: 3

*/
    // function countWord(sentence){
    //     return sentence.split(" ").length;
    // }
    // console.log(`Words present in the given Sentence are: ` +countWord("We are alchemyst"));


/* 4.Given n numbers, your function should return the minimum of them all.
  The number of parameters won't be accepted from user.
    Input: findMin(3,5) ––> Output: 3
    Input: findMin(3,5,9,1) ––> Output: 1

*/
        

        // function findMin(...array) {
        //     var i = 0;
        //     var min = array[0];
        //     for (i = 1; i < array.length; i++) {
        //     if (array[i] < min) {
        //         min = array[i];
        //     }
        //     }
        //     return min;
        // }
        // console.log(findMin(3,5));
        // console.log(findMin(3,5,9,1));


/* 5.Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
    Example:
    Input: findMax(3,5) ––> Output: 5
    Input: findMax(3,5,9,1) ––> Output: 9

*/
        // function findMax(...array){
        //     var i = 0;
        //     var max = array[0];
        //     for(i=1 ; i < array.length ; i++ ){
        //         if (max < array[i]){
        //             max = array[i];
        //         }
        //     }
        //     return max;

        // }
        // console.log(findMax(3,5));
        // console.log(findMax(3,5,9,1));




/*6.Given three angles of a triange, your function should return if it is a scalen, i
    sosceles, equilateral triangle or not a triangle at all. Example:
    Input: typeOfTriangle(30, 60, 90) ––> Output: Scalen Triangle
*/

    // function typeOfTriangle(x,y,z){
    //     if (x == y && y==z){
    //         console.log("Triangle is Equilateral Triangle");
    //     }
    //     else if(x==y || y==z || z==x){
    //         console.log("Triangle is isosceles Triangle");
    //     }
    //     else{
    //         console.log("Triangle is scalen Triangle");
    //     }
    // }
    // typeOfTriangle(30,60,90);
    // typeOfTriangle(60,60,60);




//***************MEDIUM**************************** *

/* 1.Given an array, your function should return the length of the array.
  Example:
 Input: arrayLength([1,5,3,7,8]) ––> Output: 5    
 */

    // let array = [1,5,3,7,8];
    // console.log(`Array Length is:`+array.length);




/* 2.Given an array and an item, your function should return the index at which the item is present.
    Example:
    Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2
*/

    // let array = [1,6,3,5,8,9];
    // console.log(array.indexOf(3));




/* 3.Given an array and two numbers, your function should replace all entries of first number
     in an array with the second number.
    Example:
    Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]    

*/

    //   function replace (arr,first_num,second_num){
    //       for(i = 0 ; i<=arr.length;i++){
    //           if(arr[i] === first_num){
    //               arr[i] = second_num;
    //           }
    //       }
    //       return arr;
    //   }
    //   num = [1,5,3,5,6,8];
    //   console.log(replace(num,5,10));



/* 4.Given two arrays, your function should return single merged array.
   Example:
   Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]
 */

    //    let array = [1,3,5];
    //    console.log(array.concat([2,4,6]));


/* 5.Given a string and an index, your function should return the character present
     at that index in the string.
    Example:
     Input: charAt("skillsafari", 4) ––> Output: l
*/
//     let str = "Skillsafari";
//    console.log(str.charAt(4));
//    console.log(str.charAt(8));
    
/*6.Given two dates, your function should return which one comes before the other.
    Example:
    Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021       

*/
    


//*************ADVANCE*********************** *

/* 1.Write a function which generates a secret code from a given string, 
    by shifting characters of alphabet by N places. Example:
    Input: encodeString("skill", 2) ––> Output: umknn
    Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.

*/
    function encodeString(str , n){

        str = str.toLowerCase();
        var result = ' ';
        var charcode = 0;
        for(var i =0 ; i <str.length ; i++){
            charcode = (str[i].charCodeAt()) + n;
            result += String.fromCharCode(charcode);
        }
        return result

    }
    console.log(encodeString("skill" , 2));




 /* 2.Given a sentence, return a sentence with first letter of all words as capital.
    Example:
    Input: toSentenceCase('we are alchemyst') ––> Output: We Are Alchemyst 
 
 */
    // function toSentenceCase(str) {
    //     var splitStr = str.toLowerCase().split(' ');
    //     for (var i = 0; i < splitStr.length; i++) {
    //         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    //     }
    //      return splitStr.join(' '); 
    //   }
     
    // console.log(toSentenceCase("we are alchemyst"));



/* 3.Given an array of numbers, your function should return an array in the ascending order.
    Example:
    Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]
*/

//  let sortArray = [100,83,32,9,45,61];
 



