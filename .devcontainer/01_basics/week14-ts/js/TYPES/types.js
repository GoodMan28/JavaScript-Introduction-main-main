function printId(id) {
    console.log(`ID: ${id}`);
}
printId(101); // ID: 101
printId("202"); // ID: 202
// function add(a: StringOrNumber, b: StringOrNumber) {
//   return a + b
// }  !! Here the TS will complain because the JS can add various combinations of string and number
// But TS complains and only provides (String + String) and (Number + Number)
// Workaround: Type Narrowing
function add(a, b) {
    if (typeof (a) == "string" || typeof (b) == "string") {
        return a.toString() + b.toString(); // this is string concatenation and is permissible in TS
    }
    return a + b;
}
const teamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
};
export {};
//# sourceMappingURL=types.js.map