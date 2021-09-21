/* 1.Write a program to input 2 numbers and display the sum of the numbers to the console.

*/

    // let num1 = parseInt(prompt(`Enter the first number`));
    // let num2 = parseInt(prompt(`Enter the Second Number`));
    // let num3 = num1 + num2;
    // console.log(`Sum is : ` +num3);




/* 2.Write a JavaScript program to calculate the simple interest given P,R,T with the given formula.
 Formula: SI = (P * T * R) / 100 
 Where: P = principal amount T = time R = rate SI = simple interest

*/
        // let P = parseInt(prompt(`Enter the principal Amount`));
        // let T = parseInt(prompt(`Enter the Time`));
        // let R = parseInt(prompt(`Enter the rate of interest`));

        // let SI = (P * T * R) / 100;
        // console.log (`Simple Interest :` + SI);




/* 3.Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.
    Formula : 0.5 * m * v * v
*/

    // let m = parseInt(prompt(`Enter the value of Mass`));
    // let v = parseInt(prompt(`Enter the velocity`));
    // let kinetic_energy = 0.5 * m * v * v;
    // console.log(`Kinetic Energy = ` +kinetic_energy);




/* 4.Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: 
    T = (T - 32) 9/5 'T' is the temperature on the Fahrenheit scale.

*/
    // let Fahrenheit = parseInt(prompt(`Enter the tempreture in Fahrenheit`));
    // let Celsius = (Fahrenheit - 32) / 1.8 ;
    // console.log(`The tempreture in celcius is :` + Celsius);




/* 5.Calculate the area, perimeter of a s1.re of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

Formula : Area: a*a   Perimeter: 4*a Surface Area: 6*a*a  Volume: a*a*a

*/

        // let a = parseInt(prompt(`Enter the value of Side`));
    
        // let Area_of_Square = a * a;
        // let perimeter_of_square = 4 * a;
        // let surface_area_of_cube = 6 * a * a;
        // let volume_of_cube = a * a * a;

        // console.log (`Area of Square is :` +Area_of_Square);
        // console.log('Perimeter of square is :' +perimeter_of_square);
        // console.log(`Surface area of cube is : ` + surface_area_of_cube);
        // console.log (`volume of cube is : ` + volume_of_cube);
        



/* 6.Given the Cost Price(CP) and Selling Price(SP) of a product.
 Write a Program to Calculate the Profit or Loss.

*/

        // let cp = parseInt(prompt(`Enter the cost Price`));
        // let sp = parseInt(prompt(`Enter the selling price`));

        // let profit = sp - cp ;
        // let loss = cp - sp ;

        // if (sp > cp ){
        //     console.log(`profit :`+profit);
        // }
        // else if ( sp < cp){
        //     console.log(`Loss :` +loss);
        // }
        // else{
        //     console.log(`No profit No loss`);
        // }




/* 7.Write a program to calculate sum of N natural digits, as input by the users?
*/
        // let sum = 0 ,number
        // number = parseInt(prompt(`Enter the natural number`));
        // for (let i = 0 ; i<= number ; i++){
        //      sum = sum + i;
        // }
        // console.log(`Sum of ${number} Natural numbers is: ` +sum);




/* 8.Write a Program to Print N Odd Number in Descending Order.
 */

        // let number = parseInt(prompt(`Enter the number`));
        // for( i =number ; i >= 0 ; i --){
        //        if (i % 2 != 0){
        //            console.log(`Odd Numbers:`i);
        //        }
        // }


/* 9.Write a JavaScript program to compute the sum of all digits that occur in a given string.

*/

//     function sum_dig_from_string (str){
//         sum = 0;
//         for ( let i = 0 ; i < str.length ; i ++){
//             if(/[0-9]/.test(str[i]))
//                 sum  += parseInt(str[i]);
//             }
//             return sum;
      
//     }
//    console.log(sum_dig_from_string('dgdjb234'));
//    console.log(sum_dig_from_string('1234'));



/* 10.Write a JavaScript program that reverses a number.
*/

    // let number = parseInt(prompt(`Enter the number to be reversed`));
    // let n = number;
    // let rev = 0 , rem;
    // while (n > 0 ){
    //     rem = n % 10 ; 
    //     rev  =  rev * 10 + rem ;
    //     n = Math.floor(n/10) ;
    // }
    // console.log(`the reverse number is :` +rev);




/* 11.Write a Program to cyclically Rotate a Number by X positions
      in the left direction, as provided by the user.
*/
function rotate(arr, n)
{
  var x = arr[n-1],arr[n-2] , i;
  for(i = n-1; i > 0; i--)
     
      arr[i] = arr[i-2];
      arr[0] = x;   
}
 
var arr = [1, 2, 3, 4, 5];
var n = arr.length;
 
document.write("Given array is <br>");
for(var i = 0; i< n; i++)
    document.write(arr[i] + " ");
     
rotate(arr, n);
 
document.write("<br>Rotated array is <br>");
for(var i = 0; i < n; i++)
    document.write(arr[i] + " ");
     


















/* 12.Write a Program to convert Decimal to Binary.

*/

    // let number = parseInt(prompt(`Enter the Decimal Number`));
    // let Binary = number.toString(2);
    // console.log(`Binary Number of ${number} is :` +Binary);


/* 12. 

*/