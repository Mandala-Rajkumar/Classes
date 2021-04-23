// Nullish Coalescing (represented by ??)

// case-1
console.log(0 || "Falsy");
console.log(0 ?? "Falsy");

// case-2
console.log('' || "Falsy");
console.log('' ?? "Falsy");

console.log(true ?? false);
// In above example we used (??) Nullish Coalescing because sometimings we need the value of 0 and empty string etc.
