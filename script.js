console.log("hey");
// alert 

//assigning a variable 
var name = "John";
counter = 0;

truthStatement = true;

console.log(truthStatement);

var object = {
    name: "anil",
    phone: 10000,
    isMember: true
}

console.log(object.name);

Array_number =[ 100, 200, 300];

console.log(typeof Array_number)
console.log(Array_number [0]);

 sum =( a, b) =>{
    return a +b;
}

console.log(sum (1,2));

today = new Date();

console.log(today);

console.log(typeof today);

console.log(typeof Array_number);

console.log(typeof sum);

console.log(Math.PI);



const grade = 49;

if (grade >= 80){
    console.log("A grade")
} else if(grade >= 60){
    console.log("B grade")
} else if(grade >= 40){
    console.log("C grade")
}else{
    console.log("F grade")
}

var ternary = 9;
var temporaryVariable = 0;

temporaryVariable =  ternary == 10 ? ternary : ternary ==9? 90 : 100;

console.log(temporaryVariable);


a = 9;
b = 5;

y = a < 10 ? a * 4 : b==5 ? b * 3 : 0; 

console.log(y);

let variable = 10;


try{
    let variable = 10;

}
catch (error){
    console.log(error());
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}
 
i =0 ;
while (i<10) {
    console.log(i);
    i++;
}

i=8;
do {
    console.log("Do while")
    i++;
} while (i<10);