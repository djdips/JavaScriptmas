function insertDashes(arr) {
  // write code here
  return arr
    .split(" ")
    .map((char) => char.split("").join("-"))
    .join(" ");
}

console.log(insertDashes("abc abbca") === "a-b-c a-b-b-c-a");
console.log(insertDashes("kayak") === "k-a-y-a-k");
console.log(insertDashes("abc  abbca") === "a-b-c  a-b-b-c-a");
