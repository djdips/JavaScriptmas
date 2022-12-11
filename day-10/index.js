const strs = ["abc", "", "aaa", "a", "zz"];

function sortByLength(strs) {
  //  write code here.
  return [...strs].sort((a, b) => a.length - b.length);
}

console.log(sortByLength(strs));
