let age = 23;
let userName = "Elliot";
let hobbies = ["Sports", " Cooking", " Reading", " Travelling"];
let job = {
  title: "Bar/Hotel Manager",
  place: "Manchester",
  salary: 29700,
};

let totaladultYears;

function calculateAdultYears(userAge) {
  let result;
  result = userAge - 18;
  return result;
}

totaladultYears = calculateAdultYears(age);
console.log(totaladultYears);

age = 45;
totaladultYears = calculateAdultYears(age);

console.log(totaladultYears);

let person = {
  name: "Max", // Property
  greet() {
    // Method
    console.log("Hello!");
  },
};

person.greet();
