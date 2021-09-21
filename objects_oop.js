//************q01****************** */

// Given an array of objects of student's marks:

// Print the name and total marks of each student.
// Print the name of student whose total marks is highest.
// Print the name of student whose total marks is lowest.
// Print the average marks of the class in computer subject.
// Print the grades of all students:
// Grade A if total marks is higher than or equal to 75%,
// Grade B if higher than or equal to 60%,
// Grade C if higher than or equal to 35%,
// Grade D if lower than 35%.
// Print the total number of students passed and their names. Pass when total marks is greater than 35%.


const studentDetails = [
	{
		roll: "1",
		name: "Rohan Singh",
		maths: 86,
		science: 90,
		english: 75,
		computer: 85
	},
	{
		roll: "2",
		name: "Ritvik Patel",
		maths: 27,
		science: 30,
		english: 35,
		computer: 30
	},
	{
		roll: "3",
		name: "Neha Maurya",
		maths: 75,
		science: 69,
		english: 40,
		computer: 75
	},
	{
		roll: "4",
		name: "Mohit Verma",
		maths: 21,
		science: 31,
		english: 45,
		computer: 40
	},
	{
		roll: "5",
		name: "Karan Trivedi",
		maths: 70,
		science: 80,
		english: 35,
		computer: 60
	}
];



//q01


// Print the name and total marks of each student.


    let nameMarks = studentDetails.map((student) =>{
		return `${student.name} has ${student.maths + student.science + student.english + student.computer }`;

	});
	console.log(nameMarks);

//Print the name of student whose total marks is highest.
	let max =0;
	let highest = nameMarks.map((stud)=>{
	   max =  Math.max(max + stud.maths + stud.science + stud.english + stud.computer) ;
	});
	console.log(highest);


//Print the average marks of the class in computer subject.

		let avgMarks =  studentDetails.reduce((x,y) =>{
			return x + y.computer / studentDetails.length;

		},0);
		console.log(`Avarage marks of class in computer :` +JSON.stringify(avgMarks));



//**************q02********************* */

// Salary calculation using OOPS concept.

// Create a Class using ES6 in JavaScript named Employee and assign necessary
// data members and methods such as name, id, basic salary, HRA, Allowances; define getSalary method which will return the net salary.
// Create two Instances of Employee with all necessary details.
// Call the getSalary method of each instance and return the net salary based on your computation.

	// class Employee {
	// 	constructor(name,id,basic_salary,hra,allowances){
	// 		this.name=name;
	// 		this.idv=id;
	// 		this.basic_salary = basic_salary;
	// 		this.hra = hra
	// 		this.allowances = allowances;
			
	// 	}
	// 	 salary() {
	// 		 return this.basic_salary +this.hra + this.allowances;

	// 	}
		
	// }
	// const emp1 = new Employee ("Mahima" , 12345,40000,3000,1000);
	// const emp2 = new Employee ("sayali" ,87654,45000,2500,8000);;
	// console.log(`Net salary of ${emp1.name} `+emp1.salary());
	// console.log(`Net salary of ${emp2.name}` +emp2.salary());



//**************q03*************** */
// Bank Account (Object Oriented Programming in JavaScript)

// Create a class and define data members such as name, bank account number,
// account balance, account type, ifsc and name it as BankAccount.
// Create three Instances(three customers) of BankAccount with all necessary details.
// Print the name of customers and their account balances.
// Calculate the average account balance from all the instances.
	
	

// class bank {
// 	constructor(name,bank_account_number,account_balance,account_type,ifsc){
// 		this.name =name;
// 		this.bank_account_number = bank_account_number;
// 		this.account_balance = account_balance;
// 		this.account_type = account_type;
// 		this.ifsc = ifsc;
// 	}
	
// }
// const customer1 =new bank ("Mahima",124579098754,25000,'current','BKI123450');
// const customer2 =new bank ("Sayali",21234658785643,28000,'saving','BKI123450');
// const customer3 =new bank ("Sahil", 67890543236756,24000,'current','BKI123450');

// console.log(`customer name: `+customer1.name + ` Account_balance : ` +customer1.account_balance );
// console.log(`customer name: `+customer2.name + ` Account_balance : ` +customer2.account_balance );
// console.log(`customer name: `+customer3.name + ` Account_balance : ` +customer3.account_balance );

// let avg_amount = (customer1.account_balance + customer2.account_balance + customer3.account_balance) /3;
// console.log('Average account balance: '+avg_amount);



//*************************q04*************************
// Given an array of objects of items in cart, print:

// the total No. of items
// the total cart value
// the total discounted value(sum of dicounted values on each item) based on the given discount
// total tax amount (18% tax, calculated on total cart value)

const cartItems = [
	{
		id: "101",
		name: "Oreo",
		count: 2,
		price: 30.0,
		discount: 0.18
	},
	{
		id: "102",
		name: "Red Bull",
		count: 1,
		price: 99.0,
		discount: 0.15
	},
	{
		id: "103",
		name: "Dairy Milk Silk",
		count: 3,
		price: 175.0,
		discount: 0.05
	},
	{
		id: "104",
		name: "Pulse Candy Pack",
		count: 1,
		price: 135.0,
		discount: 0.2
	}
];

// the total No. of items
//console.log(`Total number of items are:`+cartItems.length);

// the total cart value
//  let cart_value = cartItems.reduce((x,y) =>{
// 	 return x + y.price;

//  },0);
//  console.log(`Total cart value:`+cart_value);



// the total discounted value(sum of dicounted values on each item) based on the given discount

// let Discount = cartItems.reduce((x,y) =>{
// 	return x + y.discount;
// },0);
// console.log(`Total discount value :` + Discount);


// total tax amount (18% tax, calculated on total cart value)


// let tax = cartItems.reduce((x,y) =>{
// 	let total_price = x + y.price;
// 	return  total_price * (18/100);
// },0);
// console.log(`total tax :` +tax);
