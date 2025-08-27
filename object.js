const student = {   //object named student 
    name : "Gagan deep",
    age : 19,
    cgpa : 8.2 ,
    isPass : true,
  };
console.log("before change= ",student.age);

student["age"] = student["age"] + 1;
console.log("after change= ",student["age"]);

student["name"]= "Gagandeep.L.S";
console.log("name updated = ",student["name"]);



const product = {
    name : "Parker Ball pen" ,
    rating : 4.5 ,
    isOffer : true ,
    Offer : 35 ,
    price : 300 ,
};
console.log(product);
console.log(typeof(product));

product["Offer"]= product["Offer"] - 15;
console.log(product);

const profile = {
    username : "@notgagan" ,
    name : "Gagan Deep.L.S" ,
    isFollow : false ,
    numPost : 6 ,
    followers : 360 ,
    following : 300 ,
    tag : "student" ,
    bio : "javascript is easy" , 
};
console.log(profile);
console.log(typeof(profile["username"]));

const stud = {
    name : "Gagandeep.L.S",
    sem : "3rd" ,
    age : 19 ,
    
    languages : ["C++","C","JavaScript","HTML","python"] ,
    address : {
        city : "Banglore",
        country : "india",
    }
     
};
console.log(stud);
