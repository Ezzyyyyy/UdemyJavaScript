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
  return userAge - 18;
}

totaladultYears = calculateAdultYears(age);
alert(totaladultYears);

age = 45;
totaladultYears = calculateAdultYears(age);

alert(totaladultYears);

let person = {
  name: "Max", // Property
  greet() {
    // Method
    alert("Hello!");
  },
};

person.greet();
