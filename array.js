//********************beginner - intermediate***************

/* 1.Find sum of an array and display the output . Example [10,4,5,2,5,6,9].

*/

    // let array = [10,4,5,2,5,6,9];
    // sum = 0;
    // for(let i =0 ; i< array.length;i++){
    //         sum += array[i];
    // }
    // console.log(`The sum of given Array is :` +sum);




/* 2.Find average of an array and display the output.

*/
//    let arr =  [10,23,4,6,8,8];
//    total = 0;
//    for(let i =0 ; i< arr.length;i++){
//         total += arr[i];
//    }
//     let avg = total / arr.length;
//     console.log(`Avarage of array:`+avg);




/* 3.Find maximum and minimum of an array.
 */
//    let array = [10,45,78,98,23,54,23];
//    console.log(`Maximum number in array:`+Math.max(...array));
//    console.log(`Minimum number in array :`+Math.min(...array));



/* 4.Find Median and Mode of an array.
    Median : (N+1/2)th term.
    Mode : Most repeating term
*/

    // function findMedian(arr,n)
    // {
    //     arr.sort();
    
       
    //     if (n % 2 != 0)
    //         return a[n / 2];
    
    //     return (arr[Math.floor((n-1)/2)] +
    //             arr[n / 2]) / 2;
    // }
    // let arr = [12,56,34,2,1,8];
    // let n = arr.length;
    // console.log(findMedian(arr,n));



/* 5.Find sum of two arrays.
     [3,5,2,9,4] = 3+5+2+9+4 = 23
    [6,2,8,1,3] = 6+2+8+1+3 = 20
     Final Output : 20+23 = 43

*/
    // let arr1 = [3,5,2,9,4];
    // let arr2 = [6,2,8,1,3];
    // let sum=0 ,sum1 =0, sum2 = 0;
    // for(let i=0; i<arr1.length ;i++){
    //     sum1 += arr1[i];
    // }
    // for(let i=0 ; i<arr2.length;i++){
    //     sum2 += arr2[i];
    // }
    // console.log(`The sum of first array is:`+sum1);
    // console.log(`The sum of second array is:`+sum2);

    // sum = sum1 + sum2;
    // console.log(`Sum of two arrays is:`+sum);



/*6.Find number of constants and vowels in a string

// */
//         let str = prompt(`Enter the string`);
//         string = str.toLowerCase();
//         var vowels = 'aeiou';
//         var consonants = 'bcdfghjklmnpqrstvwxyz'
//         counter= 0;
//         counter1 = 0
//         for(var i= 0 ; i<= string.length ; i++){
//             for(var j= 0 ; j< vowels.length; j++){
//                 if(string[i] == vowels[j]){
//                     counter++
//                 }
//             }
//             for(var k = 0 ; k<consonants.length ; k++){
//                 if(string[i] == consonants[k]){
//                     counter1++;
//                 }
//             }
//         }
//         console.log(counter+ ` vowels present in ${str}`);
//         console.log(counter1+ ` consonants present in ${str}`);





/* 7.Shift an array by X to right.
     Example [1,2,3,4,5] after shifting to right [5,1,2,3,4]
*/

        //     function rotate(arr, n)
        //     {
        //     var x = arr[n-1], i;
        //     for(i = n-1; i > 0; i--)
        //         arr[i] = arr[i-1];
        //     arr[0] = x;   
        //     }
        //     var arr = [1, 2, 3, 4, 5];
        //     var n = arr.length;
            
        //     console.log("Given array is ");
        //      for(var i = 0; i< n; i++){
        //         console.log(arr[i] + " ");                    
        //      }
                  
        //    rotate(arr, n);
            
        //     console.log("Rotated array is ");
        //      for(var i = 0; i < n; i++){
        //         console.log(arr[i] + "");
        //      }
            
           
//**************Advanced********************

/*1.Find the sum of two matrix.
// */
//                     let arr1 = [[1,2,3],
//                                 [4,5,6],
//                                 [7,8,9]
//                             ];

//                 let arr2 = [[7,2,3],
//                             [4,9,6],
//                             [1,3,9]
//                             ];
                    
//                     let arr3 = [[0,0,0],
//                                 [0,0,0],
//                                 [0,0,0]
//                             ];
//                console.log("Matrix A (3 x 3):<br>");
//                     for(i=0; i<3; i++)
//                     {
//                         for(j=0; j<3; j++)
//                         console.log(arr1[i][j] + " ");
                        
//                     }
               
//                console.log("Matrix B (3 x 3):<br>");
//                     for(i=0; i<3; i++)
//                      {
//                         for(j=0; j<3; j++)
//                          console.log(arr2[i][j] +" ");
                    
//                         }
               
//                console.log("Sum of Matrix:<br>");
//                     for(i=0; i<3; i++)
//                         {
//                             for(j=0; j<3; j++)
//                             {
//                             arr3[i][j] = arr1[i][j] + arr2[i][j];
//                             console.log(arr3[i][j] +" ");
//                             }
                         
//                         }
    
    



/*2.Display transpose of matrix
 */
    // let arr1 = [[1,2,3],
    //             [4,5,6],
    //             [7,8,9]
    //            ];
    // let arr2 = [[],
    //             [],
    //             []
    //            ];
    
    // for(let i= 0 ; i <3 ;i++){
    //     for(let j = 0 ; j<3 ; j++){
    //         arr2[i][j] = arr1[j][i]
    //     }
    // }
    //     console.log(`transpose Matrix of ${arr1} is`)
    //     for(let i = 0 ; i <3 ; i++){
    //         console.log( arr2[i] + " ");
    //     }




 /* 3.Find Identity matrix. 

 */       
        // function is_identity_Matrix(matrix) {
        //     for (var i = 0; i < matrix.length; i++) 
        //     {
        //     for (var j = 0; j < matrix.length; j++)
        //     {
        //         if (matrix[i][j] !== 1 && i === j || matrix[i][j] && i !== j)
        //         {
        //         return 'Matrix is not identity Matrix'
        //         }
        //     }
        //     }
        //     return 'Matrix is identity Matrix'
        // }
        // console.log(is_identity_Matrix([[1, 0, 0],  [0, 1, 0],  [0, 0, 1]]));
        // console.log(is_identity_Matrix([[5, 1, 0],  [0, 5, 0],  [0, 0, 5]]));

  
      
    
    

  
            