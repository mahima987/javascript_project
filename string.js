// **************Beginner to Intermediate***************
 


/* 1.Write a program that converts the string into uppercase
  */

        // let str = prompt(`Enter the string`);
        // console.log(str.toUpperCase());



/*2.Write a program that reads two strings and append first string to the second.
     So if first string is Good second string is Morning , the program should print MorningGood
 */

    //  let str1 = prompt(`Enter First String`);
    //  let str2 = prompt(`Enter second String`);
    //  console.log((str2  +  str1));



/* 3.Program that reads string and count number of characters present in the string
*/

        // let str = prompt(`enter the string`);
        // console.log( `String Length is :`+str.length);



/* 4.Write a program that converts string like "124" to 124
 */

    // let str = prompt(`Enter the string`);
    // console.log(parseInt(str));



/* 5.Write a program to delete all vowels from a string.
     Assume string is not more than 80 characters long
*/

        //    let str = prompt(`Enter the string`)
        //         let  vowels = [ 'a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O', 'U' ];
        //         let result = "";
        //         if(str.length < 80){
        //             for(let i = 0; i < str.length; i++)
        //             {
                        
        //                 if (!vowels.includes(str[i]))
        //                 {
        //                     result += str[i];
        //                 }
        //             }
        //             console.log(result);
        //         }
        //         else{
        //             console.log(`Your string lenghth is greater than 80`);
        //         }
               
            
    

            
 
 
/* 6.Write a program to check whether the string is alphanumeric or not 

*/
            // str= prompt(`Enter the alphanumeric string`)
           
            // regexp = /^[A-Za-z0-9@]+$/;
            
            //         if (regexp.test(str))
            //         {
            //         console.log('Given string is alphanumeric') ;
            //         }
            //         else
            //         {
            //            console.log('Given string is not alphanumeric') ;
            //         }
            

           
                    




/*7.A program that reads three strings and prints the longest and smallest one
 */

    // let str1 = prompt(`Enter first string`);
    // let str2 = prompt(`Enter second string`);
    // let str3 = prompt(`Enter third string`);
    // let maximum_str = 0,minimum_str = 0;
    // string1 = str1.length;
    // string2 = str2.length;
    // string3 = str3.length;
    
    // if (string1 > string2 && string1> string3){
    //     console.length(`longest string is string 1 which is :${str1}`);
    // }
    // else if(string2 > string1 && string2 > string3){
    //     console.log(`longest string is string 2 which is :${str2}`)
    // }
    // else{
    //     console.log(`longest string is string 3 which is :${str3}`)
    // }
    // if (string1 < string2 && string1 <string3){
    //     console.log(`smallest string is string 1 which is :${str1}`);
    // }
    // else if(string2 < string1 && string2 < string3){
    //     console.log(`smallest string is string 2 which is :${str2}`)
    // }
    // else{
    //     console.log(`smallest string is string 3 which is :${str3}`)
    // }




/*8.A program that counts number of vowels and consonants in a String
 */

    // let str = prompt(`Enter the string`);
    // string = str.toLowerCase();
    // var vowels = 'aeiou';
    // var consonants = 'bcdfghjklmnpqrstvwxyz'
    // counter= 0;
    // counter1 = 0
    // for(var i= 0 ; i<= string.length ; i++){
    //     for(var j= 0 ; j< vowels.length; j++){
    //         if(string[i] == vowels[j]){
    //             counter++
    //         }
    //     }
    //     for(var k = 0 ; k<consonants.length ; k++){
    //         if(string[i] == consonants[k]){
    //             counter1++;
    //         }
    //     }
    // }
    // console.log(counter+ ` vowels present in ${str}`);
    // console.log(counter1+ ` consonants present in ${str}`);




/* 9.Write a program which receives a string str that calculates the length of a string
  and return true if the length is greater than 7 without using strlen()
 */
    
        // function str_Length(str) {
        //     var length = 0;
        //     while (str[length] !== undefined){
        //       length++;
        //     } 
        //     if(length > 7){
        //         return true;
        //     }
        //     else{
        //         return false;
        //     }
        //   }
        // console.log(+str_Length(`Hello my name is mahima`));
      

    

/* 10.Write a program that takes two strings and copies smaller string into bigger string
  
  */

    //   let  str1 = prompt(`enter the string 1`);
    //   let  str2 = prompt(`Enter the second string`);
    //   if (str1.length < str2.length){
    //         str2 = str2 + str1;
    //         console.log(str2);
    //   }
    //   else{
    //       str1 = str1 + str2;
    //       console.log(str1);
         
    //   }



/*11.Given a string, determine if it is a palindrome, considering only alphanumeric characters

*/


/* 14.Write a program that masks 
   all but last four characters of the string "5565534276455423" to '#'
*/

  // let str = prompt(`Enter the string`);
  // last4 = str.substr(0,str.length-4) + '####' ;
  // console.log(last4);

/* 15.Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case

*/
   
    






//********************Advannce****************

/*1.Given an input string S and two characters c1 and c2, you need to replace
    every occurrence of character c1 with character c2 in the given string
 */

        // function replace(str,c1,c2)
        // {
        //     let len = str.length;
        //   let arr = str.split("");
          
        // for (let i = 0; i < len; i++)
        // {
          
        //     if (arr[i] == c1)
        //         arr[i] = c2;
                  
        //     else if (arr[i] == c2)
        //         arr[i] = c1;
        // }
          
        // return arr.join(" ");
        // }
        
      
        // let s = "skill safari";
        // let c1 = 'i', c2 = 'e';
        // console.log(replace(s, c1, c2));
        



/* 2.Given an input string S that contains multiple words, you need to remove all the spaces
      present in the input string. There can be multiple spaces present after any word
*/




var str1 =prompt('Enter the string');
console.log( str.split(' ').join('') );


/* 3.A program that counts the value of each character and prints the most repeated character?

*/






/* 4.Write a program to toggle case of each character of
    the string "good afternoon" (example: "skillsafari" ⇒ "sKiLlSaFaRi" )
 */
  
// let t = " ";
// function toggle (str){
//   let string = str.split('');
//   for(i = 0; i< string.length ; i++){
//     if(i % 2 != 0){
//       t += string[i].toUpperCase()
//     }
//     else{
//       t+= string[i];
//     }
//   }
//   return t;
  

// }
// console.log(toggle('good morning'));