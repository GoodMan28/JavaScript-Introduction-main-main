// Types: This is similar as interface but provides the union and intersection of various types
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202


// function add(a: StringOrNumber, b: StringOrNumber) {
//   return a + b
// }  !! Here the TS will complain because the JS can add various combinations of string and number
// But TS complains and only provides (String + String) and (Number + Number)
// Workaround: Type Narrowing

function add(a: StringOrNumber, b: StringOrNumber) {
    if(typeof(a) == "string" || typeof(b) == "string") {
        return a.toString() + b.toString(); // this is string concatenation and is permissible in TS
    }
    return a + b
}



// Example 2 for Types

type Employee = {
    name: string;
    startDate: Date;
};

type Manager = {
    name: string;
    department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
};
