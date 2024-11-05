const EnrollmentNumber = 22010101010;
let StudentName = "Mr.ABC";
var StudentEmail = "abc@gmail.com";
StudentCity = "Rajkot";
let StudentPassword;


console.log(EnrollmentNumber);
console.log(StudentName);
console.log(StudentEmail);
console.log(StudentCity);




//EnrollmentNumber = 220101011 // Not Allowed 
StudentName = "Mr.BCD";
StudentEmail = "bcd@gmail.com";
StudentCity = "Vadodara";


/*
Prefer not to use var
because of issue in block scope and funcitonal scope 
*/


console.table([EnrollmentNumber, StudentName, StudentEmail, StudentCity, StudentPassword])

