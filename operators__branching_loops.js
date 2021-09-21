// *********************************EASY**************************************


/* 1.Write a program to add 5 numbers. 
The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.*/
    
    // var array = [5,13,7,21,48];
    // sum = 0;
    // for(let i = 0; i < array.length; i++){
    //     sum += array[i];
    // }
    // console.log(`Sum :` +sum);




/*  2.  Write a program to take a number input from user and determine whether 
the number is odd or even.*/


    // let number = prompt("Enter the number");
    // if(number % 2 == 0){
    //     console.log(`given number is even number`);
    // }
    // else{
    //     console.log(`Given number is odd Number`);
    // }


/* 3.Write a program to find the maximum and minimum out of two given numbers.
 The numbers are num1=129 and num2=251.
   */

    // let arr = [129,251];
    // console.log("MAXIMUM NUMBER:" +Math.max.apply(Math,arr));
    // console.log("MINIMUM NUMBER:" +Math.min.apply(Math,arr));

/*  4. Write a program to find the maximum out of three given numbers. 
The numbers are num1=8, num2=23 and num3=17.
*/
    // let largest = Math.max(8,23,17);
    // console.log("The Maximum number is:" +largest);


/*  5. Write a program to find the minimum out of three given numbers.
 The numbers are num1=35, num2=29 and num3=46. 
*/
    // let minimum = Math.min(35,29,46);
    // console.log("The Minimum Number is :" +minimum);


 /*
 6.
 */ 


 //***************************INTERMEDIATE***************************


 /*   
 1.Fizzbuzz - Write a program to return an array from 1 to 100. But for every
  multiple of 3, replace the number with "Fizz", for every multiple of 5, 
  replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".
 */
     

    // const result = Array.from({ length: 100 }, (_, i) => {
    //     const n = i + 1
    //     if (n % 15 === 0) return 'FizzBuzz'
    //     if (n % 3 === 0) return 'Fizz'
    //     if (n % 5 === 0) return 'Buzz'
    //     return n
    //   })
      
    //   console.log(result);


    
      


/*2.Print the following star pattern :-

*
* *
* * *
* * * *
* * * * *
*/
    // for (let i = 1; i <=5 ; i++){
    //     let output = "  ";
    //     for (let j=1 ; j<=i ;j++)
    //         output += " * ";
        
    //     console.log( output);
    // }


/*3. Write a program to take a number input from user and 
    print multiplication table 12 times for that number.
*/ 

   
    // const num = parseInt(prompt("Enter The Number"));
    // for (i= 1 ; i<= 12; i++){
    //     const result = i * num ;
    //     console.log(`${num} * ${i} = ${result}`);
    // }



/* 4. Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....
 */ 
    
        //     const number = parseInt(prompt('Enter the number of terms: '));
        //     let n1 = 0, n2 = 1, nextTerm;

        //    console.log('Fibonacci Series:');
        //    console.log("<br>")

        //     for (let i = 1; i <= number; i++) {
        //    console.log(n1);
           
        //     nextTerm = n1 + n2;
        //     n1 = n2;
        //     n2 = nextTerm;
        //      }


/* 5. Write a program to take an input from a user and find its Factorial. 
     Example: Factorial of 5 is 120
*/
            // // take input from the user
            // const number = parseInt(prompt('Enter a positive integer: '));

            // // if number is negative
            // if (number < 0) {
            //     console.log('Error! Factorial for negative number does not exist.');
            // }

            // // if number is 0
            // else if (number === 0) {
            //     console.log(`The factorial of ${number} is 1.`);
            // }

            // // if number is positive
            // else {
            //     let fact = 1;
            //     for (i = 1; i <= number; i++) {
            //         fact *= i;
            //     }
            //     console.log(`The factorial of ${number} is ${fact}.`);
            // }



/* 6.Write a Program to take a number input from user and find if the number is Prime or not.

*/

            // const num = prompt("enter the number");
            // let isPrime = true ;
            // if (num === 1)
            // {
            //     console.log ("${num} is not prime number");  //if number is 1
            // }
            // else if ( num > 1){    // the number is greater than 1
            //     for( i = 2; i< num;i++){
            //         if ( num % i == 0){
            //             isPrime = false;
            //             break;
            //         }
            //     }
            //     if (isPrime){
            //        console.log(`${num} is a prime number`);
            //     }
            //     else{
            //         console.log(`${num} is not prime number`);
            //     }
            // }
            // else{
            //        console.log("the number is not prime number");  // the negative number
            // }


 /*7.Write a program to take a day as an input and determine whether it is a weekday or weekend.
     Example: Tuesday is weekday.
 */  


     let input = prompt("Enter the day");
     var weekday = [ 'monday' , 'tuesday' , 'Wednesday','thursday' ,'friday'];
     var weekend =['saturday' ,'sunday'];
     if (weekday.indexOf(input) != -1){
         console.log("It is weekday")
     }
     else if(weekend.indexOf(input) != -1){
         console.log("It is Weekend")
     }
     else{
         console.log("You Enter Invalid Input!");
     }